import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import LogonPage from 'Pages/Logon';
import RegisterPage from 'Pages/Register';
import ProfilePage from 'Pages/Profile';
import IncidentsPage from 'Pages/Incidents';
import { useDispatch } from 'react-redux';
import { ReloadSession } from 'Redux-tools/Modules/Auth';

export default function Routes() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ReloadSession());
  });

  return (
    <Switch>
      <Route exact path="/" component={LogonPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/incidents/new" component={IncidentsPage} />
    </Switch>
  );
}
