// // import React, { useState } from "react";
// // import ChatBubble from "./ChatBubble";
// // import { simplifyMathProblem } from './brains/Math';
// // // import { mathy } from './brains/Math2';
// // import { mathParse } from './brains/mathParse';

// // const ChatBox = ({ author }) => {
// //   // mathy();
// //   const [messages, setMessages] = useState([
// //     {
// //       author: "You",
// //       text: "Chat with Mathy by inputting your algebra problems",
// //     },
// //   ]);

// //   const handleMessageSubmit = (text) => {
// //     let res = simplifyMathProblem(text);
// //     // let res = mathParse(text)
// //     console.log("MATH OUTPUT", res);

// //     setMessages((prevMessages) => [
// //       ...prevMessages,
// //       { author: "You", text },
// //       { author: "Agent", text: "I'm sorry, I don't understand." },
// //       { author: "You", text: "sqrt(60 + 4)" },
// //       { author: "Agent", text: "The answer is 8." },
// //       { author: "You", text: "simplify 3x^2 + 4x^2" },
// //       { author: "Agent", text: "The answer is 7x^2." },
// //     ]);
// //   };

// //   return (
// //     <div className="chat-container">
// //       <div className="chat-messages">
// //         {messages.map((message, index) => (
// //           <div key={index}>
// //             <ChatBubble message={message} author={author} time="2 hours ago" />
// //             {message.author === "You" && messages[index + 1]?.author === "Agent" && (
// //               <ChatBubble message={messages[index + 1]} author={author} time="2 hours ago" />
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //       <div className="chat-input">
// //         <input
// //           type="text"
// //           placeholder="Type a message..."
// //           onKeyPress={(e) => {
// //             if (e.key === 'Enter') {
// //               handleMessageSubmit(e.target.value);
// //               e.target.value = '';
// //             }
// //           }}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default ChatBox;

// import React, { useState } from "react";
// import ChatBubble from "./ChatBubble";
// import {simplifyMathProblem} from './brains/Math' 
// // import {mathy} from './brains/Math2' 
// import {mathParse} from './brains/mathParse' 
// import {introMessages} from './introMessages'




// const ChatBox = ({ author }) => {
//   // mathy()
//   const [messages, setMessages] = useState(introMessages);

//   const handleMessageSubmit = (text) => {

//     // let res = simplifyMathProblem(text)
//     let res = mathParse(text)
//     console.log("MATH OUTPUT", res)
    
//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { author: "You", text },
//       { author: "Agent", text: res },
//     ]);
//   };

//   return (
//     <div className="chat-container">
//       <div className="chat-messages">
//         {messages.map((message, index) => (
//           <div key={index}>


            
//             <ChatBubble message={message} author={author} time="2 hours ago" />
//             {message.author === "You" && messages[index + 1]?.author === "Agent" && (
//               <ChatBubble message={messages[index + 1]} author={author} time="2 hours ago" />
//             )}




            
//           </div>
//         ))}
//       </div>
//       <div className="chat-input">
//         <input type="text" placeholder="Type a message..." onKeyPress={(e) => {
//             if (e.key === 'Enter') {
//               handleMessageSubmit(e.target.value);
//               e.target.value = '';
//             }
//           }} />
//       </div>
//     </div>
//   );

import React, { useState } from "react";
import ChatBubble from "./ChatBubble";
import { simplifyMathProblem } from "./brains/Math";
import { mathParse } from "./brains/mathParse";
import { introMessages } from "./introMessages";

const ChatBox = ({ author }) => {
  const [messages, setMessages] = useState(introMessages);

  const handleMessageSubmit = (text) => {
    let res = mathParse(text);
    console.log("MATH OUTPUT", res);

    setMessages((prevMessages) => [
      ...prevMessages,
      { author: "You", text },
      { author: "Agent", text: res },
    ]);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index}>
            {message.author === "You" && (
              <ChatBubble message={message} author={author} time="2 hours ago" />
            )}
            {message.author === "Agent" &&
              messages[index + 1]?.author === "You" && (
                <ChatBubble
                  message={message}
                  author={author}
                  time="2 hours ago"
                />
              )}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleMessageSubmit(e.target.value);
              e.target.value = "";
            }
          }}
        />
      </div>
    </div>
  );
};

export default ChatBox;

// };

// export default ChatBox;

// import React, { useState } from "react";
// import ChatBubble from "./ChatBubble";
// import { mathParse } from "./brains/mathParse";
// import { introMessages } from "./introMessages";

// const ChatBox = ({ author }) => {
//   const [messages, setMessages] = useState(introMessages);

//   const handleAgentResponse = (message) => {
//     const res = mathParse(message.text);
//     const newMessage = { author: "Agent", text: res };
//     setMessages((prevMessages) => [...prevMessages, newMessage]);
//     return [newMessage];
//   };

//   const handleMessageSubmit = (text) => {
//     const newMessage = { author: "You", text };
//     setMessages((prevMessages) => [...prevMessages, newMessage]);
//     handleAgentResponse(newMessage);
//   };

//   return (
//     <div className="chat-container">
//       <div className="chat-messages">
//         {messages.map((message, index) => (
//           <div key={index}>
//             <ChatBubble
//               message={message}
//               author={author}
//               time="2 hours ago"
//             />
//           </div>
//         ))}
//       </div>
//       <div className="chat-input">
//         <input
//           type="text"
//           placeholder="Type a message..."
//           onKeyPress={(e) => {
//             if (e.key === "Enter") {
//               handleMessageSubmit(e.target.value);
//               e.target.value = "";
//             }
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default ChatBox;

