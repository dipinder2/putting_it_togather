
import './App.css';
import PersonCard from './components/PersonCard'
function App() {
  return (
    <div className="App">
      <PersonCard person={{name:'John, Doe', age:27, hair:"red"}}/>
      <PersonCard person={{name:'Smith, John', age:88, hair:"Yellow"}}/>
    </div>
  );
}

export default App;
