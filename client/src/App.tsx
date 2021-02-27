import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import KakeiboooDrawer from './drawer/ KakeiboooDrawer';
import HouseholdAccount from './household/HouseholdAccount';
import BudgetAnalysis from './BudgetAnalysis';
import FoodStaffManagement from './FoodStaffManagement';
import UserSetting from './UserSetting';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <KakeiboooDrawer/>
        <div className="content">
          <Switch>
            <Route path="/household" component={HouseholdAccount}></Route>
            <Route path="/analysis" component={BudgetAnalysis}></Route>
            <Route path="/foodstaff" component={FoodStaffManagement}></Route>
            <Route path="/setting" component={UserSetting}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
