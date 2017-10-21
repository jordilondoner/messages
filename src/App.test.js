import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('should render without crashing with initial state', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App.WrappedComponent
    messages={{isPending:false, messages:[]}}
    users={{isPending:false, users:[]}}
    getChatLog={jest.fn()}
    getUsers={jest.fn()}
                  />, div);
});

it('should render without crashing when messages are pending', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App.WrappedComponent
    messages={{isPending:true, messages:[]}}
    users={{isPending:false, users:[]}}
    getChatLog={jest.fn()}
    getUsers={jest.fn()}
                  />, div);
});

it('should render without crashing when users are pending', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App.WrappedComponent
    messages={{isPending:false, messages:[]}}
    users={{isPending:true, users:[]}}
    getChatLog={jest.fn()}
    getUsers={jest.fn()}
                  />, div);
});

it('should render without crashing when users and messages are pending', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App.WrappedComponent
    messages={{isPending:true, messages:[]}}
    users={{isPending:true, users:[]}}
    getChatLog={jest.fn()}
    getUsers={jest.fn()}
                  />, div);
});

it('should render without crashing when messages are loaded and users are pending', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App.WrappedComponent
    messages={{isPending:false, messages:[
      {
        "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
        "userId": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
        "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        "timestamp": "2017-02-09T04:27:38Z"
      },
      {
        "id": "b03569ae-ccbf-4975-8040-4daba638b407",
        "userId": "16373df5-da0a-4074-8295-f916b94269f4",
        "message": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
        "timestamp": "2016-11-09T05:04:58Z"
      }
    ]}}
    users={{isPending:true, users:[]}}
    getChatLog={jest.fn()}
    getUsers={jest.fn()}
                  />, div);
});

it('should render without crashing when messages are loaded and users are loaded', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App.WrappedComponent
    messages={{isPending:false, messages:[
      {
        "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
        "userId": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
        "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        "timestamp": "2017-02-09T04:27:38Z"
      },
      {
        "id": "b03569ae-ccbf-4975-8040-4daba638b407",
        "userId": "16373df5-da0a-4074-8295-f916b94269f4",
        "message": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
        "timestamp": "2016-11-09T05:04:58Z"
      }
    ]}}
    users={{isPending:false, users:[
      {
        "id": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
        "firstName": "Albert",
        "lastName": "Rose",
        "email": "arosec@bbb.org",
        "avatar": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
        "ip": "20.79.231.223"
      },
      {
        "id": "16373df5-da0a-4074-8295-f916b94269f4",
        "firstName": "Larry",
        "lastName": "Owens",
        "email": "lowensm@earthlink.net",
        "avatar": "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",
        "ip": "168.43.167.194"
      }
    ]}}
    getChatLog={jest.fn()}
    getUsers={jest.fn()}
                  />, div);
});
