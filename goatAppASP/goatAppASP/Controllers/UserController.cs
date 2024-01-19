using Microsoft.AspNetCore.Mvc;

namespace goatAppASP.Controllers
{
    [ApiController]
    [Route("[controller]/credentials")]
    public class UserController : ControllerBase
    {
        [Route("login")]
        [HttpPost]
        public IActionResult Login([FromBody] Dictionary<string, string> formData)
        {
            return Ok("Login Successful");
        }

        [Route("register")]
        [HttpPost]
        public IActionResult register([FromBody] Dictionary<string, string> formData)
        {
            return Ok("Registration Successful");
        }
        

    }
}
