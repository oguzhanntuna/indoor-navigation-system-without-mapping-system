import React, { useEffect, useState } from 'react';

import classes from './Campaigns.module.css';
import campaign1 from './1.jpg';
import campaign2 from './2.jpg';
import campaign3 from './3.jpg';
import Modal from '../../UI/Modal/Modal';

const Campaigns = props => {
    const buttonTextContainer = useState({
        'button-title': {tr: 'Kampanyalar', en: 'Campaigns' ,de: 'Kampagnen'}
    })[0];
    const campaigns = useState({
        "1": {
            'title': {
                tr: `BKM Express ile Akmerkez Otopark Ödemenizi Cepten Kolayca Yapın!`,
                en: `Make Your Akmerkez Parking Payment Easily From Mobile With BKM Express!`,
                de: `Mit BKM Express Können Sie Ihre Akmerkez-Parkgebühren Bequem Vom Handy Aus Bezahlen!`
            },
            'description': {
                tr: `Artık Akmerkez'de otopark ücreti ödemek çok daha güvenli ve kolay! Otopark fişindeki barkodu telefonunuzdaki BKM Express uygulamasında okutun, temassız ve dijital ödeme yapmanın keyfini çıkarın.`,
                en: `It is now much safer and easier to pay parking fees at Akmerkez! Scan the barcode on the parking ticket in the BKM Express application on your phone and enjoy making contactless and digital payments.`,
                de: `Es ist jetzt viel sicherer und einfacher, Parkgebühren bei Akmerkez zu bezahlen! Scannen Sie den Barcode auf dem Parkticket in der BKM Express-Anwendung auf Ihrem Telefon und genießen Sie kontaktlose und digitale Zahlungen.`
            },
            date: `2020-12-03 - 2021-12-17`,
            img: campaign1
        },
        "2": {
            'title': {
                tr: `Bize Güveniniz Tescillendi!`,
                en: `Your Confidence In Us Has Been Registered!`,
                de: `Ihr Vertrauen In Uns Wurde registriert!`
            },
            'description': {
                tr: `Akmerkez, TSE tarafından verilen COVID-19 Güvenli Hizmet Belgesi'ni aldı. Hem çalışanlarımızın hem misafirlerimizin güvenliği için, hijyen standartlarımızı ve önlemlerimizi en üst seviyelere çıkarmış olmaktan mutluyuz!`,
                en: `Akmerkez received the COVID-19 Safe Service Certificate issued by TSE. We are happy to have raised our hygiene standards and precautions to the highest levels for the safety of both our employees and guests!`,
                de: `Akmerkez erhielt das von TSE ausgestellte COVID-19 Safe Service Certificate. Wir freuen uns, unsere Hygienestandards und Vorsichtsmaßnahmen für die Sicherheit unserer Mitarbeiter und Gäste auf ein Höchstmaß gebracht zu haben!`
            },
            date: `2020-11-17 - 2022-11-17`,
            img: campaign2
        },
        "3": {
            'title': {
                tr: `İpek Hanım Çifliği`,
                en: `Ipek Hanım Farm`,
                de: `Ipek Hanım Farm`
            },
            'description': {
                tr: `Atalık tohumlarla ve doğal tarım yöntemleri ile üretilen sebze ve meyveleri, un çeşitleri, kuru bakliyatları, taptaze köy ekmekleri, süt ürünleri ve konserveleriyle İpek Hanım Çiftliği sizlerle! Sağlıklı ve doğal beslenmeye adım atmak, özlediğiniz tatlar ile buluşmak için sizi her Cuma etkinlik alanına bekliyoruz!
                `,
                en: `İpek Hanım Farm is with you with its vegetables and fruits, flour varieties, dried pulses, fresh village breads, dairy products and canned foods produced with ancestral seeds and natural farming methods! We invite you to the event area every Friday to step into a healthy and natural diet and meet the flavors you miss!`,
                de: `Die İpek Hanım Farm begleitet Sie mit Gemüse und Obst, Mehlsorten, getrockneten Hülsenfrüchten, frischem Dorfbrot, Milchprodukten und Konserven, die mit Samen der Vorfahren und natürlichen Anbaumethoden hergestellt wurden! Wir laden Sie jeden Freitag in den Veranstaltungsbereich ein, um sich gesund und natürlich zu ernähren und die Aromen kennenzulernen, die Sie vermissen!`
            },
            date: `2020-09-14 - 2021-09-16`,
            img: campaign3
        }   
    })[0];
    const [toggle, setToggle] = useState(false);

    const [selectedCampaign, setSelectedCampaign] = useState(null);
    const [modalState, setModalState] = useState(false);
    const [modal, setModal] = useState(null);

    const selectCampaignHandler = campaign => {
        setSelectedCampaign(campaign);
        setModalState(true);
    }

    const closeModalHandler = () => setModalState(false);
    
    const campaignCard = Object.entries(campaigns).map(campaign => (
        <li onClick={() => selectCampaignHandler(campaign)} key={campaign} className={classes.CampaignCard}>
            <div className={classes.CardTitle}>
                {campaign[1]['title'][props.language]}
            </div>
            <div className={classes.CardImg}>
                <img src={campaign[1].img} alt="campaign"/>
            </div>
        </li>
    ));

    // Setting Selected Campaign as a Modal to render conditionaly acording to the State of Modal.
    useEffect(() => {
        setModal(<Modal show={modalState} modalClosed={closeModalHandler} top="50px">
            <div className={classes.Modal}>
                <div className={classes.ModalTitle}>
                    {selectedCampaign ? selectedCampaign[1]['title'][props.language] : null}
                </div>
                <div className={classes.ModalContent}>
                    <div className={classes.Img}>
                        {selectedCampaign ? <img src={selectedCampaign[1].img} alt="campaign"/> : null}
                    </div>
                    <div className={classes.Text}>
                        <div className={classes.Title}>
                            {selectedCampaign ? selectedCampaign[1]['title'][props.language] : null}
                        </div>
                        <div className={classes.Date}>
                            {selectedCampaign ? selectedCampaign[1].date : null}
                        </div>
                        <div className={classes.Description}>
                            {selectedCampaign ? selectedCampaign[1]['description'][props.language] : null}
                        </div>
                    </div>
                </div>
            </div>
            
          </Modal>);
    }, [modalState]);

    const toggleButtonHandler = () => {
        setToggle(!toggle);
    }

    let campaignCards = toggle ? <ul>{campaignCard}</ul> : null;

    return (
        <React.Fragment>
            <div className={classes.CampaignsBox}>
                <button 
                    className={classes.CampaignsBtn} 
                    onClick={toggleButtonHandler}>{buttonTextContainer['button-title'][props.language]}</button>
                <div className={classes.Campaigns}>
                    {campaignCards}
                </div>
            </div>
            {modal}
        </React.Fragment>
    );
}

export default Campaigns;