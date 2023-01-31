

using gitkria.Controllers;
using gitkria.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Text.Json;
using Xunit;

namespace gitkria.Tests
{
    public class FavoriteControllersTest
    {
        private readonly FavoriteControllers _controller;

        public FavoriteControllersTest()
        {
            _controller = new FavoriteControllers();
        }

        [Fact]
        public void GetFavorites_ReturnsOkResult()
        {
            // Act
            var okResult = _controller.GetFiles() as OkObjectResult;

            // Assert
            Assert.NotNull(okResult);
            Assert.IsAssignableFrom<List<Favorites>>(okResult.Value);
        }

        [Fact]
        public void CreateFavorite_ReturnsOkResult()
        {
            // Arrange
            var favorite = new Favorites
            {
                Id = 1,
                Id_User_Git = 123456,
                Id_Repo_Git = 654321,
                login = "testlogin",
                name = "testname",
                favorite = true,
                avatar_url = "testavatarurl",
                description = "testdescription",
                updated_at = DateTime.Now
            };

            // Act
            var okResult = _controller.CreateFavorite(favorite) as OkObjectResult;

            // Assert
            Assert.NotNull(okResult);
            Assert.IsAssignableFrom<Favorites>(okResult.Value);
            Assert.Equal(favorite, okResult.Value);

            // Clean up
            string fileName = $"./Data/{favorite.login}.json";
            if (System.IO.File.Exists(fileName))
            {
                System.IO.File.Delete(fileName);
            }
        }

        [Fact]
        public void DeleteFile_ReturnsOkResult()
        {
            // Arrange
            var favorite = new Favorites
            {
                Id = 1,
                Id_User_Git = 123456,
                Id_Repo_Git = 654321,
                login = "testlogin",
                name = "testname",
                favorite = true,
                avatar_url = "testavatarurl",
                description = "testdescription",
                updated_at = DateTime.Now
            };

            StreamWriter sw = new StreamWriter($"./Data/{favorite.login}.json");
            string jsonString = JsonSerializer.Serialize(favorite

