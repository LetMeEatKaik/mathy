import {useState} from "react";
import ChatDisplay from "./ChatComp";
import Header from './Header'

const Display = () => {

   const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
  };

  
  return (
    <div className='items-center'>
    <div className="card w-96 bg-base-100 shadow-xl ">
      <div className="card-body">
        <div className="card-title text-mono items-center text-center"><Header title={'Mathy Tutor'} /></div>
           <div>
      <ChatDisplay author={'You'} messages={messages} onSendMessage={handleSendMessage} />
    </div>
      </div>

    </div>
      </div>
  );
};

export default Display;
