import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Sports from "./pages/Sports";
import SportDetails from "./pages/SportDetails";
import Players from "./pages/Players";
import Teams from "./pages/Teams";
import LiveScores from "./pages/LiveScores";
import Leagues from "./pages/Leagues";
import Venues from "./pages/Venues";
import Highlights from "./pages/Highlights";
import TeamDetails from "./pages/TeamDetails";
import PlayerDetails from "./pages/PlayerDetails";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";

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
        element: <Sports />,
      },

      {
        path: "sports/:sport",
        element: <SportDetails />,
      },

      {
        path: "sports/:sport/players",
        element: (
          <ProtectedRoute>
            <Players />
          </ProtectedRoute>
        ),
      },

      {
        path: "sports/:sport/teams",
        element: <Teams />,
      },

      {
        path: "sports/:sport/livescores",
        element: <LiveScores />,
      },

      {
        path: "sports/:sport/leagues",
        element: <Leagues />,
      },

      {
        path: "sports/:sport/venues",
        element: <Venues />,
      },

      {
        path: "sports/:sport/highlights",
        element: <Highlights />,
      },

      {
        path: "team/:id",
        element: <TeamDetails />,
      },

      {
        path: "player/:id",
        element: <PlayerDetails />,
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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;