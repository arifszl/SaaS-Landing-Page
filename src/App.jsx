import './app.css'
import Header from './section/Header';
import Hero from './section/Hero';
const App = () => {
  return (
    <main>
      <div className='overflow-hidden'>
        <Header />
        <Hero/>
      </div>
      
    </main>
  );
};

export default App;