import React from 'react';
import style from './App.module.scss';
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
import Form from "./components/Form/Form";

//import data
import { getMainpage } from "./Utils/dbase";

//import assets
import avatar from "./assets/pictures/avatar.jpg";
import NEO_1 from './assets/screens/NEO_1.png';
import NEO_2 from './assets/screens/NEO_2.png';
import Mobile_1 from "./assets/screens/Mobile_1.png";
import Mobile_2 from "./assets/screens/Mobile_2.png";
import Mobile_3 from "./assets/screens/Mobile_3.png";
// import NPS from "./assets/screens/NPS.png";
import Koszty from "./assets/screens/Koszty.png";
import Lite from "./assets/screens/Lite.png";
import SF_1 from "./assets/screens/SF_1.png";
import SF_2 from "./assets/screens/SF_2.png";
import ALoG_1 from "./assets/screens/ALoG_1.png";
import ALoG_2 from "./assets/screens/ALoG_2.png";
import COVID_1 from "./assets/screens/COVID_1.png";
import COVID_2 from "./assets/screens/COVID_2.png";
import Bot_1 from "./assets/screens/Bot_1.png";
import Bot_2 from "./assets/screens/Bot_2.jpg";
import Bot_3 from "./assets/screens/Bot_3.jpg";



//import FontAwesome icon
import { faEnvelopeOpenText, faFilePdf, faQuestion } from '@fortawesome/free-solid-svg-icons';

//import data projects description
import projects_desc from "./data/projects_desc.json";
import work_desc from "./data/work_desc.json";
import InfoSection from 'components/InfoSection/InfoSection';

class App extends React.Component {
  state = {
    techs: [],
    projects: [],
    menuContent: '',
    menuSeeFlag: false,
    width: window.innerWidth,
    height: window.innerHeight,
    seeAbout: false
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    getMainpage().then( res => {
      (res !== null &&
        this.setState(()=>({
          projects: res.data.projectses,
          techs: res.data.teches,
          menuContent: this.menuContent()
        }))
      )
    })
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
      menuContent: this.menuContent()
    });
  }

  seeAbout = () => {
    this.setState({
      seeAbout: !this.state.seeAbout
    })
  }

  menuContent = () => {
    const { seeAbout } = this;

    return (
      <>
        <button className={style.menuButton} onClick={()=>(window.print())}>
          <FontAwesomeIcon icon={faFilePdf}/>
        </button>
        <button className={style.menuButton} onClick={()=>(window.scroll({
          top: document.documentElement.scrollHeight,
          left: 0,
          behavior: "smooth"
        }))}>
          <FontAwesomeIcon icon={faEnvelopeOpenText}/>
        </button>
        <button className={style.menuButton} onClick={()=>(seeAbout())}>
          <FontAwesomeIcon icon={faQuestion}/>
        </button>
      </>
    )
  }

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
                    techs.filter(({type}) => type === skill, []).map(({ name, link, icon: {url}, description}, idd) => (
                      <Budge
                        key={idd.toString()}
                        img={url !== null ? url : ''}
                        link={link}
                        description={description}
                      >
                        {name}
                      </Budge>
                    ))
                  }
                </ListItem>
            ))
          }
        </ul>
      </Box>
    )
  }

  getLinks = () => {
    const {techs} = this.state;
    return (
      <Box title="Linki">
        <Link link="https://www.codewars.com/users/Panty/" img={'https://external-content.duckduckgo.com/ip3/www.codewars.com.ico'}>
          CodeWars
        </Link>
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

  getPic = (title) => {
    switch (title) {
      case 'MIS LITE':
        return <Picture picture={Lite} width={160} height={90} />;
      case 'MIS MOBILE':
        return <>
        <Picture picture={Mobile_1} small width={90} height={160}/>
        <Picture picture={Mobile_2} small width={90} height={160}/>
        <Picture picture={Mobile_3} small width={160} height={90}/>
      </>;
      case 'NEO 2.0':
        return <>
        <Picture picture={NEO_1} small width={160} height={90}/>
        <Picture picture={NEO_2} small width={160} height={90}/>
        <Picture picture={Koszty} small width={160} height={90}/>
        {/* <Picture picture={NPS} small width={160} height={90}/> */}
      </>;
      case 'MIS Salesforce':
        return <>
        <Picture picture={SF_1} small width={160} height={90}/>
        <Picture picture={SF_2} small width={160} height={90}/>
      </>;
      case 'Academic League of Game':
        return <>
        <Picture picture={ALoG_1} small width={160} height={90}/>
        <Picture picture={ALoG_2} small width={160} height={90}/>
      </>;
      case 'Strona i Stream Covid 19':
        return <>
        <Picture picture={COVID_1} small width={160} height={90}/>
        <Picture picture={COVID_2} small width={160} height={90}/>
      </>;
      case 'RPG Assisstant (Discord Bot)':
        return <>
          <Picture picture={Bot_1} small width={160} height={90}/>
          <Picture picture={Bot_2} small width={160} height={90}/>
          <Picture picture={Bot_3} small width={160} height={90}/>
        </>;
      default:
        return <>Niestety nic godnego pozazania się nie zachowało 😞</>
    }
  }

  render() {
    const { getAbout, getWorks, getSkills, getLinks, getPic, state: {techs, projects, menuContent, menuSeeFlag, width, height, seeAbout} } = this;
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
                  projects.map( ({title, order, endDate, about: {html}, teches}) => {
                    const { role, description } = projects_desc.filter(a => a.project === title)[0]||{},
                            tech = techs.filter(tech => teches.map(a => a.name, []).includes(tech.name), []);

                    return (
                      <ListItem
                        key={order.toString()}
                        title={`${title} ${endDate === null ? `(In Progress)` : ''}`}
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
          {getLinks()}
        </>
      ) : (
        <div className={style.App} style={{width: width}}>
          <InfoSection see={seeAbout}/>
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
                    projects.map( ({title, order, endDate, about: {html}, teches}) => (
                      <ListItem
                        hover
                        key={order.toString()}
                        title={`${title} ${endDate === null ? `(In Progress)` : ''}`}
                        onMouseEnter={() => {
                          console.log(projects_desc.filter(a => a.project === title)[0])
                          const { project, role, description } = projects_desc.filter(a => a.project === title)[0]||{},
                            tech = techs.filter(tech => teches.map(a => a.name, []).includes(tech.name), []);
                          this.seeMenu();
                          this.fillMenu(
                            <>
                              <h1>{project}</h1>
                              <b>{role}</b>
                              <p dangerouslySetInnerHTML={{ __html: description }}></p>
                              {tech.map( ({name, icon}) =>
                                  <Budge
                                    key={name}
                                    img={icon !== null ? icon.url : ''}
                                  > {name} </Budge>
                              )}
                            </>
                          );
                        }}
                        onMouseLeave={() => { this.hideMenu(); }}
                        onClick={ (el)=> (
                          el.currentTarget.querySelector('div').style.display = el.currentTarget.querySelector('div').style.display !== 'block' ? 'block' : 'none'
                        )}
                      >
                        <p>{html.slice(3, html.length - 4)}</p>
                        <Section hide>
                          { getPic(title) }
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
          <Form/>
        </div>
      )}
    </>
    );
  }
}

export default App;