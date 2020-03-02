import React from 'react';
import './App.scss';

//import components
import Page from './components/Page/Page';
import Menu from './components/Menu/Menu';
import Picture from "./components/Picture/Picture";
import Box from "./components/Box/Box";
import Budge from './components/Budge/Budge';

//import data
import { getMainpage } from "./Utils/dbase";

//import assets
import avatar from "./assets/pictures/new low.PNG";

class App  extends React.Component {
  state = {
    techs: [],
    projects: []
  }
  
  setData = () => {
    getMainpage().then( res => (
      this.setState(()=>({
        projects: res.data.projectses,
        techs: res.data.teches
      }))
    ))
  }

  render() {
    const {techs, projects} = this.state;
    if (projects.length === 0 && techs.length === 0) this.setData();
    return (
      <div className="App">
        <Menu/>
        <Page>
          <Picture picture={avatar} type="circle" />
          <Box title="Karol Kisz">
            <h2>Frontend Developer</h2>
            <p>Na codzień zajmuje się tworzeniem oraz utrzymaniem pulpitów oraz stron internetowych służących do prezentacji i wrpowadzania danych biznesowych.</p>
            <p>Wcześniej zajmowałem się naprawą komputerów oraz dbaniem o poprawne funkcjonowanie portalu do rozgrywek e-sportowych i organizacją turniejów z nastawieniem na wsparcie techniczne.</p>
          </Box>
          <Box title="Projekty">
            <ul>
              {
                projects.length !== 0 && (
                  projects.map( ({tittle, order, endDate,about}) => (
                    <li key={order}>
                      <h2> {tittle} {endDate === null && `(In Progress)`} </h2>
                      <p>{about}</p>
                    </li>
                  ))
                )
              }
            </ul>
          </Box>
          <Box title="Praca">
            <ul>
              <li>
                <h2>Santander Bank Polska</h2>
                <h3>Młodszy Specjalista ds. Informacji Zarządczej</h3>
                <p>Tworzenie wizualizacji służących do pokazywania danych, utrzymanie działajacych pulpitów oraz wsparcie w sprawach technicznych</p>
              </li>
              <li>
                <h2>Stersystems</h2>
                <h3>Serwisant sprzętu komputerowego</h3>
                <p>Diagnoza oraz naprawa sprzętu elektronicznego min. komputerów, konsol, dronów</p>
              </li>
              <li>
                <h2>Academic League of Game</h2>
                <h3>Główny administrator oraz developer</h3>
                <p>Modelowanie bazy danych, tworznie treści internetowych, zarządzanie mediami społecznościowymi</p>
              </li>
            </ul>
          </Box>
        </Page>
        <Page>
          <Box title="Umiejętności">
            <ul>
              <li>
                <h2>Frontend</h2>
                <Budge img="" link="https://pl.reactjs.org/">React</Budge>
                <Budge img="" link="">HTML5, CSS3</Budge>
                <Budge img="" link="https://sass-lang.com/">SCSS (Sass)</Budge>
                <Budge img="" link="https://jquery.com/">jQuery</Budge>
              </li>
              <li>
                <h2>Backend</h2>
                <Budge img="" link="https://nodejs.org/en/">Node.js</Budge>
                <Budge img="" link="https://www.php.net/">PHP</Budge>
                <Budge img="" link="https://www.mysql.com/">MySQL</Budge>
                <Budge img="" link="https://apex.oracle.com/en/">Apex</Budge>
                <Budge img="" link="https://www.oracle.com/pl/middleware/technologies/bi.html">OBIEE</Budge>
                <Budge img="" link="https://graphcms.com/">GraphCMS</Budge>
                <Budge img="" link="https://pl.python.org/">Python</Budge>
              </li>
              <li>
                <h2>Aplikacje</h2>
                <Budge img="" link="https://docs.microsoft.com/pl-pl/dotnet/csharp/">C#</Budge>
                <Budge img="" link="">Java</Budge>
                <Budge img="" link="https://unity.com/">Unity</Budge>
              </li>
              <li>
                <h2>Systemy Operacyjne / oprogramowanie biurowe</h2>
                <Budge img="" link="">GIT</Budge>
                <Budge img="" link="">Visual Studio Code</Budge>
                <Budge img="" link="">Linux</Budge>
                <Budge img="" link="">Android Studio</Budge>
                <Budge img="" link="">Pakiet Office</Budge> 
              </li>
            </ul>
          </Box>
          <Box title="Linki">
            <a href="https://www.codewars.com/users/Panty/" target="_blank"  rel="noopener noreferrer" style={{display: 'inline-block',width: '400px', height: '40px', backgroundImage: 'url(https://www.codewars.com/users/Panty/badges/large)'}}>
            </a>
            <a href="https://github.com/P4NTY" target="_blank"  rel="noopener noreferrer"> github </a>
            <a href="https://codepen.io/p4nty" target="_blank"  rel="noopener noreferrer"> codepen </a>
          </Box>
        </Page>
      </div>
    );
  }
}

export default App;
