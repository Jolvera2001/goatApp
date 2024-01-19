using Microsoft.Extensions.Options;
using MongoDB.Driver;
using goatAppASP.Models;
using System.Reflection.Metadata;

namespace goatAppASP.Services;

public class UserServices
{
    private readonly IMongoCollection<User> _userCollection;

    public UserServices(IMongoClient mongoClient)
    {
        var mongoDatabase = mongoClient.GetDatabase("");

        _userCollection = mongoDatabase.GetCollection<User>("");
    }

    public async Task<List<User>> GetAsync() =>
            await _userCollection.Find(_ => true).ToListAsync();

    public async Task<User?> GetAsync(string id) =>
        await _userCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(User newUser) =>
        await _userCollection.InsertOneAsync(newUser);

    public async Task UpdateAsync(string id, User updatedUser) =>
        await _userCollection.ReplaceOneAsync(x => x.Id == id, updatedUser);

    public async Task RemoveAsync(string id) =>
        await _userCollection.DeleteOneAsync(x => x.Id == id);
}
