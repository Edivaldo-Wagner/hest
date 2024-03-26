import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Login from './login/index';
import Cadastro from './cadastro/index';
import Dashboard from './dashboard/index';
import Wallet from './wallet/index';
import Tasks from './tasks/index';
import Schedule from './schedule/index';
import Settings from './settings/index';
import Profile from './settings/profile';
import Places from './settings/places';
import Professionals from './settings/professionals';
import Category from './settings/category';
import Services from './settings/services';
import Rattings from './settings/rattings';
import Terms from './settings/terms';
import Bio from './business/bio';
import confirmationService from './business/confirmation-service';
import Sair from './sair/index';



function App() {
  return (

    <Router>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/settings" element={<Settings />} />
            <Route path="/settings/profile" element={<Profile />} />
            <Route path="/settings/places" element={<Places />} />
            <Route path="/settings/professionals" element={<Professionals />} />
            <Route path="/settings/category" element={<Category />} />
            <Route path="/settings/services" element={<Services />} />
            <Route path="/settings/rattings" element={<Rattings />} />
            <Route path="/settings/terms" element={<Terms />} />
        <Route path="/business/bio" element={<Bio />} />
        <Route path="/business/confirmation-service" element={<confirmationService />} />
        <Route path="/sair" element={<Sair />} />
      </Routes>
    </Router>

  
  );
}

export default App;
