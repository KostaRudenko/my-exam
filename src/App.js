import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Authentication from "./components/pages/authentication/Authentication";
import NotFound from './components/routes/NotFound';
import Home from './components/pages/home/Home';
import Inbox from './components/pages/inbox/InboxChat';
import Raport from './components/pages/raport/Raport';
import Workflow from  './components/pages/workflow/Workflow';
import PrivateLayout from './components/routes/PrivateLayout';
import PublicLayout from "./components/routes/PublicLayout";
import Settings from "./components/pages/settings/Settings";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <PublicLayout path="/authentication" component={Authentication} />

          <PrivateLayout exact path="/" component={Home }/>
          <PrivateLayout exact path="/inbox" component={Inbox} />
          <PrivateLayout exact path="/workflow" component={Workflow} />
          <PrivateLayout exact path="/raport" component={Raport} />
          <PrivateLayout exact path="/settings" component={Settings} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
