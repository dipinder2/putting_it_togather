
import PersonCard from './components/PersonCard'
function App() {
  return (
    <div className="container ">
      <PersonCard person={{name:'John, Doe', age:27, hair:"red"}}/>
      <PersonCard person={{name:'Smith, John', age:88, hair:"Yellow"}}/>
    </div>
  );
}

export default App;
