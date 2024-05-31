# Chat Application with Bot Context

This project is a React-based chat application that manages conversations with a bot using context for state management. It includes features for saving and displaying past conversations, providing feedback, and filtering conversations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Components](#components)
- [Context](#context)
- [Linting](#linting)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Abhinesh2602/BotAi.git
   cd yourrepository
   ```

Usage
Once the development server is running, you can access the application at http://localhost:3000.

Running the Application
Interact with the bot by typing questions.
View past conversations and provide feedback.
Filter conversations based on the rating provided for the bot's responses.
Features
Save and display past conversations: The application saves user and bot interactions and displays them in a chat history.
Provide feedback on bot responses: Users can provide feedback and ratings for the bot's responses.
Filter conversations by rating: Users can filter the conversation history based on the rating provided for the bot's responses.
Context-based state management: The application uses React Context for managing state across the application.
Components
PastConversations
The PastConversations component is the main component responsible for displaying the conversation history and filtering options.

Props
savedChats: An array of saved chat objects provided by the BotContext.
State
filterRating: The rating selected by the user to filter conversations.
filteredChats: The chats filtered based on the selected rating.
FeedBack
The FeedBack component displays individual chat messages including the user's message, the bot's reply, and the feedback/rating.

Props
userMessage: The message sent by the user.
botReply: The response from the bot.
feedBack: The feedback provided by the user for the bot's response.
botTime: The time when the bot responded.
rating: The rating provided for the bot's response.
Context
BotContext
The BotContext provides the state and functions for managing conversations and feedback in the application.

State
question: The current question typed by the user.
conversations: The list of conversations.
conversationIndex: The index of the current conversation.
feedback: The feedback state (boolean) to show or hide the feedback form.
savedChats: The list of saved chat objects.
Functions
setQuestion: Function to update the current question.
clearQuestion: Function to clear the current question.
setConversations: Function to update the conversations.
setConversationIndex: Function to update the conversation index.
setshowFeedback: Function to update the feedback state.
setSavedChats: Function to update the saved chats.

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

Using BotContext
To use the BotContext in your components:

1.Wrap your component tree with BotProvider:

import { BotProvider } from './services/BotContextProvider';

function App() {
return (
<BotProvider>
<YourComponentTree />
</BotProvider>
);
}

export default App;

2. Access the context in your components:

import { useBotContext } from './services/BotContextProvider';

function YourComponent() {
const { question, setQuestion, savedChats } = useBotContext();

// Your component logic here
}

License
This project is licensed under the MIT License.

This `README.md` provides a comprehensive guide on setting up, using, and contributing to the project, with specific focus on the `BotContext` and its usage.
