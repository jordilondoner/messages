import React from 'react';

export default ({users, messages}) => {
  console.log(users, messages);
  const getUserList = ()=>{
    if(messages.isPending) return (<p>Loding Messages ...</p>)
    return (
      <ul>
        {
          messages.messages.map((i, idx)=>{
            return <li key={idx}>{i.message}</li>
          });
        }
      </ul>
    )
  }
  return (
    <div>
      {getUserList()}
    </div>
  )
}
