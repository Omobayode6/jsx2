import React from 'react';
import './App.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Address from './Components/Profile/Address';

function App() {
  return (
    <div className="wrap">
      <div className='text'>
      <FullName />
      <Address />
      </div>
      <ProfilePhoto/>
    </div>
  );
}

export default App;
