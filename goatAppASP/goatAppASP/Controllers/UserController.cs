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
                    var token = GenerateJwtToken(userLoggingIn);
                    return Ok(new { token });
                }
            }
            
            // Invalid user or pass
            return Unauthorized("Invalid Username or Password");
        }

        [Route("register")]
        [HttpPost]
        public IActionResult register([FromBody] Dictionary<string, string> formData)
        {
            /// Anticipated Form data
            /// Username : [ ] 
            /// Password : [ ]
            /// FirstName : [ ]
            /// LastName : [ ] 
            
            return Ok("Registration Successful");
        }
        

    }
}
