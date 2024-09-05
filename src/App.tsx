import './App.css'
import ChatContainer from './components/ChatContainer'
import ConversationNav from './components/ConversationNav'

function App() {
  return (
    <div className="flex w-screen relative">
    <ConversationNav />
    <ChatContainer />
  </div>
  )
}

export default App
