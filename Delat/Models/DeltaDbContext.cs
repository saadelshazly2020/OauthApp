using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Delat.Models
{
    public class DeltaDbContext : IdentityDbContext
    {
        public DeltaDbContext()
            : base("DeltaDbContext")
        {
        }

        public DbSet<Client> Clients { get; set; }
        public DbSet<Employee> Employees { get; set; }


    }
}