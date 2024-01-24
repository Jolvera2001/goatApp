using goatAppASP.Models;
using Microsoft.AspNetCore.Identity;
using goatAppASP.Services;
using Microsoft.AspNetCore.Mvc;

namespace goatAppASP.Controllers
{
    [ApiController]
    [Route("[controller]/credentials")]
    public class UserController : ControllerBase
    {
        private readonly UserServices _userService;
        private readonly IConfiguration _configuration;
        private readonly SignInManager<User> _signInManager;
        private readonly TokenService _tokenService;

        public UserController(UserServices userService, IConfiguration configuration, SignInManager<User> signInManager, TokenService tokenService)
        {
            _userService = userService;
            _signInManager = signInManager;
            _configuration = configuration;
            _tokenService = tokenService;
        }

        [Route("login")]
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] Dictionary<string, string> formData)
        {
            /// Anticipated Form data
            /// Username : [ ] 
            /// Password : [ ]
            var userName = formData["userName"];
            var password = formData["password"];

            // check if the username exists
            var userLoggingIn = await _userService.GetAsyncName(userName);

            if (userLoggingIn == null) return Unauthorized("Invalid Credentials");
            
            // then we check the password
            var result = await _signInManager.CheckPasswordSignInAsync(userLoggingIn, password, lockoutOnFailure: false);

            if (!result.Succeeded) return Unauthorized("Invalid Credentials");
            
            // once this is good, then we return the Jwt
            var token = _tokenService.GenerateJwtToken(userLoggingIn);
            return Ok(new { token });

            // Invalid user or pass
        }

        [Route("register")]
        [HttpPost]
        public async Task<IActionResult> register([FromBody] Dictionary<string, string> formData)
        {
            /// Anticipated Form data
            /// Username : [ ] 
            /// Password : [ ]
            /// FirstName : [ ]
            /// LastName : [ ]
            
            var username = formData["username"];

            // check if the username already exists
            var usernameCheck = await _userService.GetAsyncName(username);
            if (usernameCheck != null) return Conflict("Username Taken");
            
            var password = formData["password"];
            var firstName = formData["username"];
            var lastName = formData["lastname"];

            var newUser = new User
            {
                UserName = username,
                Password = password,
                FirstName = firstName,
                LastName = lastName
            };

            // uploading to atlas db
            await _userService.CreateAsync(newUser);

            // returning status code
            var token = _tokenService.GenerateJwtToken(newUser);
            return Ok(new { token });

            // username already taken
        }
    }
}
