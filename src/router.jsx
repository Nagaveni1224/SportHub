import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Players from "./pages/Players";
import PlayerDetails from "./pages/PlayerDetails";
import Leagues from "./pages/Leagues";
import Scores from "./pages/Scores";
import Venues from "./pages/Venues";
import NotFound from "./pages/NotFound";
import Sports from "./pages/Sports";

import ProtectedRoute from "./components/ProtectedRoute";
import SportDetails from "./pages/SportDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
  path: "sports",
  element: <Sports />
},
{
  path: "sports/:sport",
  element: <SportDetails />
},

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "signup",
        element: <Signup />,
      },

      {
  path: "players",
  element: (
    <ProtectedRoute>
      <Players />
    </ProtectedRoute>
  ),
},
      {
        path: "player/:id",
        element: <PlayerDetails />,
      },

      {
        path: "leagues",
        element: <Leagues />,
      },

      {
        path: "scores",
        element: <Scores />,
      },

      {
        path: "venues",
        element: <Venues />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;