import React from 'react';
import '../Pages.scss';
//import './Contact.scss';
import Slideshow from  '../Welcome/Slideshow/Slideshow.jsx';
import Tabbed from '../Welcome/Tabbed/Tabbed.jsx';

//import ContactForm from './ContactForm/ContactForm.jsx';
import GoogleMap from './GoogleMap/GoogleMap.jsx';


const Contact = () => {
    return(
        <div className ={ 'Pages Contact'}>
            <div className="row row1">
                <div className="column column1">
                    <Slideshow />
                </div>
                <div className="columns">
                <div className="col col1">
                    <div className="title">Visit Us</div>
                        <Tabbed />                
                    </div>
                <div className="col col2">
                    <img src={("../img/about/about.jpg")} alt="about" style={{ width: "100%", height: "100%" }}/>
                </div>
            </div>
            </div>
            <div className="row row2">
                <GoogleMap />
            </div>
        </div>
    );
}

export default Contact;