import React, { useState, useEffect } from 'react';
import './Event.scss';
//import { eventCategories } from './event.js';
import API from '../../common/API.js';
import Categories from './Categories.jsx';
import EventCategories from './EventCategories.jsx';
import Tabbed from '../Welcome/Tabbed/Tabbed.jsx';
//import Staff from '../Welcome/Staff/Staff.jsx';

const Events = () => {

    const [eventCategories, setEventCategories] = useState([ ]);
    const [categories, setCategories] = useState([ ]);
    const [currCat, setCurrCat] = useState('All');
    

    useEffect(() => {
        API.get('services/gallery').then((result) => {
            console.log('Staff Server Response', result);
            setEventCategories(result.data);
        });

        API.get('services/categories').then((result) => {
            console.log('Categories Server Response', result);
            setCategories(result.data);
        });
    }, [ ]);
    
    return (
        <div className ='Event'>
            <img src={("../img/services/service.jpg")} alt="Service" style={{ width: "100%", height: "100%" }}/>
            <div className="title">March Events
                <div className="tabCategories">
                    <Categories 
                        categories={ categories } 
                        currCat={ currCat }
                        setCurrCat= {setCurrCat }
                    />
                </div>
            </div>
            
            <div className="container">
                <EventCategories eventCategories={ eventCategories } currCat={ currCat }/>
            </div>
            <div className="tabbox">
                <Tabbed />
            </div>
        </div>
    )
}

export default Events;