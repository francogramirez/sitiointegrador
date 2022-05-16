
import './App.css';
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import ContactosPage from "./pages/ContactosPage";
import NosotrosPage from "./pages/NosotrosPage";
import NovedadesPage from "./pages/NovedadesPage";
import DiseniosPage from "./pages/DiseniosPage";
import TecnologiasPage from "./pages/TecnologiasPage";
import HomePage from "./pages/HomePage";
import SlaPage from "./pages/SlaPage"
import FdmPage from './pages/FdmPage';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";




function App() {
  return (
  <Router>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link
        href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,400;1,700&family=Didact+Gothic&family=Rubik+Glitch&family=Send+Flowers&display=swap"
        rel="stylesheet"></link>
    <Header/>
    
      <Nav />
        <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/nosotros" exact component={NosotrosPage}/>
        <Route path="/tecnologias" exact component={TecnologiasPage}/>
        <Route path="/disenios" exact component={DiseniosPage}/>
        <Route path="/novedades" exact component={NovedadesPage}/>
        <Route path="/contactos" exact component={ContactosPage}/>
        <Route path="/sla" exact component={SlaPage}/>
        <Route path="/fdm" exact component={FdmPage}/>
        </Switch>
    <Footer/> 
  </Router>  
  );
}

export default App;
