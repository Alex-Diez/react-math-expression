import * as React from 'react';
import './css/App.css';
import { ApplicationConsole } from './components/ApplicationConsole';

class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ApplicationConsole/>
      </div>
    );
  }
}

export default App;
