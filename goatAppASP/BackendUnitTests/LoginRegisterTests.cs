namespace BackendUnitTests
{
    public class LoginRegisterTests
    {
        [Fact]
        public void RegisterUsers()
        {
            User user1 = new User
            {
                Id = "",
                UserName = "JohnDevOps",
                Password = "12345Typer",
                Email = "John@Gmail.com",
                FirstName = "John",
                LastName = "DevOps"
            };
            User user2 = new User
            {
                Id = "",
                UserName = "MiasmaMongo",
                Password = "RunByJoji",
                Email = "OfficialJoji@gmail.com",
                FirstName = "Joji",
                LastName = "Vlogs"
            };
            User user3 = new User
            {
                Id = "",
                UserName = "",
                Password = "12345Typer",
                Email = "John@Gmail.com",
                FirstName = "John",
                LastName = "DevOps"
            };

        }

        [Fact]
        public void LoginUsers()
        {

        }

        [Fact]
        public void DeleteUsers()
        {

        }
    }
}