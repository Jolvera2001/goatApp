using MongoDB.Driver;
using goatAppASP.Models;

namespace goatAppASP.Services
{
    public class ConnectionsService
    {
        private readonly IMongoCollection<Connections> _connectioncCollection;

        public ConnectionsService(IMongoClient mongoClient)
        {
            var mongoDatabase = mongoClient.GetDatabase("goat-places");
            _connectioncCollection = mongoDatabase.GetCollection<Connections>("UserConnections");
        }

        public async Task<Connections?> GetAsync(string username) =>
            await _connectioncCollection.Find(x => x.UserName == username).FirstOrDefaultAsync();

        public async Task CreateAsync(Connections newConnections) =>
            await _connectioncCollection.InsertOneAsync(newConnections);

        public async Task UpdateAsync(string username, Connections updatedConnections) =>
            await _connectioncCollection.ReplaceOneAsync(x => x.UserName == username, updatedConnections);

        public async Task RemoveAsync(string username) =>
            await _connectioncCollection.DeleteOneAsync(x => x.UserName == username);
    }
}
