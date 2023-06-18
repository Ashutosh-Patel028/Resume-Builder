import ReactDOM from "react-dom/client"

const App = () =>{
    return (
        <div>
            This is react-app
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);