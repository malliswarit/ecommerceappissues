import Banner from './components/Banner';
import './App.css';
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import { HomePage } from './components/HomePage';

function App() {
  return (
    <div className='app'>
      {/* <Header /> */}
      <Banner />
      <HomePage />
      {/* <Products />  */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
