using goatAppASP.Models;
using Microsoft.AspNetCore.Mvc;

namespace goatAppASP.Controllers;


[ApiController]
[Route("[controller]/post")]
public class PostController : ControllerBase
{
    private readonly PostServices _postService;
    private readonly IConfiguration _configuration;

    public PostController(PostServices _postService, IConfiguration configuration)
    {
        _postService = PostService;
        _configuration = configuration;
    }

    [Route("upload")]
    [HttpPost]
    public async Task<IActionResult> Upload(PostModel post)
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