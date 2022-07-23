import './App.css';


import Hero from './Components/Hero/Hero';
import LoadingScreen from './Components/Loading Screen/LoadingScreen';

function App() {
  return (
    <div className="App">
      <LoadingScreen />
      <Hero />
    </div>
  );
}

export default App;
