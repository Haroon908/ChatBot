import React from 'react'
import  { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

function App() {

  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine
        height="100vh"
        projectID="a88cafeb-57d1-4334-8434-dbfad8f27ffa"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
    />
    )
}

export default App