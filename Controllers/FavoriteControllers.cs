using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace gitkria.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class FavoriteControllers : ControllerBase
  {
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<FavoriteControllers> _logger;

    public FavoriteControllers(ILogger<FavoriteControllers> logger)
    {
      _logger = logger;
    }

    [HttpGet]
    public IEnumerable<Favorites> Get()
    {
      return Enumerable.Range(1, 5).Select(index => new Favorites
      {

        Id_User_Git = Random.Shared.Next(1, 55),
        Id_Repo_Git = Random.Shared.Next(60, 100),
        User_Name = Summaries[Random.Shared.Next(Summaries.Length)],
        Repository = Summaries[Random.Shared.Next(Summaries.Length)],
        Favorite = true
      })
      .ToArray();
    }

    [HttpPost]
    public IActionResult CreateFavorite([FromBody] FavoriteModel favorite)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }
      // aqui você pode inserir o favorite no banco de dados, se necessário

      String? line;
      try
      {
        //Pass the file path and file name to the StreamReader constructor
        StreamReader sr = new StreamReader("D:\\workspace\\C#\\Project1\\Controllers\\Sample.txt");
        //Read the first line of text
        line = sr.ReadLine();
        //Continue to read until you reach end of file
        while (line != null)
        {
          //write the line to console window
          Console.WriteLine(line);
          //Read the next line
          line = sr.ReadLine();
        }
        //close the file
        sr.Close();
        Console.ReadLine();
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

    public class FavoriteModel
    {
      public int Id_User_Git { get; set; }
      public int Id_Repo_Git { get; set; }
      public string? User_Name { get; set; }
      public string? Repository { get; set; }
      public bool Favorite { get; set; }
    }
  }
}