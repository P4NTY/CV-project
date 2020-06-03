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
import ListItem from "./components/List/List_Item";

//import data
import { getMainpage } from "./Utils/dbase";

//import assets
import avatar from "./assets/pictures/avatar.jpg";

//import data projects description
import projects_desc from "./data/projects_desc.json";
import work_desc from "./data/work_desc.json";

class App  extends React.Component {
  state = {
    techs: [],
    projects: [],
    menuContent: '',
    menuSeeFlag: false,
    width: window.innerWidth,
    height: window.innerHeight
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    getMainpage().then( res => (
      (res !== null &&
        this.setState(()=>({
          projects: res.data.projectses,
          techs: res.data.teches,
        }))
      )
    ))
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
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
    const { techs, projects, menuContent, menuSeeFlag, width } = this.state;
    return (
      <>
      {(width <= 1400) ? (<></>) : (
        <div className="App">
          <Menu see={menuSeeFlag}>
              {menuContent}
          </Menu>
          <Page>
          <Box title="Karol Kisz">
            <Picture picture={avatar} type="circle" />
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
                      className='hover'
                      key={order.toString()}
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
              {
                work_desc.map( ({title,position,describe}) => (
                    <ListItem title={title} smTitle={position}>
                      {describe}
                    </ListItem>
                ))
              }
            </ul>
          </Box>
        </Page>
        <Page>
          <Box title="Umiejętności">
            <ul>
              {
                [...new Set(techs.map(tech=> tech.type), [])].map( (skill, id) => (
                    <li key={id.toString()}>
                      <h2>
                        {
                          skill === 'OS' ? 'Systemy Operacyjne' : (skill === 'Programs' ? 'Programy' : (skill === 'App' ? 'Aplikacje' : skill === 'Database' ? 'Bazy danych' : skill))
                        }
                      </h2>
                      {
                      techs.map(({ name, link, type, icon }, idd) => (
                        skill === type ? (
                          <Budge key={idd.toString()} img={icon !== null ? icon.url : ''} link={link}>{name}</Budge>
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
            <Link link="https://www.youtube.com/channel/UC1f71yYUaQZI27OEoxG7G8g/S" img={'http://icons.iconarchive.com/icons/dakirby309/simply-styled/256/YouTube-icon.png'}>
              Youtube
            </Link>
          </Box>
        </Page>
      </div>
    )}
    </>
    );
  }
}

export default App;