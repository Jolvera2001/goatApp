using goatAppASP.Models;
using MongoDB.Driver;
using System.Reflection.Metadata;

namespace goatAppASP.Services;

public class UserService
{
    private readonly IMongoCollection<User> _userCollection;

    public UserService(IMongoClient mongoClient)
    {
        var mongoDatabase = mongoClient.GetDatabase("users");

        _userCollection = mongoDatabase.GetCollection<User>("userData");
    }

    // CRUD Operations
    public async Task<List<Blog>> GetAsync() =>
            await _blogCollection.Find(_ => true).ToListAsync();

    public async Task<Blog?> GetAsync(string id) =>
        await _blogCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Blog newBlog) =>
        await _blogCollection.InsertOneAsync(newBlog);

    public async Task UpdateAsync(string id, Blog updatedBlog) =>
        await _blogCollection.ReplaceOneAsync(x => x.Id == id, updatedBlog);

    public async Task RemoveAsync(string id) =>
        await _blogCollection.DeleteOneAsync(x => x.Id == id);
}
