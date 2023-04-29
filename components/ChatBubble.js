import PrettyPrint from './PrettyPrint'

const ChatBubble = ({ message, author, notMath }) => {
  const isSelf = message.author === author;
  // const messageClass = isSelf ? "chat-message-right" : "chat-message-left";

  // function getCurrentTime() {
  //   const now = new Date();
  //   let hours = now.getHours();
  //   let minutes = now.getMinutes();
  //   const amPm = hours < 12 ? 'AM' : 'PM';
  //   hours = hours % 12 || 12; // Convert to 12-hour format
  //   minutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero if minutes < 10
  //   return `${hours}:${minutes} ${amPm}`;
  // }

  return (
    <div className={`chat ${isSelf ? "chat-start" : "chat-end"}`}>
      <div className="chat-header">
        {/* <div className={`chat-message ${messageClass}`}> */}
        <div>{message.author}:</div>
        <time className="text-xs opacity-50 ml-2">{message.time || '12:00pm'}</time>
        {/* </div> */}
      </div>
      <div className={`chat-bubble ${isSelf ? "chat-bubble-secondary" : "chat-bubble-primary"}`}>
         {!message.math ? message.text : 
        <PrettyPrint input={message.text} /> }
      </div>
    </div>
  );
};

export default ChatBubble