import React from 'react';
import moment from 'moment';

export default ({users, message}) => {
  const user = users.isPending ? false : users.users.find(i=> i.id === message.userId);
  return (
    <li className="message-item">
      <div className="avatar">
        {!user ? 'Loading user...' : <img alt={`${user.firstName}'s avatar`} src={user.avatar}/>}
      </div>
      <div className="message">
        {message.message}
        <span> On: {moment(new Date(message.timestamp)).format('LLLL')}</span>
        <span className="email">
          {!user ? 'Loading user...' : <p>{user.email}</p>}
        </span>
      </div>
    </li>
  )
}
