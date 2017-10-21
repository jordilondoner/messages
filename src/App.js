import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getChatLog, getUsers} from './service';

import MessagesList from './MessagesList';

import './App.css';

class App extends Component {
  componentDidMount(){
    let { getChatLog, getUsers } = this.props
    getChatLog();
    getUsers();
  }
  render() {
    const {messages, users} = this.props;
    return (
      <div>
        <h1>Hello!</h1>
        <MessagesList messages={messages} users={users}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
    users: state.users,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog, getUsers }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
