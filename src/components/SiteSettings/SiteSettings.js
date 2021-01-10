import React, { useState, useEffect } from 'react';

import classes from './SiteSettings.module.css';
import SettingsIcon from './settingsIcon.svg';
import Modal from '../../UI/Modal/Modal';


const SiteSettings = props => {
    const [settingsState, setSettingsState] = useState(false);
    const [language, setLanguage] = useState(''); 
    const textContainer = useState({
        'settings': {tr: 'Ayarlar', en: 'Settings', de: 'die Einstellungen'},
        'description': {tr: 'Dil Seçenekleri', en: 'Language', de: 'Sprachoptionen'},
        'language': {tr: ['Türkçe', 'İngilizce', 'Almanca'],
                     en: ['Turkish', 'English', 'German'],
                     de: ['Türkisch', 'Englisch', 'Deutsche']}
    })[0];

    useEffect(() => {
        setLanguage(props.language);
    }, [props.language]);

    const showSettingsHandler = () => {
        setSettingsState(!settingsState);
    }     

    const languages = textContainer['language'][props.language]
                        ? <ul>
                            <li onClick={() => props.clicked.SwitchLanguageHandler('tr')}>
                                {textContainer['language'][props.language][0]}
                            </li>
                            <li onClick={() => props.clicked.SwitchLanguageHandler('en')}>
                                {textContainer['language'][props.language][1]}
                            </li>
                            <li onClick={() => props.clicked.SwitchLanguageHandler('de')}>
                                {textContainer['language'][props.language][2]}
                            </li>                      
                          </ul>
                        : null

    return (
        <div language={language}>
            <Modal show={settingsState} modalClosed={showSettingsHandler} top="150px">
                <div className={classes.Container}>
                    <h3>{textContainer['settings'][language]}</h3>
                    <div className={classes.LanguageSettings}>
                        <h4>{textContainer['description'][language]}</h4>
                        {languages}
                    </div>
                </div>
            </Modal>
            <div className={classes.IconBox}>
                <img src={SettingsIcon} onClick={showSettingsHandler} alt="settings-icon"/>
            </div>
        </div>
    );
}

export default SiteSettings;