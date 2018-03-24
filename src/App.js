import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Authentication from "./components/pages/authentication/Authentication";
import NotFound from '../src/components/routes/NotFound';
import Home from '../src/components/pages/home/Home';
import Inbox from '../src/components/pages/inbox/Inbox';
import Projects from '../src/components/pages/projects/Projects';
import Raport from '../src/components/pages/raport/Raport';
import Workflow from  '../src/components/pages/workflow/Workflow';
import PrivateLayout from '../src/components/routes/PrivateLayout';
import PublicLayout from "./components/routes/PublicLayout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <PublicLayout path="/authentication" component={Authentication} />

          <PrivateLayout exact path="/" component={Home }/>
          <PrivateLayout exact path="/inbox" component={Inbox} />
          <PrivateLayout exact path="/projects" component={Projects} />
          <PrivateLayout exact path="/raport" component={Raport} />
          <PrivateLayout exact path="/workflow" component={Workflow} />

          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
