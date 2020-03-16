import React from 'react';
import './Tabbed.scss';
import { useState } from 'react';

const tabItems = [
    {
        title: 'Classes at LiveWell',
        text: 'All classes are free and open to the entire community. Visit a center today and experience the support, services and resources that can help you live your healthiest life. Class schedules are updated daily and subject to change.',
    },
    {
        title: 'Questions regarding classes',
        text: 'If you have questions directly related to wellness, call us at 123.456.7890.',
    },
];

const Tabbed = () => {

    //State managed
    const [currentTab, setCurrentTab] = useState(tabItems[0]);

    const isAbout = (currentTab.title === 'Classes at LiveWell') ? 'tab active':'tab';
    const isContact = (currentTab.title === 'Questions regarding classes') ? 'tab active':'tab';

    return (
<div className={ 'Tabbed' }>
        <div className ="tabs">
            <div onClick={ () => {setCurrentTab(tabItems[0]) } }className={ isAbout }>About</div>
            <div onClick={ () => {setCurrentTab(tabItems[1]) } }className={ isContact }>Contact</div>
        </div>

        <div className="content">

            <h2>{ currentTab.title }</h2>
            <p>{ currentTab.text }</p>
        </div>
</div>

    )
}

export default Tabbed;