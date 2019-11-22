import * as React from 'react';
import './App.css';

import MyClass from './components/hello';

const App: React.FC = () => {

  return (
    <div className="App">
      <MyClass/>
    </div>
  );
};

export default App;
