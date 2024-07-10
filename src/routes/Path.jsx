import App from "../App";
import Invite from "../components/Invite/Invite";
import Login from "../components/Login/Login";
import Verify from "../components/Verify/Verify";
import Chat from "../pages/Chat";
import Home from "../pages/Home/Home";

export const Path = [
    { path: "/", element: <Home />, name: "home" },
    { path: "/login", element: <Login />, name: "login" },
    { path: "/signup", element: <App />, name: "signup" },
    { path: "/verify", element: <Verify />, name: "verify" },
    { path: "/invite", element: <Invite />, name: "invite" },
    { path: "/chat", element: <Chat />, name: "chat" },
];

export const GetPath = (name) => {
    return Path.find((item) => item.name === name).path;
}