import React from 'react';
import CounterApp from './task1/CounterApp';
import UserApp from './task2/UserApp';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Laboratory Work №3</h1>
      <hr />
      
      {/* Part 1 */}
      <CounterApp />
      
      <div style={{ margin: '40px 0', borderTop: '2px solid #333' }}></div>
      
      {/* Part 2 */}
      <UserApp />
    </div>
  );
}

export default App;
