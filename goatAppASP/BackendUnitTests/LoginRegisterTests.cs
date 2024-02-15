namespace BackendUnitTests
{
    public class LoginRegisterTests
    {
        [Fact]
        public async Task RegisterUsers()
        {
            // valid users
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
                UserName = "MymyweWa",
                Password = "ongeziligIdkHowToSpellIt",
                Email = "SHUTUP@gmail.com",
                FirstName = "MYMY",
                LastName = "J"
            };

            // invalid users
            User badUser1 = new User
            {
                Id = "",
                UserName = null,
                Password = null,
                Email = null,
                FirstName = null,
                LastName = null
            };
            User badUser2 = new User
            {
                Id = "",
                UserName = "MiasmaMongo", // testing for same username
                Password = "RunByJoji",
                Email = "OfficialJoji@gmail.com",
                FirstName = "Joji",
                LastName = "Vlogs"
            };
            User badUser3 = new User
            {
                Id = "",
                UserName = null,
                Password = "ongeziligIdkHowToSpellIt",
                Email = "SHUTUP@gmail.com",
                FirstName = "MYMY",
                LastName = "J"
            };

            // Setting up http client
            var client = new HttpClient();
            var url = "";

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