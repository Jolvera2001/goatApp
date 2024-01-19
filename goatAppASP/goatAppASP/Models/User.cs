using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace goatAppASP.Models;

public class User
{
    [BsonId]
    [BsonRepresentation(BsonType.String)]
    public string? Id { get; set; }

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
