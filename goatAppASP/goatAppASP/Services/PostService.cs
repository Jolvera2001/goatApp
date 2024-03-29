﻿using MongoDB.Driver;
using goatAppASP.Models;

namespace goatAppASP.Services
{
    public class PostService
    {
        private readonly IMongoCollection<Posts> _postCollection;

        public PostService(IMongoClient mongoClient)
        {
            var mongoDatabase = mongoClient.GetDatabase("goat-places");
            _postCollection = mongoDatabase.GetCollection<Posts>("Posts");
        }

        public async Task<List<Posts>> GetFeedAsync(string username) =>
            await _postCollection.Find(x => x.UserName == username).ToListAsync();

        public async Task<Posts?> GetAsync(string id) =>
            await _postCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task<List<Posts>> GetAsyncList(string username) =>
            await _postCollection.Find(x => x.UserName == username).ToListAsync();

        public async Task CreateAsync(Posts newPost) =>
            await _postCollection.InsertOneAsync(newPost);

        public async Task UpdateAsync(string id, Posts updatedPost) =>
            await _postCollection.ReplaceOneAsync(x => x.Id == id, updatedPost);

        public async Task RemoveAsync(string id) =>
            await _postCollection.DeleteOneAsync(x => x.Id == id);
    }
}
