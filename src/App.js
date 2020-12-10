import './App.css';
import FruitContainer from './components/FruitContainer';

function App() {
  const fruits = [
    'banana',
    'watermelon',
    'apple',
    'orange',
    'kiwi',
    'crabapple',
    'grape',
    'grapefruit',
    'mango',
    'pineapple',
    'mangosteen'
  ];
  return (
    <div className="App">
      <FruitContainer fruits={fruits} />
    </div>
  );
}

export default App;
