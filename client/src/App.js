import React, { Component } from 'react';
 import './App.css';
 import AppContainer from './container/AppCountainer';
 import SingleFlat from './component/flat/SingleFlat'
 
  class App extends Component {
  render() {
    return (
       <div className="App">

          <div className="App-inside">
            <AppContainer/>
         
          </div>
       </div> 
  
     );
  }
}

export default App;
