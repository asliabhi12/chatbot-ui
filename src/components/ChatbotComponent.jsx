import React from 'react'
import { DeepChat } from 'deep-chat-react';


const ChatbotComponent = () => {
  return (
    <DeepChat
        style={{
          borderRadius: "10px",
          // border: "unset",
          borderColor: "yellow",
          backgroundImage: "url('path-to-image.jpg')",
          height: "60vh",
          bottom: "20px",
          right: "8%",
          position: "fixed",
          zIndex: 1
        }}
        messageStyles={{
          default: {
            user: { bubble: { backgroundColor: "#2670ff" } },
            ai: { bubble: { backgroundColor: "#004f97", color: "white" } }
          }
        }}
        submitButtonStyles={{
          submit: {
            svg: {
              styles: {
                default: {
                  filter: "brightness(0) saturate(100%) invert(60%) sepia(79%) saturate(643%) hue-rotate(185deg) brightness(102%) contrast(100%)"
                }
              }
            }
          }
        }}
        textInput={{
          styles: {
            container: {
              backgroundColor: "#004f97",
              color: "white",
              boxShadow: "unset"
            }
          },
          placeholder: { style: { color: "#d1d1d1" } }
        }}
        auxiliaryStyle="
          ::-webkit-scrollbar-thumb {
            background-color: #0174db;
          }
          ::-webkit-scrollbar-track {
            background-color: unset;
          }"
        initialMessages={[
          { text: "Hey, how are you?", role: "user" },
          { text: "I am doing great, how about you?", role: "ai" },
          { text: "What is the meaning of life?", role: "user" },
          { text: "This completely depends on the person.", role: "ai" }
        ]}
        demo={true}
        stream={true}
      />
  )
}

export default ChatbotComponent