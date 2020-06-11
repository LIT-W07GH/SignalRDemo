import React, { Component } from 'react';
import { HubConnectionBuilder } from '@aspnet/signalr';

export class Home extends Component {

  state = {
    connection: null,
    chatMessage: '',
    messages: [],
    totalUsers: 0
  }

  componentDidMount = async () => {
    const connection = new HubConnectionBuilder()
      .withUrl("/chatHub").build();

    await connection.start();
    connection.invoke("newuser");

    connection.on("newMessage", obj => {
      this.setState({ messages: [obj.message, ...this.state.messages] })
    });

    connection.on('newuser', obj => {
      this.setState({ totalUsers: obj.count });
    });

    this.setState({ connection });
  }

  componentWillUnmount = () => {
    this.state.connection.invoke('disconnect');
  }

  onSendClick = () => {
    this.state.connection.invoke("sendMessage", { message: this.state.chatMessage });
    this.setState({ chatMessage: '' });
  }

  onChatMessageChange = e => this.setState({ chatMessage: e.target.value });

  render() {
    return (
      <div>
        
        <div className="row" style={{ marginTop: 100 }}>
        <h2>Total users: {this.state.totalUsers}</h2>
          <div className="col-md-8">
            <input className="form-control" onChange={this.onChatMessageChange}
              value={this.state.chatMessage}
              type="text" placeholder="Enter chat message..." />
          </div>
          <div className="col-md-2">
            <button onClick={this.onSendClick} className="btn btn-primary">Send Message</button>
          </div>
        </div>
        <div>
          <ul>
            {this.state.messages.map((m, i) => <li key={i}>{m}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}
