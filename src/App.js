import './App.scss';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Navbar from './components/navBar';
import Footer from './containers/footer';


function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="App_main-page-content">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>
        

         <section id="resume">
          <Resume />
        </section>
        
        <section id="portfolio">
          <Portfolio />
        </section>

       

        <section id="contact">
          <Contact />
        </section>

          <section id="footer">
            <Footer />
          </section>

      </div>
    </div>
  );
}

export default App;
