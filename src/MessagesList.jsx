import React from 'react';
import MessagesListItem from './MessagesListItem';

export default ({users, messages}) => {
  const getUserList = ()=>{
    if(messages.isPending)
      return (<li>Loading Messages ...</li>);
    return messages.messages.map((i, idx)=>{
      return <MessagesListItem key={idx} message={i} users={users}/>
    })
  }
  return (
    <div>
      <ul>
        {getUserList()}
      </ul>
    </div>
  )
}
