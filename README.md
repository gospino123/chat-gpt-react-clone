# ChatGPT Clone

<details><summary>WillGPT Preview</summary>
![Preview of WillGPT, the ChatGPT clone. The user is typing a message to the Language Learning Model, and it is responding coherently](https://github.com/gospino123/chat-gpt-react-clone/blob/main/.github/WillGPT.gif)
</details>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Following a free 5-hour freeCodeCamp course presented by Ania Kubow, a renowned software developer and course creator, I created my own clone of ChatGPT.

## How it works
A user types in a message/question in the input field and clicks the right arrow (&rarr;) to send. That request is sent to OpenAI's Chat Completions API endpoint via the backend server. The response is then sent back from OpenAI to the front end via the server. That response is then parsed in a more readable manner using React and CSS.

'WillGPT' is capable of storing separate chat chains by drawing on React Hooks throughout the user experience. It is capable of answering many questions, but I've limited the response tokens to 50 for testing purposes. This can be changed in the server.js file. Lastly, this is not the newest version of ChatGPT, so there are times at which the LLM has not been primed to be able to interpret and respond expectedly.

## Available Scripts

**Note: Upon forking this repo, you will need to install the dependencies and create a .env file which has your own unique API_KEY variable**

In the .env file stored in the root directory, save the following: `API_KEY = your-api-key` where 'your-api-key' is the API key you create from your OpenAI account.

In the project directory, you can run:

### `npm start:frontend`

Runs app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm start:backend`

Spins up a server that reloads when you make changes.
The server is hosted on [Port 8000](http://localhost:8000) by default, but this port can be changed in the server.js file. 

## Future Goals
1. I would like to provide better signifiers/affordances, so users understand how to use the chat. Active, focus and hover states could be used in this regard, as well as icons, which are language-agnostic and helpful if intuitive/obvious. 
2. Accessibility is a big deal for me, so I would like to implement more semantic code to make the user experience equitable for all. Additional improvements would be allowing keyboard users to be able to navigate and activate controls easily and including ARIA attributes when appropriate to better describe different parts of the app.
3. Extending this project is much easier with a foundation already built. I would love to use some AI prompting before the user interacts with AI in order to prime the responses for certain scenarios ranging from responding as if the AI were a historical figure to responding in Doge or in a Shakespearean tone.
4. For now, the last future goal might be to split some of the code into separate components. At the time, I did not want to prop drill or manage passing information/props between parent and child or from sibling to sibling, as the goal was to explore OpenAI's capabilities for chat completion.