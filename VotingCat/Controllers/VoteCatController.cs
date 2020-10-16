using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using VotingCat.Library;
using HttpGetAttribute = Microsoft.AspNetCore.Mvc.HttpGetAttribute;

namespace VotingCat.Controllers
{
    public class VoteCatController : Controller
    {
        [HttpGet]
        public JsonResult Get()
        {
            return Json(GetJsonValues());

        }

        public List<Cat> GetJsonValues()
        {
            try

            {
                using (WebClient webclient = new WebClient())
                {

                    List<Cat> cats = new List<Cat>();
                    var jsoncats = webclient.DownloadString("https://latelier.co/data/cats.json");
                    dynamic data = JsonConvert.DeserializeObject(jsoncats);

                    foreach (dynamic cat in data.images)
                    {
                        cats.Add(
                        new Cat
                        {
                            id = cat.id,
                            url = cat.url
                        });
                    }
                    return cats;
                    }
                }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
        
    

}
}
}
