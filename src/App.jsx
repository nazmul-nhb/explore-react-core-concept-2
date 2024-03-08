import './App.css'
import Counter from './Counter';

function App() {

  function handleClick() {
    alert('Button Clicked');
  }

  const handleClick2 = () => {
    alert('Button 2 Clicked')
  }

  const addFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Button 2</button>
      <button onClick={() => { alert('3rd Button Clicked') }}>Button 3</button>
      <button onClick={() => addFive(3)}>Button 4</button>

      <Counter></Counter>
    </>
  )
}

export default App
