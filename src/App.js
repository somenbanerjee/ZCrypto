import './App.css';
import { Header } from './components/Header';
import { News } from './components/News';
import { CryptoList } from './components/CryptoList';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="main">
      <Header/>
      <News/>
      <CryptoList/>
      <Footer/>
    </div>
  );
}

export default App;
