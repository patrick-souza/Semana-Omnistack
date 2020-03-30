import React from 'react';
import './styles.css';

import ListIncidents from './Components/ListIncidents';
import Header from './Components/Header';

export default function Profile() {
  return (
    <div className="profile-container">
      <Header />
      <h1>Casos Registrados</h1>
      <ListIncidents />
    </div>
  );
}
