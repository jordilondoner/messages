import React from 'react';

export default ({users, messages}) => {

  return (
    <ul>
      {
        messages.map((i, idx)=>{
          return <li key={idx}>{i.message}</li>
        })
      }
    </ul>
  )
}
