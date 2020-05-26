import React from 'react';
import './App.scss';
import { renderToString } from 'react-dom/server';

//import components
import Page from './components/Page/Page';
import Menu from './components/Menu/Menu';
import Picture from "./components/Picture/Picture";
import Box from "./components/Box/Box";
import Budge from './components/Budge/Budge';
import Link from './components/Link/Link';

//import data
import { getMainpage } from "./Utils/dbase";

//import assets
import avatar from "./assets/pictures/avatar.jpg";

//import data projects description
import projects_desc from "./data/projects_desc.json";

class App  extends React.Component {
  state = {
    loaded: false,
    techs: [],
    projects: [],
    menuContent: '',
    menuSeeFlag: false,
  }

  setData = () => {
    getMainpage().then( res => (
      (res !== null &&
        this.setState(()=>({
          projects: res.data.projectses,
          techs: res.data.teches,
          loaded: true
        }))
      )
    ))
    this.setState(()=>({
      loaded: null
    }))
  }

  fillMenu = (content) => {
    const { menuContent } = this.state;
    content !== menuContent && this.setState({ menuContent: content });
  }

  seeMenu = () => {
    this.setState({ menuSeeFlag: true });
  }

  hideMenu = () => {
    this.setState({
      menuSeeFlag: false,
      menuContent: ''
    });
  }

  render() {
    const { techs, projects, loaded, menuContent, menuSeeFlag } = this.state;
    if (loaded === false) this.setData();
    return (
      <div className="App">
        <Menu see={menuSeeFlag}>
            {menuContent}
        </Menu>
        <Page>
          <Picture picture={avatar} type="circle" />
          <Box title="Karol Kisz">
            <ul>
              <li>
                <h2>Frontend Developer</h2>
                <span>
                  <p>Na codzień zajmuje się tworzeniem oraz utrzymaniem pulpitów oraz stron internetowych służących do prezentacji i wrpowadzania danych biznesowych.</p>
                  <p>Wcześniej zajmowałem się naprawą komputerów oraz dbaniem o poprawne funkcjonowanie portalu do rozgrywek e-sportowych i organizacją turniejów z nastawieniem na wsparcie techniczne.</p>
                </span>
              </li>
            </ul>
          </Box>
          <Box title="Projekty">
            <ul>
              {
                projects.length !== 0 && (
                  projects.map( ({tittle, order, endDate,about, teches}) => (
                    <li
                      key={order}
                      onMouseEnter={() => {
                        const { project, role, description } = projects_desc.filter(a => a.project === tittle)[0],
                          tech = techs.filter(tech => teches.map(a => a.name, []).includes(tech.name), []);
                        
                        this.seeMenu();
                        this.fillMenu(
                          `<h1>${project}</h1>
                          <b>${role}</b>
                          <br/>
                          ${description}
                          <br/>
                          ${tech.map( ({name, icon}) =>
                            renderToString(
                              <Budge
                                key={name}
                                img={icon !== null ? icon.url : ''}
                              >
                                {name}
                              </Budge>
                            )
                          )}
                          `
                        );
                      }}
                      onMouseLeave={() => {
                        this.hideMenu();

                      }}
                    >
                      <h2> {tittle} {endDate === null && `(In Progress)`} </h2>
                      <span dangerouslySetInnerHTML={{__html: about.html}}></span>
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
                <p>Tworzenie wizualizacji służących do pokazywania danych,tworzenie i utrzymanie działajacych pulpitów oraz wsparcie w sprawach technicznych.</p>
              </li>
              <li>
                <h2>Stersystems</h2>
                <h3>Serwisant sprzętu komputerowego</h3>
                <p>Diagnoza oraz naprawa sprzętu elektronicznego min. komputerów, konsol, dronów.</p>
              </li>
              <li>
                <h2>Academic League of Game</h2>
                <h3>Główny administrator oraz developer</h3>
                <p>Modelowanie bazy danych, tworznie treści internetowych, zarządzanie mediami społecznościowymi.</p>
              </li>
            </ul>
          </Box>
        </Page>
        <Page>
          <Box title="Umiejętności">
            <ul>
              {
                [...new Set(techs.map(tech=> tech.type), [])].map( skill => (
                    <li key={skill}>
                      <h2>
                        {
                          skill === 'OS' ? 'Systemy Operacyjne' : (skill === 'Programs' ? 'Programy' : (skill === 'App' ? 'Aplikacje' : skill === 'Database' ? 'Bazy danych' : skill))
                        }
                      </h2>
                      {
                      techs.map(({ name, link, type, icon }) => (
                        skill === type ? (
                          <Budge key={name} img={icon !== null ? icon.url : ''} link={link}>{name}</Budge>
                        ) : <></>
                      ))}
                    </li>
                ))
              }
            </ul>
          </Box>
          <Box title="Linki">
            <a href="https://www.codewars.com/users/Panty/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block',width: '400px', height: '40px', backgroundImage: 'url(https://www.codewars.com/users/Panty/badges/large)'}}>
            </a>
            <Link link="https://github.com/P4NTY" img={techs.length !== 0 ? techs.filter(tech => tech.name === 'Git')[0].icon.url : ''}>
              Github
            </Link>
            <Link link="https://codepen.io/p4nty" img={'https://cdn1.iconfinder.com/data/icons/simple-icons/4096/codepen-4096-black.png'}>
              Codepen
            </Link>
          </Box>
        </Page>
      </div>
    );
  }
}

export default App;