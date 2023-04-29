import React from "react";
import Display from "../components/Display";

const ChatPage = () => {
  return (
    <div>
      <div className="center">
        <Display />
      </div>
      <div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
      <footer>
        <p>
          <a href="https://github.com/LetMeEatKaik" className="font-medium p-4 text-blue-600 dark:text-blue-500 hover:underline">GitHub Link</a>
        </p>
      </footer>
    </div>
  );
};

export default ChatPage;
