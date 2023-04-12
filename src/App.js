import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const list = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']
  const [selected, setSelected] = useState(list[0])
  const [clone, setClone] = useState(list)

  useEffect(() => {
    const index = list.findIndex(item => item === selected)
    const newList = [...list.slice(index), ...list.slice(0, index)]
    setClone(newList)
  }, [selected])

  return (
    <div className="App">
      {clone.map((item, index) => {
        const handleClick = () => {
          setSelected(item)
        }
        return <p key={index} style={{ cursor: 'pointer'}} onClick={handleClick}>{item}</p>
      })}
    </div>
  );
}

export default App;
