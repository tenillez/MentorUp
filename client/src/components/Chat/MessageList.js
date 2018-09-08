 import React, { Component } from 'react'

 class MessagesList extends Component {
   render() {
     const styles = {
       container: {
         overflowY: 'scroll',
         flex: 1,
       },
       ul: {
         listStyle: 'none',
       },
       li: {
         marginTop: '20%',
         marginBottom: '20%',
       },
       senderUsername: {
         fontWeight: 'bold',
       },
       message: { fontSize: 15 },
     }
     return (
       <div
         style={{
           ...this.props.style,
           ...styles.container,
         }}
       >
         <ul>
           {this.props.messages.map((message, index) => (
             <li key={index}>
               <div>
                 <span>{message.senderId}</span>{' '}
               </div>
               <p>{message.text}</p>
             </li>
           ))}
         </ul>
       </div>
     )
   }
 }

 export default MessagesList