using goatAppASP.Models;
using goatAppASP.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// MongoDB connection Setup
var connectionString = Environment.GetEnvironmentVariable("MongoDBGoatApp_URI");
if (connectionString == null)
{
    Console.WriteLine("You must set up your MongoDBGoatAPP_URI env variable!");
    Environment.Exit(0);
}

MongoClient client = new MongoClient(connectionString);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddSingleton<IMongoClient>(client);

// Add CRUD Services for APIs
builder.Services.AddSingleton<UserServices>();

// Add Jwt Service
builder.Services.AddScoped<TokenService>();

// Add configuration settings for services
builder.Services.Configure<UserDatabaseSettings>(
    builder.Configuration.GetSection("UserDatabase"));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// adding in Jwts
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("Something")), // TODO on laptop
        ValidateIssuer = true,
        ValidateAudience = true,
        ClockSkew = TimeSpan.Zero
    };
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
