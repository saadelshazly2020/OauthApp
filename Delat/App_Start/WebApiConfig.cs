using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Delat
{

    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            //api
            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            //routes.MapRoute(
            //             name: "Spa",
            //             url: "{*anything}",
            //             defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            //         );
        }
    }
}
