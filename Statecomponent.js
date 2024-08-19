// // import { Component } from "react";
// // class Message extends Component
// // {
// //     state=
// //     {
// //         message:"AI&DS"
// //     }
// //     clickdemo()
// //     {
// //         this.setState(
// //             {
// //             message:"Thank you"
// //         }
// //     )
// //     }
// //     render()
// //     {
// //         return(
// //             <div>
// //                 <h1>Hii everyone{this.state.message}</h1>
// //                 <button onClick={()=>this.clickdemo()}>Click me</button>
// //             </div>
// //         )
// //     }
// // }
// export default Message;
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Book My Stay</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
