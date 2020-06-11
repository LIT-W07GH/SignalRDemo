using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace SignalRDemo.Controllers
{
    [Route("api/[controller]")]
    public class SampleSignalRController : Controller
    {
        private readonly IHubContext<ChatHub> _context;

        public SampleSignalRController(IHubContext<ChatHub> context)
        {
            _context = context;
        }

        public void SignalRHubInController()
        {
            //_context.Clients.All.SendAsync()
        }
    }
}