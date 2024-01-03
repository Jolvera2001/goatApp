using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace goatAppASP.Models;

public class User
{
    [BsonId]
    public int Id { get; set; }

    [BsonElement("username")]
    public string UserName { get; set; }

    [BsonElement("password")]
    public string Password { get; set; }

    [BsonElement("email")]
    public string Email { get; set; }

}

public class UserDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string BlogCollectionName { get; set; } = null!;
}
