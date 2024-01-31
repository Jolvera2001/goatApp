using Microsoft.Extensions.Options;
using MongoDB.Driver;
using goatAppASP.Models;
using System.Reflection.Metadata;
using MongoDB.Bson;

namespace goatAppASP.Services;

public class UserServices
{
    private readonly IMongoCollection<User> _userCollection;

    public UserServices(IMongoClient mongoClient)
    {
        var mongoDatabase = mongoClient.GetDatabase("goat-places");

        _userCollection = mongoDatabase.GetCollection<User>("UserCreds");
    }

    public async Task<List<User>> GetAsync() =>
            await _userCollection.Find(_ => true).ToListAsync();

    public async Task<User?> GetAsync(String id) =>
        await _userCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task<User?> GetAsyncName(string name) =>
        await _userCollection.Find(x => x.UserName == name).FirstOrDefaultAsync();

    public async Task CreateAsync(User newUser) =>
        await _userCollection.InsertOneAsync(newUser);

    public async Task UpdateAsync(String id, User updatedUser) =>
        await _userCollection.ReplaceOneAsync(x => x.Id == id, updatedUser);

    public async Task RemoveAsync(String id) =>
        await _userCollection.DeleteOneAsync(x => x.Id == id);
}
