import { useState, useEffect } from 'react'
import Content from './Content'

function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: 30 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  );
}

function oddNumbers() {
  var arr = [];
  //your code here 
  for (var i = 1; i <= 50; i += 2) {
    arr.push([i]);
  }
  return arr;
}

export default App;