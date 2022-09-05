import * as React from 'react';
import Signin from './auth/signin';
import UserHome from './dashboard/userDashoboard';
import './style.css';

export default function App() {
  return (
    <div>
      {/* <Signin/> */}
      <UserHome/>
    </div>
  );
}
