import React, { Component } from 'react';
import 'css/App.css';
//import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from "./component/Nav";
import Articles from "./component/Articles";

//font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, far, fas);

//font-awesome
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Container/>
      </div>
    );
  }
}
function Container(){
  return (
    <div className="content container">
      <div className="col-pd-1"></div>
      <div className="left-menu"></div>
      <Articles/>
      <div className="right-menu"></div>
      <div className="col-pd-2"></div>
    </div>
  )
}

export default App;
