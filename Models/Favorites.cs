namespace gitkria.Models
{
    public class Favorites
    {
        public int Id { get; set; }
        public int Id_User_Git { get; set; }
        public int Id_Repo_Git { get; set; }
        public string? login { get; set; }
        public string? name { get; set; }
        public bool favorite { get; set; }
        public string? avatar_url { get; set; }
        public string? description { get; set; }
        public DateTime? updated_at { get; set; }

    }
}
