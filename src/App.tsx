import React from 'react';
import './App.scss';
import AppIcon from 'AppIcon';
import AppMenu from 'AppMenu';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="drawer">
        <AppIcon/>
        <AppMenu/>
      </div>
      <div className="content">this is content area</div>
    </div>
  );
}

export default App;
