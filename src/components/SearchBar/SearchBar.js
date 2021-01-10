import React, { useState, useEffect, useRef } from 'react';

import classes from './SearchBar.module.css';

const SearchBar = props => {
    const floor0shops = useState([`Decathlon`, `BG Store`, `Mark&Spencer`, `Jacadi`, `Nezih Kırtasiye`, `Givin Store`, `Carter's`, `Joker`, `Pet Shop`, `Kids Story`, `Toyz Shop`, `Garanti Bankası`, `Mutlu Mikrop`, `Zwilling`, `D&R`, `Home Store`, `Porland`, `Turkcell`, `Anahtarcı`, `Agatha`, `Swarowski`, `Damla Kız`, `Atasun`, `Chakra`, `Vakko Home`, `Lipa`, `Tefal`, `Calzedonia`, `Sirmaison`, `Yücel Kuyumculuk`, `Diamond`, `Alexandra Home`, `Enplus`, `Altın Yatak`, `Madame Coco`, `Arçelik`, `Vodafone`, `Philips`, `Kifidis`, `Tobacco`, `Net Elektronik`, `Moc Cafe`, `Opal Optik`, `Akbank`, `S Cafe-F0`, `Samsung`, `Magic Play`, `Gaggenau`, `Turan Babataş`, `Şevker Ertürkmen`, `ETS`, `Siemens`
    ])[0];
    const floor1shops = useState([`Vakkorama`, `Silk&Cashmere`, `Happy Moon's Icon`, `Yargıcı`, `S Cafe-F1`, `Vakko`, `Sait Koç`, `Hemington`, `Armani Jeans`, `Bee Goddess`, `Rolex`, `Hugo Boss`, `Bluemint`, `Zen`, `Nike` , `Divarese`, `Massimo Dutti-F1`, `Network`, `W Collection Bayan`, `New Balance`, `Desa`, `Mapa`, `Damat`, `W Collection Bay`, `Eczane`, `Starbucks`, `Midpoint`, `Saat&Saat`, `Paşabahçe`, `Remzi Kitapevi`, `Papermoon`])[0];
    const floor2shops = useState([`Mavi Jeans`, `Beymen Club`, `Gratis`, `Sephora`, `Adidas`, `Massimo Dutti-F2`, `Zara`, `Pereja`, `SPX`, `Oysho`, `Aqua Verde`, `Butterfly`, `Sport Works`, `Accessorize`, `Zara Home`, `Vetrina`, `Mudo`, `Selamlique`, `Samsonite`, `Mendos`, `Penti`, `Intimissimi`, `Roman`, `Mango`, `GAP`, `Masterpiece`, `Macrocenter`])[0];
    const floor3shops = useState([`Mars Athletic Club`, `Bite`, `Argo`, `Sushico`, `Beauty Me`, `Bursa Kebap Evi`, `Otantik Kumpir`, `Green Salad`, `Sosa`, `Popeyes`, `Arby's`, `Burger King`, `Dore Music`])[0];
    const allShops = floor0shops.concat(floor1shops).concat(floor2shops).concat(floor3shops);
    const shopsContainer = useState(allShops)[0];

    const placeHolderContainer = useState({
        'place-holder': {tr: 'Mağaza ara', en: 'Search for shops', de: 'Suche nach geschäften'}
    })[0];
    const shopInfoContainer = useState({
        'shop-info': {tr: {
                        0: `, Kat/0'da`,
                        1: `, Kat/1'de`,
                        2: `, Kat/2'de`,
                        3: `,Kat/3'de`
                      },
                      en: {
                        0: ` is at Floor/0`,
                        1: ` is at Floor/1`,
                        2: ` is at Floor/2`,
                        3: ` is at Floor/3`
                      },
                      de: {
                        0: ` ist auf Etage-0`,
                        1: ` ist auf Etage-1`,
                        2: ` ist auf Etage-2`,
                        3: ` ist auf Etage-3`
                      }
        }
    })[0];
    
    const [shopsDropdown, setShopsDropdown] = useState(null);
    const [optionsState, setOptionsState] = useState(false);
    const [selectedShop, setSelectedShop] = useState('');
    const [shopInfo, setShopInfo] = useState('');

    const [enteredFilter, setEnteredFilter] = useState('');
    const inputRef = useRef();

    // Filter functionality of search bar.
    useEffect(() => {
        const timer = setTimeout(() => {
            if (enteredFilter) {
                if (enteredFilter === inputRef.current.value) {
                    const searchQuery =
                        enteredFilter.length === 0
                            ? ''
                            : enteredFilter;
                    if (shopsContainer.includes(searchQuery)) {
                        setShopsDropdown(
                            <div className={classes.Options}>
                                <ul>
                                    <li key={searchQuery} onClick={() => selectedShopHandler(searchQuery)}>{searchQuery}
                                    </li>
                                </ul>
                            </div>
                        )
                    }              
                }
            }
            return () => {
                clearTimeout(timer);
            }
        }, 500);
    }, [enteredFilter, inputRef]);

    // Rendering shop options of input field.
    useEffect(() => {
        const shops = shopsContainer.map(shop => {
            return (
                <li key={shop} onClick={() => selectedShopHandler(shop)}>{shop}</li>
            );
        });
        setShopsDropdown(
            <div className={classes.Options}>
                <ul>{shops}</ul>
            </div>
        );
    }, [inputRef, enteredFilter]);

    // Info of shop's locations after selecting an option. (Changing acording to the language simultaneously)
    useEffect(() => {
        if (shopInfoContainer['shop-info'][props.language]) {
            if (floor0shops.includes(selectedShop)) {
                setShopInfo(`${selectedShop}${shopInfoContainer['shop-info'][props.language]['0']}`);
            } else if (floor1shops.includes(selectedShop)) {
                setShopInfo(`${selectedShop}${shopInfoContainer['shop-info'][props.language]['1']}`);   
            } else if (floor2shops.includes(selectedShop)) {
                setShopInfo(`${selectedShop}${shopInfoContainer['shop-info'][props.language]['2']}`);
            } else if (floor3shops.includes(selectedShop)) {
                setShopInfo(`${selectedShop}${shopInfoContainer['shop-info'][props.language]['3']}`);
            }
        }
    }, [selectedShop, props.language])

    const showOptionsHandler = () => {
        setOptionsState(!optionsState);
    }

    const selectedShopHandler = (selectedShop) => {
        setOptionsState(false);
        setSelectedShop(selectedShop);
    }

    let showDropdown = optionsState ? shopsDropdown : null;

    return (
        <div className={classes.SearchBar}>
            <input 
                ref={inputRef} 
                value={enteredFilter}
                onChange={event => setEnteredFilter(event.target.value)}
                onClick={showOptionsHandler}
                type="text" 
                placeholder={placeHolderContainer['place-holder'][props.language]} />
            <div className={classes.ShopInfo}>
                <span>{shopInfo}</span>
            </div>
            {showDropdown}
        </div>
    );
}

export default SearchBar;