import React from "react";
import ReactDOM from "react-dom/client"
import Navigation from "./components/Navigation";
import {Routes,Route} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';
import Resume from './components/Resume';
import PdfComponent from './components/PdfComponent';
import "./App.css";

const App = () =>{
    return (
        <Container fluid className="bg-white p-0">

        <Navigation></Navigation>
  
        <Routes>
          <Route path="/" element={ <Resume/> } exact></Route>
          <Route path="/preview" element={<PdfComponent/>}></Route>
        </Routes>
        
        <Footer></Footer>
        
      </Container>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);