import Header from './components/Header';
import Banner from './components/Banner';
import Sobremi from './components/Sobremi';
import Proyectos from './components/Proyectos';
import Titulo from './components/Titulo';
import Slider from './components/Slider';
import ContactForm from './components/ContactForm';
import Logos from './components/Logos';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Sobremi />
      <Titulo />
      <Slider />
      <Proyectos />
      <ContactForm />
      <Logos />
      <Footer />
    </div>
  );
}

export default App;
