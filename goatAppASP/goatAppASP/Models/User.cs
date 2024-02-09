using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDbGenericRepository.Attributes;

namespace goatAppASP.Models;

[CollectionName("UserCreds")]
public class User
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    
    [Required]
    [BsonElement("Username")]
    public string UserName { get; set; }

    [Required]
    [BsonElement("Password")]
    public string Password { get; set; }
    
    [Required]
    [BsonElement("Email")]
    public string Email { get; set; }

    [Required]
    [BsonElement("FirstName")]
    public string? FirstName { get; set; }

    [Required]
    [BsonElement("LastName")]
    public string? LastName { get; set; }
}

