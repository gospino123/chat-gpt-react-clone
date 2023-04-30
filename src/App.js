const App = () => {
  const getMessages = async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: 'hello how are you?'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
        const response = await fetch('http://localhost:8000/completions', options);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
  }

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
            <input id="chatInput"/>
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
