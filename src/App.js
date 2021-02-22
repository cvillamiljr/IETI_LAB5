import React,{Component} from 'react';
import './App.css';
import {Login} from './components/Login';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import MiniDrawer from './Drawer';

class App extends Component{


  constructor(props) {
    super(props);
    localStorage.setItem('email',"cesar@mail.com");
    localStorage.setItem('password',"cesar123");

  }
  render(){
    return (
        <Router>
          <div className="App">
            <div>
              {localStorage.getItem('isLoggedIn')==="true"?
                  <MiniDrawer/>:<Login/>}
            </div>
          </div>
        </Router>
    );
  }


}

export default App;
