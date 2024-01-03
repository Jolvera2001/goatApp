using MongoDB.Driver;
using goatAppASP.Models;

var builder = WebApplication.CreateBuilder(args);

// adding in MongoDB
string? MongoDB_URI = null;
// TODO, set up mongoDB URI

//if (string.IsNullOrWhiteSpace(connectionString))
//{
//    Console.WriteLine("You must set your 'MONGODB_URI' environment variable.");
//Environment.Exit(0);
//}

// var client = new MongoClient(connectionString);

// adding singleton for DepInj for MongoClient
// builder.Services.AddSingleton<IMongoClient>(client);

// adding services
// builder.Services.AddSingleton<UserService>();

// builder.Services.Configure<UserDatabaseSettings>(
//    builder.Configuration.GetSection("UserDatabase"));

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

// setting up to use static files from vite build
app.UseDefaultFiles();
app.UseStaticFiles();

app.Run();
