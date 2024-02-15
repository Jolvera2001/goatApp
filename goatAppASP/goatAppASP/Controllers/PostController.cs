using goatAppASP.Models;
using goatAppASP.Services;
using Microsoft.AspNetCore.Mvc;

namespace goatAppASP.Controllers;


[ApiController]
[Route("[controller]/post")]
public class PostController : ControllerBase
{
    private readonly PostService _postService;
    private readonly IConfiguration _configuration;

    public PostController(PostService postService, IConfiguration configuration)
    {
        _postService = postService;
        _configuration = configuration;
    }

    [Route("upload")]
    [HttpPost]
    public async Task<IActionResult> Upload(Posts post)
    {

    }

    [Route("getFeed")]
    [HttpGet]
    public async Task<IActionResult> GetFeed(User user)
    {

    }

    [Route("getPost")]
    [HttpGet]
    public async Task<IActionResult> GetPost(string postId)
    {

    }

}