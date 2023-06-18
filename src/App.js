import React from "react";
import ReactDOM from "react-dom/client"
import Navigation from "./components/Navigation";
import About from "./components/About";
import Profile from "./components/Profile"

const App = () =>{
    return (
        <React.Fragment>
            <Navigation/>
            This is react-app
            <button className="btn btn-primary">home</button>
        </React.Fragment>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);