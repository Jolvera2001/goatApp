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

        public UserController(UserServices userService, IConfiguration configuration, SignInManager<User> signInManager)
        {
            _userService = userService;
            _signInManager = signInManager;
            _configuration = configuration;
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

            if (userLoggingIn != null)
            {
                // then we check the password
                var result = _signInManager.CheckPasswordSignInAsync(userLoggingIn, password, lockoutOnFailure: false);

                if (result.IsCompletedSuccessfully)
                {
                    // once this is good, then we return the Jwt
                    var token = GenerateJwtToken(userLoggingIn); // TODO
                    return Ok(new { token });
                }
            }
            
            // Invalid user or pass
            return Unauthorized("Invalid Username or Password");
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
            if (usernameCheck == null)
            {
                var password = formData["password"];
                var firstName = formData["username"];
                var lastName = formData["lastname"];

                User newUser = new User
                {
                    UserName = username,
                    Password = password,
                    FirstName = firstName,
                    LastName = lastName
                };

                // uploading to atlas db
                await _userService.CreateAsync(newUser);

                // returning status code
                return Ok("User account successfully created and uploaded to DB");

                // should we redirect and create a Jwt here?
            }

            // username already taken
            return BadRequest("Username already taken");
        }
    }
}
