using System.Web.Http;
using WebActivatorEx;
using Delat;
using Swashbuckle.Application;
using Delat.Helper;
using Delat.App_Start;

[assembly: PreApplicationStartMethod(typeof(SwaggerConfig), "Register")]

namespace Delat
{
    public class SwaggerConfig
    {
        public static void Register()
        {
            var thisAssembly = typeof(SwaggerConfig).Assembly;

            GlobalConfiguration.Configuration
.EnableSwagger(c =>
{
    c.DocumentFilter<AuthTokenOperation>();
    c.OperationFilter<AuthorizationOperationFilter>();
    c.SingleApiVersion("v1", "OAuth2 Api Security App Demo");
    //c.OAuth2("oauth2")
    //                    .Description("OAuth2 Implicit Grant")
    //                    .Flow("password")
    //                    .AuthorizationUrl("/api/Account/ExternalLogin")
    //                    .TokenUrl("/Token")
    //                    .Scopes(scopes =>
    //                    {
    //                        scopes.Add("values:read", "Read access to protected resources");
    //                        scopes.Add("values:write", "Write access to protected resources");
    //                    });

    //c.OperationFilter<AssignOAuth2SecurityRequirements>();




})
.EnableSwaggerUi();
        }
    }
}
