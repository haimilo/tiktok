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

export default App;