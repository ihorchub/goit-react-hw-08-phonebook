import { Layout } from 'components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('Pages/Home/Home'));
const RegisterPage = lazy(() => import('Pages/Register/Register'));
const LoginPage = lazy(() => import('Pages/Login/Login'));
const ContactsPage = lazy(() => import('Pages/Contacts/Contacts'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};
