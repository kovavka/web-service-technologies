using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace сonsole
{
    class Program
    {
        private static string url = "http://localhost:3000";

        static void Main(string[] args)
        {
            Run();
        }

        static void Run()
        {
            while (true)
            {
                Console.WriteLine(@"1. Post
2. Put");

                try
                {
                    switch (Console.ReadLine())
                    {
                        case "1":
                            Post();
                            break;
                        case "2":
                            Put();
                            break;
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                }
            }
            
        }

        static void Post()
        {
            Console.Write("Name: ");
            var name = Console.ReadLine();
            Console.Write("Year: ");
            var year = int.Parse(Console.ReadLine());

            var cat = new Cat()
            {
                Name = name,
                Year = year
            };

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(url);

                var content = new FormUrlEncodedContent(new[]
                {
                    new KeyValuePair<string, string>("id", cat.Id.ToString()),
                    new KeyValuePair<string, string>("name", cat.Name),
                    new KeyValuePair<string, string>("year", cat.Year.ToString()),
                });

                var result = client.PostAsync("/", content).Result.Content.ReadAsStringAsync().Result;
                Console.WriteLine(result);
            }

        }

        static void Put()
        {
            Console.Write("Id: ");
            var id = long.Parse(Console.ReadLine());
            Console.Write("Name: ");
            var name = Console.ReadLine();
            Console.Write("Year: ");
            var year = int.Parse(Console.ReadLine());

            var cat = new Cat()
            {
                Id = id,
                Name = name,
                Year = year
            };

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(url);

                var content = new FormUrlEncodedContent(new[]
                {
                    new KeyValuePair<string, string>("id", cat.Id.ToString()),
                    new KeyValuePair<string, string>("name", cat.Name),
                    new KeyValuePair<string, string>("year", cat.Year.ToString()),
                });

                var result = client.PutAsync("/", content).Result.Content.ReadAsStringAsync().Result;
                Console.WriteLine(result);
            }
        }
    }

    class Cat
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
    }
}
