using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Configuration;

namespace SignalRDemo
{
    public class ChatMessage
    {
        public string Message { get; set; }
    }

    public class ChatHub : Hub
    {
        private static int _counter = 0;

        private string _connectionString;

        public ChatHub(IConfiguration configuration)
        {
            //configuration.GetConnectionString("ConStr");
        }

        public void SendMessage(ChatMessage chatMessage)
        {
            //var user = Context.User.Identity.Name;
            Clients.All.SendAsync("newMessage", new { message = chatMessage.Message });
        }

        public void NewUser()
        {
            _counter++;
            SendCurrentCount();
        }

        public void Disconnect()
        {
            _counter--;
            SendCurrentCount();
        }

        private void SendCurrentCount()
        {
            Clients.All.SendAsync("newuser", new { count = _counter });
        }
    }
}
