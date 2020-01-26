import React from 'react';
import './App.scss';
import Page from './components/Page/Page';
import Menu from './components/Menu/Menu';
import Picture from "./components/Picture/Picture";
import Box from "./components/Box/Box";

import avatar from "./assets/pictures/new low.PNG";

function App() {
  return (
    <div className="App">
      <Menu/>
      <Page>
        <Picture picture={avatar} type="circle"/>
        <Box title="Karol Kisz">
          <h2>Frontend Developer</h2>
          <p>Na codzień zajmuje się tworzeniem oraz utrzymaniem pulpitów oraz stron internetowych służących do prezentacji i wrpowadzania danych biznesowych.</p>
          <p>Wcześniej zajmowałem się naprawą komputerów oraz dbaniem o poprawne funkcjonowanie portalu do rozgrywek e-sportowych i organizacją turniejów z nastawieniem na wsparcie techniczne.</p>
        </Box>
        <Box title="Projekty">
          <ul>
            <li>
              <h2>MIS LITE (In Progress)</h2>
              <p>Odświżona wersja raportowania danych biznesowych dedykowana na komputery stacjonarne</p>
            </li>
            <li>
              <h2>MIS MOBILE</h2>
              <p>Aplikacja służaca do wyświetlania danych biznesowych na urządzenia przenośne z Androidem oraz IOS</p>
            </li>
            <li>
              <h2>NEO 2.0</h2>
              <p>Odświeżenie warstwy wizualnej dla platformy raportującej dane biznesowe</p>
            </li>
            <li>
              <h2>Academic League of Game</h2>
              <p>Portal zajmujacy się zarządzaniem meczami e-sportowymi oraz wyświetlający statystyki z nimi związane</p>
            </li>
            <li>
              <h2>Portal growy Zagrani.pl</h2>
              <p>Redaktor oraz administrator portalu</p>
            </li>
            <li>
              <h2>Strona Samorządu Uczelni</h2>
              <p>Zarządzanie i tworzenie nowych treści związanych z życiem uczelni</p>
            </li>
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
              React, jQuery, SCSS (Sass), HTML5
            </li>
            <li>
              <h2>Backend</h2>
              Node.js, PHP, MySQL, Apex, OBIEE, GraphCMS
            </li>
            <li>
              <h2>Aplikacje</h2>
              C#, Java
            </li>
            <li>
              <h2>Systemy Operacyjne / oprogramowanie biurowe</h2>
              Git, Windows, Linux, Android, Pakiet Office 
            </li>
          </ul>
        </Box>
      </Page>
    </div>
  );
}

export default App;
