
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cours from './components/Cours'
import Connexion from './components/Connexion'
import Home from './pages/Home'
import Admin from './components/admin/Admin'
import Menuadmin from './components/admin/Menuadmin'
import Insertformateur from './components/formateur/Insertformateur'
import Insertapprenant from './components/apprenant/Insertapprenant';
import ListFormateur from './components/formateur/Listformateur';
import Listeapprenant from './components/apprenant/listeapprenant';
import Editeformateur from './components/formateur/Editformateur';
import Espace from './components/espaceformateur/Espace'
import Listeformation from './components/espaceformateur/Listeformation'
import Espp from './components/espaceapprenant/Espp';
import Gerercours from './components/espaceformateur/Gerercours'
import Fairetest from './components/espaceapprenant/Fairetest'
import Listegroupe from './components/espaceformateur/Listegroupe'
import Quiz from './components/espaceformateur/Quiz'
import Register2 from './components/register/Register2';
import Register from './components/register/Register';
import Login from './components/login/Login';
import NosPartenaires from './components/NosPartenaires';
import DashboardAdmin from './pages/DashboardAdmin';
import DashboardFormateur from './pages/DashboardFormateur';
import DashboardApprenant from './pages/DashboardApprenant';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="register2" element={<Register2 />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path='/admin' element={<DashboardAdmin />}>

        </Route>
        <Route path='/formateur' element={<DashboardFormateur />}></Route>
        <Route path='/apprenant' element={<DashboardApprenant />}></Route>

        <Route path="/Cours" element={<Cours />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Nos_partenaires" element={<NosPartenaires />} />
        {/* <Route path ="/register" element={<Inscriver_vous/>}></Route> */}
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Menuadmin" element={<Menuadmin />} />
        <Route path="/ListFormateur" element={<ListFormateur />} />
        <Route path="/ListFormateur/Insertformateur" element={<Insertformateur />} />
        <Route path="/ListFormateur/Editformateur" element={<Editeformateur />} />
        <Route path="/Listeapprenant" element={<Listeapprenant />} />
        <Route path="/Listeapprenant/Insertapprenant" element={<Insertapprenant />} />
        <Route path="/Espace" element={<Espace />} />
        <Route path="/Listeformation" element={<Listeformation />} />
        <Route path="/Espp" element={<Espp />} />
        <Route path="/Gerercours" element={<Gerercours />} />
        <Route path="/Fairetest" element={<Fairetest />} />
        <Route path="/Listegroupe" element={<Listegroupe />} />
        <Route path="/Quiz" element={<Quiz />} />

      </Routes>

    </Router>
  );
}

export default App;
