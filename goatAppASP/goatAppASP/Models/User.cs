using AspNetCore.Identity.MongoDbCore.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDbGenericRepository.Attributes;

namespace goatAppASP.Models;

[CollectionName("UserCreds")]
public class User
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public String Id { get; set; }

    [BsonElement("Username")]
    public string UserName { get; set; }

    [BsonElement("Password")]
    public string Password { get; set; }

    [BsonElement("FirstName")]
    public string? FirstName { get; set; }

    [BsonElement("LastName")]
    public string? LastName { get; set; }
}

public class UserDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;

    public string Databasename { get; set; } = null!;

    public string UserCollectionName { get; set; } = null!;
}
