import * as React from 'react';
import Signin from './auth/signin';
import AdminHome from './dashboard/adminDashboard';
import UserHome from './dashboard/userDashoboard';
import './style.css';

export default function App() {
  return (
    <div>
      {/* <Signin/> */}
      {/* <UserHome/> */}
      <AdminHome/>
    </div>
  );
}
