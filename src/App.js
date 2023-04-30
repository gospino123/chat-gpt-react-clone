import { useState, useEffect } from 'react';

const App = () => {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);

  const createNewChat = () => {
    setMessage(null);
    setValue('');
    setCurrentTitle(null);
  }
  const getMessages = async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: value,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
        const response = await fetch('http://localhost:8000/completions', options);
        const data = await response.json();

        console.log(data);

        setMessage(data.choices[0].message);
    } catch (error) {
        console.error(error);
    }
  }

  useEffect(() => {
    console.log(currentTitle, value, message)
    if (!currentTitle && value && message) {
        setCurrentTitle(value);
    } else if (currentTitle && value && message) {
        setPreviousChats(previousChat => {
          [...previousChats, 
            {
              title: currentTitle,
              role: "user",
              content: value,
            },
            {
              title: currentTitle,
              role: message.role,
              content: message.content,
            }
          ]
        })
    }
  }, [currentTitle, message]);

  // To do: debug - Console log occurs twice
  return (
    <div className="App">
      <section className="sidebar">
        <button id="newChat" onClick={createNewChat}>+ New Chat</button>
        <ul className="history">
          <li>Hey there</li>
        </ul>
        <nav>
          <p>Made by Will</p>
        </nav>
      </section>
      <section className="main">
        {!currentTitle && <h1>WillGPT</h1>}
        <ul className="feed">
        </ul>
        <div className="bottomSection">
          <div className="inputContainer">
            <input id="chatInput" value={value} onChange={e => setValue(e.target.value)}/>
            <div id="submit" onClick={getMessages}>&rarr;</div>
          </div>
          <p className="info">
            Chat GPT Mar 14 Version. Free Research Preview.
            Our goal is to make AI systems more natural and safe to interact with.
            Your feedback will help us improve.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
