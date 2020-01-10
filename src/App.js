import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <div className='App'>
          <Header branding='Contact Manager' />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Contacts} />
              <Route path='/contact/add' component={AddContact} />
              <Route path='/contact/edit/:id' component={EditContact} />
              <Route path='/about' component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
