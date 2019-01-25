import React, { Component } from 'react';
import logo from './logo.svg';
import 'css/App.css';
import Nav from "./component/Nav";

//font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faUsers, faBell, faQuestionCircle, faCaretDown } from '@fortawesome/free-solid-svg-icons'
library.add(fab,faSearch, faUsers,faBell, faQuestionCircle,faCaretDown);
//font-awesome

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <section className="content">

        </section>
      </div>
    );
  }
}

export default App;
