import './App.css';
import ChatNav from "./Container/ChatNav/ChatNavigationBar"
import ChatWindow from "./Container/ChatWindow/ChatWindow";

function App() {
  return (
    <div className={"App"} style={{display:"flex"}}>
      <ChatNav />
      <ChatWindow/>
    </div>
  );
}

export default App;
