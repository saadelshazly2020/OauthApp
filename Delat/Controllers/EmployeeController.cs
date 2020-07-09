using Delat.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Delat.Controllers
{
    [Authorize]
    public class EmployeeController : ApiController
    {
        DeltaDbContext db = new DeltaDbContext();
        // GET: api/Employee
        /// <summary>
        /// Return all Employee based on hiring date
        /// </summary>
        public IHttpActionResult Get()
        {
            return Json(db.Employees.Select(x => new
            {
                Id = x.Id,
                EmployeeName = x.Name,
                EmployeeAge = x.Age,
                HireDate = x.HiringDate
            }).OrderByDescending(x => x.HireDate));
        }
        // POST: api/Employee
        /// <summary>
        /// Add new Employee
        /// </summary>
        public HttpStatusCode Add([FromBody]EmpDTO newEmp)
        {
            try
            {
                Employee emp = new Employee() { Name = newEmp.Name, Age = newEmp.Age, HiringDate = newEmp.HiringDate };
                db.Employees.Add(emp);
                db.SaveChanges();
                return HttpStatusCode.OK;
            }
            catch (Exception)
            {
                return HttpStatusCode.InternalServerError;

            }

        }

    }
}
