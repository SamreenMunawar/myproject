import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>

      <Navbar title="My App" aboutText="About App" />
      <div className='container'>
        <TextForm heading="Enter text here" />
      </div>

    </>
  );
}

export default App;
