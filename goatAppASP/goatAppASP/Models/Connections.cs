using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDbGenericRepository.Attributes;
using System.ComponentModel.DataAnnotations;

namespace goatAppASP.Models
{
    [CollectionName("UserConnections")]
    public class Connections
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [Required]
        [BsonElement("Username")]
        public string UserName { get; set; }

        [Required]
        [BsonElement("Following")]
        public List<string> Following { get; set; }


        [Required]
        [BsonElement("Followers")]
        public List<string> Followers { get; set; }
    }
}
