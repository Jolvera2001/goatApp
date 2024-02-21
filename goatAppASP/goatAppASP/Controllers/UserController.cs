using System.Security.Claims;
using Amazon.Runtime.Internal;
using goatAppASP.Models;
using Microsoft.AspNetCore.Identity;
using goatAppASP.Services;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;

namespace goatAppASP.Controllers
{
    [ApiController]
    [Route("[controller]/credentials")]
    public class UserController : ControllerBase
    {
        private readonly UserServices _userService;
        private readonly ConnectionsService _connectionsService;
        private readonly IConfiguration _configuration;
        private readonly TokenService _tokenService;

        public UserController(UserServices userService, ConnectionsService connectionsService, IConfiguration configuration, TokenService tokenService)
        {
            _connectionsService = connectionsService;
            _userService = userService;
            _configuration = configuration;
            _tokenService = tokenService;
        }

        [Route("login")]
        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Login(LoginModel login)
        {
            if (ModelState.IsValid)
            {
                // check if the username exists
                var userLoggingIn = await _userService.GetAsyncName(login.Username);
                Console.WriteLine("Got user logging in");

                if (userLoggingIn == null) return Unauthorized("Invalid Credentials");
                Console.WriteLine("User Exists");

                // then we check the password
                if (login.Password != userLoggingIn.Password) return BadRequest("Invalid Credentials");
                Console.WriteLine("valid password");

                // once this is good, then we return the Jwt
                Console.WriteLine("Successful login!");
                var token = _tokenService.GenerateJwtToken(userLoggingIn);
                return Ok(new { token });
            }

            return BadRequest("ModeState is Invalid");
        }

        [Route("register")]
        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Register(User user)
        {
            user.Id = ObjectId.GenerateNewId().ToString();
            
            // check if the username already exists
            var usernameCheck = await _userService.GetAsyncName(user.UserName);
            if (usernameCheck != null) return Conflict("Username Taken");

            var newUser = user;

            // uploading to atlas db
            await _userService.CreateAsync(newUser);
            
            // creating new connections model
            Connections newConnections = new Connections()
            {
                UserName = user.UserName,
                Followers = new List<string>(),
                Following = new List<string>()
            };
            
            // adding new connections to DB
            await _connectionsService.CreateAsync(newConnections);

            // returning status code
            var token = _tokenService.GenerateJwtToken(newUser);
            return Ok(new { token });
        }

        [Route("deleteUser")]
        [HttpDelete]
        public async Task<IActionResult> DeleteUser(string id)
        {
            if (id.IsNullOrEmpty()) return BadRequest("Invalid request");
            // deleting user
            await _userService.RemoveAsync(id);
            return Ok("Successfully removed");
        }

        [Route("userProfile")]
        [HttpGet]
        public async Task<IActionResult> FetchProfile()
        {
            // checking authorization header
            if (!Request.Headers.ContainsKey("Authorization"))
            {
                return BadRequest("Authorization Header Missing");
            }

            var authorizationHeader = Request.Headers["Authorization"].FirstOrDefault();
            if (string.IsNullOrEmpty(authorizationHeader))
            {
                return BadRequest("Authorization header is empty");
            }

            var token = authorizationHeader.Replace("Bearer ", "");

            // Getting claims
            var nameClaim = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Name);

            if (nameClaim != null) return Conflict(nameClaim.Value);

            var username = nameClaim.Value;

            // now we fetch the user info
            var profile = await _userService.GetAsyncName(username);

            return Ok(new {profile});
        }
    }
}
