﻿using MongoDB.Driver;
using goatAppASP.Models;

namespace goatAppASP.Services
{
    public class PostServices
    {
        private readonly IMongoCollection<Posts> _postCollection;

        public PostServices(IMongoClient mongoClient)
        {
            var mongoDatabase = mongoClient.GetDatabase("");
            _postCollection = mongoDatabase.GetCollection<Post>("");
        }
    }
}
