using goatAppASP.Models;
using Microsoft.AspNetCore.Identity;
using goatAppASP.Services;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using Microsoft.AspNetCore.Authorization;

namespace goatAppASP.Controllers
{
    [ApiController]
    [AllowAnonymous]
    [Route("[controller]/credentials")]
    public class UserController : ControllerBase
    {
        private readonly UserServices _userService;
        private readonly IConfiguration _configuration;
        private readonly TokenService _tokenService;

        public UserController(UserServices userService, IConfiguration configuration, TokenService tokenService)
        {
            _userService = userService;
            _configuration = configuration;
            _tokenService = tokenService;
        }

        [Route("login")]
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

            // returning status code
            var token = _tokenService.GenerateJwtToken(newUser);
            return Ok(new { token });
        }
    }
}
