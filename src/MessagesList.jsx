import React from 'react';
import MessagesListItem from './MessagesListItem';

export default ({users, messages}) => {
  const sortMessages = () => messages.messages.sort((a,b)=>{
    const aTime = new Date(a.timestamp);
    const bTime = new Date(b.timestamp);
    if(aTime > bTime) return 1;
    if(aTime < bTime) return -1;
    return 0;
  });

  const getUserList = ()=>{
    if(messages.isPending)
      return (<li>Loading Messages ...</li>);

    sortMessages();
    return messages.messages.map((i, idx)=>{
      return <MessagesListItem key={idx} message={i} users={users}/>
    });
  }
  return (
    <div>
      <ul>
        {getUserList()}
      </ul>
    </div>
  )
}
