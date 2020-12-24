import React from 'react';
import './App.scss';
import AppIcon from './AppIcon';
import AppMenu from './AppMenu';
import AppAccount from './AppAccount';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="drawer">
        <AppIcon />
        <AppMenu />
        <AppAccount />
      </div>
      <div className="content">this is content area</div>
    </div>
  );
}

export default App;
