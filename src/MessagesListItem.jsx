import React from 'react';
import moment from 'moment';

export default ({users, message}) => {
  const user = users.isPending ? false : users.users.find(i=> i.id === message.userId);
  return (
    <li>
      <div>
        {!user ? 'Loading user...' : <img alt={`${user.name} avatar's`} src={user.avatar}/>}
      </div>
      {message.message}
      <span>{moment().format('2016-03-08T20:11:54Z')}</span>
    </li>
  )
}
