import './App.css';

import { useState } from 'react';

import reactLogo from './assets/react.svg';
import { Modal } from './modal';

function App() {
  const [count, setCount] = useState(0);

  const args = {
    title: 'This is Modal with no option',
    content: 'Here is the content section',
    theme: 'light',
    option: false,
    open: false,
    buttonContent: 'Open Modal',
  };

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noopener noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Modal title={args.title} open={false} buttonContent='Open me!'>
        <p>lol</p>
      </Modal>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
