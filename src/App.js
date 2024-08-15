import './App.css';
import Business from './sections/Business';
import Features from './sections/Features';
import Footer from './sections/Footer';
import Header from './sections/Header';
import LiveChat from './sections/LiveChat';

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <LiveChat />
      <Business />
      <Footer />
      
    </div>
  );
}

export default App;
