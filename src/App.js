import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import About from './Components/About'
import Blog from './Components/Blog'
import Classes from './Components/Classes'
import Clients from './Components/Clients'
import Insta from './Components/Insta'
import Parallex from './Components/Parallex'
import Testimonials from './Components/Testimonials'
import Video from './Components/Video'
import Footer from './Components/Footer'


function App() {
  return (
    
   <>
    <Header/>
    <Parallex/>
    <About/>
    <Video/>
    <Classes/>
    <Blog/> 
    <Clients/>
    <Testimonials/>
    <Insta/>
    <Footer/>
   </>
  );
}

export default App;
