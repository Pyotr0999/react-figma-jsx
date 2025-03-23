import './App.css';
import Nav from './Nav';
import Main from './Main';
import Iphone2 from './Iphone2';
import Card from './Card';
import Long from './Long';
import Footer from './footer';
function App() {
  return (
    <div className="App">
     <header>
     <div class="head_cont">
      <Nav />
     </div>
     </header>
     <Main />
     <Iphone2 />
     <Card />
     <Long />
     <Footer />
    </div>
  );
}

export default App;
