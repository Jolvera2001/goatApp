using System.Net;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Text;
using JsonConvert = Newtonsoft.Json.JsonConvert;

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

            // Setting up http client and Jsons
            var client = new HttpClient();
            var url = "https://localhost:7023/user/credentials/login";

            var json1 = JsonConvert.SerializeObject(user1);
            var content1 = new StringContent(json1, Encoding.UTF8, "application/json");

            var json2 = JsonConvert.SerializeObject(user2);
            var content2 = new StringContent(json2, Encoding.UTF8, "application/json");

            var json3 = JsonConvert.SerializeObject(user3);
            var content3 = new StringContent(json3, Encoding.UTF8, "application/json");

            var badJson1 = JsonConvert.SerializeObject(badUser1);
            var badContent1 = new StringContent(badJson1, Encoding.UTF8, "application/json");

            var badJson2 = JsonConvert.SerializeObject(badUser2);
            var badContent2 = new StringContent(badJson2, Encoding.UTF8, "application/json");

            var badJson3 = JsonConvert.SerializeObject(badUser3);
            var badContent3 = new StringContent(badJson3, Encoding.UTF8, "application/json");

            // testing
            var response1 = await client.PostAsync(url, content1);
            var response2 = await client.PostAsync(url, content2);
            var response3 = await client.PostAsync(url, content3);

            var response4 = await client.PostAsync(url, badContent1);
            var response5 = await client.PostAsync(url, badContent2);
            var response6 = await client.PostAsync(url, badContent3);

            response1.EnsureSuccessStatusCode();
            response2.EnsureSuccessStatusCode();
            response3.EnsureSuccessStatusCode();

            Assert.Equal(HttpStatusCode.BadRequest, response4.StatusCode);
            Assert.Equal(HttpStatusCode.Conflict, response5.StatusCode);
            Assert.Equal(HttpStatusCode.BadRequest, response6.StatusCode);

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