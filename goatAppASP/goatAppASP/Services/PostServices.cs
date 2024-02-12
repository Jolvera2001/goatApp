using MongoDB.Driver;

namespace goatAppASP.Services
{
    public class PostServices
    {
        private readonly IMongoCollection<Post> _postCollection;

        public PostServices(IMongoClient mongoClient)
        {
            var mongoDatabase = mongoClient.GetDatabase("");
            _postCollection = mongoDatabase.GetCollection<Post>("");
        }
    }
}
