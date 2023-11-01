import './App.css';
import Card from './components/cards.js';


function App() {
  // const colors = ['red', 'green', 'blue', 'yellow', 'purple','navy', 'skyblue', 'brown', 'orange', 'gray'];
  const style = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
  const cardP = {
    name: 'Pink',
    color: '#E29587',
    code: '#E29587'
  }
  const cardO = {
    name: 'Orange',
    color: 'orange',
    code: '#FF7F50'
  }
  const cardC = {
    name: 'Cyan',
    color: 'cyan',
    code: '#40E0D0'
  }
  const cardGr = {
    name: 'Gray',
    color: 'gray',
    code: '#CCCCFF'
  }
  const cardY = {
    name: 'Yellow',
    color: 'yellow',
    code: '#DFFF00'
  }
  const purpleCard = {
    name: 'Purple',
    color: 'purple',
    code: '#800080'
  }
  const cardG = {
    name: 'Green',
    color: 'green',
    code: '#008000'
  }



  return (
    <div className="App" style={style}>
      <Card card={cardP} />
      <Card card={cardGr} />
      <Card card={cardC} />
      <Card card={cardO} />
      <Card card={cardY} />
      <Card card={cardG} />
    </div>
  );
}

export default App;
