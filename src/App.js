import React, {useState} from 'react';
import ChatbotComponent from './components/ChatbotComponent';
import ButtonComponent from './components/ButtonComponent';

function App() {
  const [isChatbotVisible, setChatbotVisible] = useState(false);

  const handleChatbotToggle = () => {
    setChatbotVisible(!isChatbotVisible);
  };
  return (
    <div className="app-container">
      <ButtonComponent onClick={handleChatbotToggle} />
      {isChatbotVisible && <ChatbotComponent />}
    </div>
  );
}

export default App;
