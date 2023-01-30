namespace gitkria
{
  public class Favorites
  {
    public int Id { get; set; }
    public int Id_User_Git { get; set; }
    public int Id_Repo_Git { get; set; }
    public string? User_Name { get; set; }
    public string? Repository { get; set; }

    public bool Favorite { get; set; }
  }
}
