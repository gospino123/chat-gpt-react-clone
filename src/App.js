import { useState, useEffect } from 'react';

const App = () => {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState(null);

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

  // To do: debug - Console log occurs twice
  return (
    <div className="App">
      <section className="sidebar">
        <button id="newChat">+ New Chat</button>
        <ul className="history">
          <li>Hey there</li>
        </ul>
        <nav>
          <p>Made by Will</p>
        </nav>
      </section>
      <section className="main">
        <h1>WillGPT</h1>
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
