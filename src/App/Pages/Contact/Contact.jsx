import React from 'react';
import '../Pages.scss';
//import './Contact.scss';

//import ContactForm from './ContactForm/ContactForm.jsx';
import GoogleMap from './GoogleMap/GoogleMap.jsx';


const Contact = () => {
    return(
        <div className ={ 'Pages Contact'}>
            <div className="row row1">
                <div className="column column1">
                    <img src={("../img/contact/contact.jpg")} alt="Contact" style={{ width: "100%", height: "100%" }}/>
                </div>
                <div className="columns">
                <div className="col col1">
                    <div className="title">Contact Us</div>
                        <p>3109 West Duirland Place Los Angeles, CA 90760</p>
                        <p><b>Phone:</b> 123.456.7890</p>   
                        <p><b>Email:</b> <a href="mailto:contact@livewell.com?Subject=Hello" target="_top">contact@livewell.com</a></p>             
                    </div>
                <div className="col col2">
                    <img src={("../img/contact/contact-1.jpg")} alt="about" style={{ width: "100%", height: "100%" }}/>
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