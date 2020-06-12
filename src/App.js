import React from 'react';
import './App.scss';
import { renderToString } from 'react-dom/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//import components
import Page from './components/Page/Page';
import Menu from './components/Menu/Menu';
import Picture from "./components/Picture/Picture";
import Box from "./components/Box/Box";
import Budge from './components/Budge/Budge';
import Link from './components/Link/Link';
import ListItem from "./components/List/List_Item";
import Section from "./components/Section/Section";
//import data
import { getMainpage } from "./Utils/dbase";

//import assets
import avatar from "./assets/pictures/avatar.jpg";
import NEO_1 from './assets/screens/NEO_1.png';
import NEO_2 from './assets/screens/NEO_2.png';
import Mobile_1 from "./assets/screens/Mobile_1.png";
import Mobile_2 from "./assets/screens/Mobile_2.png";
import NPS from "./assets/screens/NPS.png";
import Koszty from "./assets/screens/Koszty.png";
import Lite from "./assets/screens/Lite.png";

//import FontAwesome icon
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'

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
      menuContent: renderToString(this.menuContent())
    });
  }

  menuContent = () => (
    <FontAwesomeIcon icon={faMailBulk} />
  )

  getAbout = () => (
    <Box title="Karol Kisz">
      <Picture picture={avatar} circle absolute />
      <ul>
        <ListItem title="Frontend Developer">
          <p>Na codzień zajmuje się tworzeniem oraz utrzymaniem pulpitów oraz stron internetowych służących do prezentacji i wprowadzania danych biznesowych.</p>
          <p>Wcześniej zajmowałem się naprawą komputerów oraz dbaniem o poprawne funkcjonowanie portalu do rozgrywek e-sportowych i organizacją turniejów z nastawieniem na wsparcie techniczne.</p>
        </ListItem>
      </ul>
    </Box>
  )

  getWorks = () => (
    <Box title="Praca">
      <ul>
        {
          work_desc.map( ({title,position,describe},id) => (
              <ListItem key={id.toString()} title={position} smTitle={title}>
                <p>{describe}</p>
              </ListItem>
          ))
        }
      </ul>
    </Box>
  )

  getSkills = () => {
    const { techs } = this.state;
    return (
      <Box title="Umiejętności">
        <ul>
          {
            [...new Set(techs.map(tech => tech.type), [])].map( (skill, id) => (
                <ListItem
                  key={id.toString()}
                  title={skill === 'OS' ? 'Systemy Operacyjne' : (skill === 'Programs' ? 'Programy' : (skill === 'App' ? 'Aplikacje' : skill === 'Database' ? 'Bazy danych' : skill))}
                >
                  {
                    techs.filter(({type}) => type === skill, []).map(({ name, link, icon }, idd) => (
                      <Budge key={idd.toString()} img={icon !== null ? icon.url : ''} link={link}>{name}</Budge>
                    ))
                  }
                </ListItem>
            ))
          }
        </ul>
      </Box>
    )
  }

  getLinks = (mobile = false) => {
    const {techs} = this.state;
    return (
      <Box title="Linki">
        {mobile ? (
          <Link link="https://www.codewars.com/users/Panty/" img={'https://external-content.duckduckgo.com/ip3/www.codewars.com.ico'}>
            CodeWars
          </Link>
        ) : (
          <a href="https://www.codewars.com/users/Panty/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block',width: '400px', height: '40px', backgroundImage: 'url(https://www.codewars.com/users/Panty/badges/large)'}}>
          </a>
        )}
        <Link link="https://github.com/P4NTY" img={techs.length !== 0 ? techs.filter(tech => tech.name === 'Git')[0].icon.url : ''}>
          Github
        </Link>
        <Link link="https://codepen.io/p4nty" img={'https://cdn1.iconfinder.com/data/icons/simple-icons/4096/codepen-4096-black.png'}>
          Codepen
        </Link>
        <Link link="https://www.youtube.com/channel/UC1f71yYUaQZI27OEoxG7G8g/S" img={'http://icons.iconarchive.com/icons/dakirby309/simply-styled/256/YouTube-icon.png'}>
          Youtube
        </Link>
        <Link link="https://www.linkedin.com/in/karol-kisz-6a95b1147/" img={'https://www.silversands.co.uk/wp-content/uploads/LinkedIn-Icon.png'}>
          Linkedin
        </Link>
      </Box>
    )
  }


  render() {
    const { getAbout, getWorks, getSkills, getLinks, state: {techs, projects, menuContent, menuSeeFlag, width, height} } = this;
    return (
      <>
      {(width < 1242 || height < 540) ? (
        <>
          <br/>
          {getAbout()}
          <Box title="Projekty">
            <ul>
              {
                projects.length !== 0 && (
                  projects.map( ({tittle, order, endDate, about: {html}, teches}) => {
                    const { role, description } = projects_desc.filter(a => a.project === tittle)[0],
                            tech = techs.filter(tech => teches.map(a => a.name, []).includes(tech.name), []);

                    return (
                      <ListItem
                        pointer
                        key={order.toString()}
                        title={`${tittle} ${endDate === null ? `(In Progress)` : ''}`}
                        onClick={(el)=> (
                          el.currentTarget.querySelector('div').style.display = el.currentTarget.querySelector('div').style.display !== 'block' ? 'block' : 'none'
                        )}
                      >
                        <p>{html.slice(3, html.length - 4)}</p>
                        <Section hide>
                          <b>{role}</b>
                          <p dangerouslySetInnerHTML={{__html: description}}></p>
                          {
                            tech.map( ({name, icon}) =>
                              <Budge
                                key={name}
                                img={icon !== null ? icon.url : ''}
                              >
                                {name}
                              </Budge>
                            )
                          }
                        </Section>
                      </ListItem>
                    )
                  })
              )}
            </ul>
          </Box>
          {getWorks()}
          {getSkills()}
          {getLinks(true)}
        </>
      ) : (
        <div className="App" style={{width: width, height: '9999px'}}>
          <Menu see={menuSeeFlag}>
              {menuContent}
          </Menu>
          <br/>
          <Page size={[width,height]}>
            {getAbout()}
            <Box title="Projekty">
              <ul>
                {
                  projects.length !== 0 && (
                    projects.map( ({tittle, order, endDate, about: {html}, teches}) => (
                      <ListItem
                        key={order.toString()}
                        title={`${tittle} ${endDate === null ? `(In Progress)` : ''}`}
                        onClick={ () => {

                        }}
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
                        onMouseLeave={() => { this.hideMenu(); }}
                      >
                        <p>{html.slice(3, html.length - 4)}</p>
                        <Section>
                          <Picture picture={NEO_1} small width={160} height={90}/>
                          <Picture picture={NEO_2} small  width={160} height={90}/>
                        </Section>
                      </ListItem>
                )))}
              </ul>
            </Box>
            {getWorks()}
          </Page>
          <Page size={[width,height]}>
            {getSkills()}
            {getLinks()}
          </Page>
        </div>
      )}
    </>
    );
  }
}

export default App;