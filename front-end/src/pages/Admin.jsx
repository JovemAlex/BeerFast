import React from 'react';
import NavbarAdminPage from '../components/NavbarAdminPage';
import RegisterNewUser from '../components/RegisterNewUser';
import UserList from '../components/UserList';

export default function Admin() {
  return (
    <main>
      <div>
        <NavbarAdminPage />
      </div>
      <div>
        <RegisterNewUser />
      </div>
      <div>
        <UserList />
      </div>
    </main>
  );
}
