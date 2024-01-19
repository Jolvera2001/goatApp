using MongoDB.Driver;

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

// Add configuration settings for services

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

app.Run();
