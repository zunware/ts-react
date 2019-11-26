import React from 'react';
import './App.css';

type AppProps = { message: string }

const App: React.SFC<AppProps> = ({message}) => {
  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
