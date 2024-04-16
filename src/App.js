import { useState } from 'react';
import './App.css';



function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <button onClick={()=> setOpen(true)} className='open-modal-btn'>Open window</button>
      {
        (open && (
          <div className='overlay'>
            <div className='modal'>
              <svg onClick = {() => setOpen(false)} height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="#000000" fill-rule="nonzero"><path d="m4.70710678 20.7071068 16.00000002-16.00000002c.3905243-.39052429.3905243-1.02368927 0-1.41421356s-1.0236893-.39052429-1.4142136 0l-15.99999998 15.99999998c-.39052429.3905243-.39052429 1.0236893 0 1.4142136s1.02368927.3905243 1.41421356 0z"/><path d="m20.7071068 19.2928932-16.00000002-15.99999998c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l15.99999998 16.00000002c.3905243.3905243 1.0236893.3905243 1.4142136 0s.3905243-1.0236893 0-1.4142136z"/></g></svg>
              <iframe src="https://giphy.com/embed/AyhyKY14ZXfxe" width="350" height="210" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default App;
