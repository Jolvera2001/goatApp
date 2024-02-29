using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDbGenericRepository.Attributes;

namespace goatAppASP.Models;

[CollectionName("Posts")]
public class Posts
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    
    [Required]
    [BsonElement("Username")]
    public string UserName { get; set; }

    [Required]
    [BsonElement("Title")]
    public string Title { get; set; }
    
    [Required]
    [BsonElement("Description")]
    public string Description { get; set; }

}
