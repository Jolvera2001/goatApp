using System.Security.Claims;
using goatAppASP.Models;
using goatAppASP.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace goatAppASP.Controllers;


[ApiController]
[Route("[controller]/post")]
public class PostController : ControllerBase
{
    private readonly PostService _postService;
    private readonly ConnectionsService _connectionService;
    private readonly IConfiguration _configuration;

    public PostController(PostService postService, ConnectionsService connectionService, IConfiguration configuration)
    {
        _postService = postService;
        _connectionService = connectionService;
        _configuration = configuration;
    }

    [Route("upload")]
    [HttpPost]
    public async Task<IActionResult> Upload(Posts post)
    {
        if (ModelState.IsValid)
        {
            // we can just upload it
            await _postService.CreateAsync(post);
            return Ok("Post successfully uploaded");
        }

        return BadRequest("Invalid data");
    }

    [Route("getFeed")]
    [HttpGet]
    public async Task<IActionResult> GetFeed()
    {
        // checking for claim
        var nameClaim = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Name);
        if (nameClaim != null) return Conflict(nameClaim.Value);

        var username = nameClaim.Value;

        // fetch connections.followers
        var connectionsData = await _connectionService.GetAsync(username);

        // difficult part: We get each post for each of the users in this list
        List<Posts> feed = new List<Posts>();

        foreach (var following in connectionsData.Following)
        {
            if (following != null)
            {
                feed.AddRange(await _postService.GetFeedAsync(following));
            }

            return Ok(new { feed });
        }

        return BadRequest("Invalid Request");
    }

    [Route("getPost")]
    [HttpGet]
    public async Task<IActionResult> GetPost(string postId)
    {
        if (ModelState.IsValid)
        {
            if (postId.IsNullOrEmpty()) return BadRequest(string.Empty);
            var post = await _postService.GetAsync(postId);

            if (post == null)
            {
                return NotFound("Post not found");
            }

            else
            {
                return Ok(new { post });
            }
        }

        return BadRequest("Invalid Request");
    }

}