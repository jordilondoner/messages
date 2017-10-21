import React from 'react';
import moment from 'moment';

export default ({users, message}) => {
  const user = users.isPending ? false : users.users.find(i=> i.id === message.userId);
  return (
    <li>
      <div>
        {!user ? 'Loading user...' : <img alt={`${user.firstName}'s avatar`} src={user.avatar}/>}
      </div>
      {message.message}
      <span>{moment().format(message.timestamp)}</span>
    </li>
  )
}
