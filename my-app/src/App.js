import './HtmlComponents/Css/App.css';
import React from 'react';
import { Registration } from "./HtmlComponents/pages/Registration"
import { MainPage } from './HtmlComponents/pages/MainPage';
import { Profile } from './HtmlComponents/pages/Profile';
import { Login } from './HtmlComponents/pages/Login';
import { Banner } from './HtmlComponents/pages/Banner';
import { ConfirmMail } from './HtmlComponents/pages/СonfirmMail'
import { CreateBranch } from './HtmlComponents/pages/CreateBranch';
import { Branch } from './HtmlComponents/pages/Branch';
import { RequireAuth } from './HtmlComponents/Hoc/RequireAuth';
import { AuthProvider } from './HtmlComponents/Hoc/AuthProvider';
import { Notfoundpage } from './HtmlComponents/pages/NotFoundPage';
import { Routes, Route, Navigate } from 'react-router-dom';

//запуск приложения

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/" element={<Banner />}>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="confirm" element={<ConfirmMail />} />
          <Route path="*" element={<Notfoundpage />} />
          <Route path="/main" element={
            <RequireAuth>
              <MainPage />
            </RequireAuth>} />
          <Route path="profile/:id" element={
            <RequireAuth>
              <Profile />
            </RequireAuth>} />
          <Route path="branch/:branchid" element={
            <RequireAuth>
              <Branch />
            </RequireAuth>} />
          <Route path="profile/:id/create" element={
            <RequireAuth>
              <CreateBranch />
            </RequireAuth>} />
        </Route>
      </Routes>
    </AuthProvider>

  );
}

export default App;
