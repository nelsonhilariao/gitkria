using gitkria.Models;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Text;
using System.Text.Json;
using System.Xml.Linq;

namespace gitkria.Controllers
{
  
  [ApiController]
  [Route("[controller]")]
  public class FavoriteControllers : ControllerBase
    {
        [HttpGet]
        [Route(template: "/api/favorites")]
        public IActionResult GetFiles()
        {
            List<Favorites> favorites = new List<Favorites>();

            var directory = new DirectoryInfo("Data");
            var files = directory.GetFiles("*.json");

            foreach (var file in files)
            {
                byte[] fileBytes = System.IO.File.ReadAllBytes(file.FullName);
                string fileContent = Encoding.UTF8.GetString(fileBytes);
                var favorite = JsonSerializer.Deserialize<Favorites>(fileContent);
                favorites.Add(favorite);
            }

            return Ok(favorites);
        }



        [HttpPost]
        [Route(template: "/favorites")]
        public IActionResult CreateFavorite([FromBody] Favorites favorite)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                StreamWriter sw = new StreamWriter($"./Data/{favorite.login}.json");

                string jsonString = JsonSerializer.Serialize(favorite);

                sw.WriteLine(jsonString + Environment.NewLine);
                sw.Close();
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception: " + e.Message);
            }
            finally
            {
                Console.WriteLine("Executing finally block.");
            }

            return Ok(favorite);
        }


        [HttpDelete]
        [Route(template: "/favorites/{login}")]
        public IActionResult DeleteFile(string login)
        {
            try
            {
                if (System.IO.File.Exists($"./Data/{login}.json"))
                {
                    System.IO.File.Delete($"./Data/{login}.json");
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception: " + e.Message);
                return BadRequest();
            }

            return Ok();
        }

    }
}