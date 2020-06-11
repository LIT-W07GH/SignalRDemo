# SignalRDemo

To get started with SignalR, create a class in the root of the application that inherits from Hub. Here's a sample:

https://github.com/LIT-W07GH/SignalRDemo/blob/master/SignalRDemo/ChatHub.cs

You'll then need to make sure to add the two following lines in the `Startup.cs` class:

https://github.com/LIT-W07GH/SignalRDemo/blob/master/SignalRDemo/Startup.cs#L24

https://github.com/LIT-W07GH/SignalRDemo/blob/master/SignalRDemo/Startup.cs#L49-L52 (on this line you don't have to use `/chathub`, you can use any URL you want)

Then, install the following npm package in your client app:

`npm install @aspnet/signalr`

Some additional notes: 

To use SignalR outside of the hub: https://github.com/LIT-W07GH/SignalRDemo/blob/master/SignalRDemo/Controllers/SampleSignalRController.cs#L13-L23

To get the currently logged in user in the Hub: https://github.com/LIT-W07GH/SignalRDemo/blob/master/SignalRDemo/ChatHub.cs#L28

To get the connection string in the hub: https://github.com/LIT-W07GH/SignalRDemo/blob/master/SignalRDemo/ChatHub.cs#L21-L24

