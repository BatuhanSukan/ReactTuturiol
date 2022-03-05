import React, {Component} from 'react';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';
import Users from './components/Users';
import Test from './components/Test';

import './App.css';


  class App extends Component{
  
  
  
  
  render() {
 
  return (
    <div className='container'>
      <Test test = "deneme" />
      <Navbar title = "User App"/>
      <hr/>
      <AddUser/>
      <Users/>

    </div>
  );
}
}
export default App;
