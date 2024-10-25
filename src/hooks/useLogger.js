import { useState } from 'react';

const useLogger = (initialLevel = 'LOG') => {
  const [logLevel, setLogLevel] = useState(initialLevel);
  const [messages, setMessages] = useState([]);

  const logMessage = (message, level = 'LOG') => {
    const timestamp = new Date().toLocaleTimeString();
    const newMessage = `[${level}] [${timestamp}] ${message}`;
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    switch (level) {
      case 'ERROR':
        console.error(newMessage);
        break;
      case 'WARN':
        console.warn(newMessage);
        break;
      case 'DEBUG':
        console.debug(newMessage); 
        break;
      case 'LOG':
      default:
        console.log(newMessage);
        break;
    }
  };

  const clearLogs = () => {
    setMessages([]);
  };

  return {
    logLevel,
    setLogLevel,
    logMessage,
    clearLogs,
    messages,
  };
};

export default useLogger;
