
import './App.css';
// import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Company from './pages/company/Company';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Organization from './pages/organization/Organization';
import Patients from './pages/patients/Patients';


function App() {
  return (
    <div className="App">
     <header>
       <Header />
     </header>
     <div className="content">
       <section id="home">
         <Home />
       </section>
       <section id="organization">
         <Organization />
       </section>
       <section id="patients">
         <Patients />
       </section>
       <section id="company">
         <Company />
       </section>
       <section id="contact">
         <Contact />
       </section>
     </div>
     {/* <div>
       <Footer />
     </div> */}
    </div>
  );
}

export default App;
