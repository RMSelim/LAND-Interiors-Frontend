import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import LAND from './components/LAND';
import Blog from './components/Blog';
import Footer from './components/footer';


function App() {
  return (
      <div className="App">
      <Navbar/>
      <Intro/>
      <LAND/>
      <Blog/>
      <Footer/>
    </div>
   
  );
}

export default App;
