import React from 'react';
import MessagesListItem from './MessagesListItem';

export default ({users, messages}) => {
  const getUserList = ()=>{
    if(messages.isPending) return (<p>Loding Messages ...</p>)
    return (
      <ul>
        <MessagesListItem messages={messages.messages} users={users}/>
      </ul>
    )
  }
  return (
    <div>
      {getUserList()}
    </div>
  )
}
