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
    public class ResultController : Controller
    {
        [HttpGet]
        public JsonResult Get()
        {
            try
            {
                List<VoteResult> voteresult = new List<VoteResult>();
                List<Cat> cats = new List<Cat>();
                VoteCatController catcontroller = new VoteCatController();
                cats = catcontroller.GetJsonValues();
                for (int i = 0; i < 3; i++)
                {
                    voteresult.Add(new VoteResult
                    {
                        cat = cats[i],
                        id = i,
                        vote = i*10
                    }

                        );


                }
                return Json(voteresult);

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
        }

        [HttpPost]
        public JsonResult Post(Cat c)
        {
            // Some code here to insert data into database for example

            return Json(true);

        }

    }
}
