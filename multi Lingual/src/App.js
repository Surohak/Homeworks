import React, { Component } from 'react';
import Makiaveli from "./Makiaveli.jpg";
import './Dropdown.css';
import './App.css';
import LS from './LS.svg';
import DD from './DD.svg';
import hyAM from './hyAM.png';
import enGB from './enGB.png'
import ruRU from './ruRU.svg';
import deDE from './deDE.png';
import itIT from './itIT.svg';
import esES from './esES.png';

const languages = {
  "en-GB": "English",
  "hy-AM": "Հայերեն",
  "ru-RU": "Русский",
  "de-DE": "Deutsch",
  "it-IT": "Italiano",
  "es-ES": "Español"
  
};
const images = {
  "en-GB": enGB,
  "hy-AM": hyAM,
  "ru-RU": ruRU,
  "de-DE": deDE,
  "it-IT": itIT,
  "es-ES": esES
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: "en-GB",
      textsLoaded: false,
      err: ""
    };
    this.initialLocale = "hy-AM";
    this.texts = {};
  }

  componentDidMount() {
    this.setLocale(this.initialLocale);
  }

  componentDidCatch(err, errInfo) {
    console.log(err);
  }

  setLocale = locale => {
    if (this.state.locale !== locale) {
      this.setState({ textsLoaded: false, locale });
      fetch(`http://localhost:3000/locale/${locale}.json`)
        .then(res => res.json())
        .then(json => {
          this.texts = json;
          this.setState({ textsLoaded: true });
        })
        .catch(ex => {
          this.setState({ err: ex });
        });
    }
  };

  render() {
    return (
      <div className="App">
        {this.state.err !== "" ? (
          "Oops!"
        ) : this.state.textsLoaded ? (
          <div>
            <h1>{this.texts.title}</h1>
            <div className="dropdown">
              <button className="dropbtn"><img src={images[this.state.locale]}  alt={languages[this.state.locale]}/>{languages[this.state.locale]}<img src={DD} alt="Dropdown"/></button>
                <div className="dropdown-content">
                {["hy-AM", "en-GB", "ru-RU","de-DE","it-IT","es-ES"].map(locale => (
                <a href="/#" key={locale} onClick={e => this.setLocale(locale)}>
                  {languages[locale]}
                </a>
                ))}
                </div>
              </div>
            <div>
              <img src={Makiaveli} alt="A Makiaveli"/>
              <p>{this.texts.text1}</p>
            </div>
          </div>
        ) : (
          <img src={LS} alt="Loading"/>
        )}
      </div>
    );
  }
}
export default App