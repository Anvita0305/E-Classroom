import { React, render } from 'react';
  
const cal = () => {
  render (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>Welcome to the calender page</h1>
    </div>
  );
};
  
export default cal;