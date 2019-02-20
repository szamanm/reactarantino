import * as React from 'react';
import './App.css';

import { Logo } from './components/Logo';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo/>
        </header>
      </div>
    );
  }
}

export default App;
