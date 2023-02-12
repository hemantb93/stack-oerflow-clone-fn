import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";

import Chatbot from "react-chatbot-kit";
import config from "./chatBot/Config";
import MessageParser from "./chatBot/MessageParser";
import ActionProvider from "./chatBot/ActionProvider";
import { useState } from "react";
import cht1 from './assets/img2.png'
import "react-chatbot-kit/build/main.css";

function App() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
        <div className="bot">
          <button onClick={() => setIsOpen(!isOpen )}>
            <img 
              src={cht1}
              alt=""
            />
          </button>
          {isOpen && (
            <div>
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            </div>
          )}
        </div>
      </Router>
    </div>
  );
}

export default App;
