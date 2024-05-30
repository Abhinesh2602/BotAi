import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import PastConversations from "./components/PastConversations";
import Conversation from "./components/Conversation";
import AdditionalFeedback from "./components/AdditionalFeedback";
import { BotProvider } from "./services/BotContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // This sets the default child route
        element: <Home />,
      },
      {
        path: "conversations",
        element: <Conversation />,
      },
      {
        path: "past-conversations",
        element: <PastConversations />,
      },
      {
        path: "additional-feedback",
        element: <AdditionalFeedback />,
      },
    ],
  },
]);

function App() {
  return (
    <BotProvider>
      <RouterProvider router={router}></RouterProvider>;
    </BotProvider>
  );
}

export default App;
