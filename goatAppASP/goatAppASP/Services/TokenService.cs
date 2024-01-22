using goatAppASP.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace goatAppASP.Services;

public class TokenService
{
    public string GenerateJwtToken(User user)
    {
        var jwtKey = Environment.GetEnvironmentVariable("JwtKey");

        if (jwtKey == null)
        {
            return ("Error with JwtKey");
        }

        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey)); // TODO
        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.Name, user.UserName),
            // add additional claims if needed
        };

        var token = new JwtSecurityToken(
            issuer: "GoatApp",
            audience: "User",
            claims: claims,
            expires: DateTime.UtcNow.AddHours(1),
            signingCredentials: credentials
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
