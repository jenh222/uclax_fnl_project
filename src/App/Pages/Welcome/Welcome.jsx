import React from 'react';
import '../Pages.scss';
import Slideshow from  './Slideshow/Slideshow.jsx';
import YoutubePlayer from './Youtube/Youtube.jsx';

const Welcome = () => {
    return(
        <div className ={ 'Pages Welcome'}>
            <Slideshow />
            <div className="columns">
                <div className="col col1">
                    <div className="title">Who We Are</div>
                    <p>LiveWell offers free health and wellness classes across Los Angeles County. Join a class to learn about nutrition, fitness, and lifestyle tips!</p>
                    <p>Classes are free and open to the entire community. Visit a center today and experience the support, services and resources that can help you live your healthiest life.</p>
                </div>
                <div className="col col2">
                    <img src={("../img/about/about.jpg")} alt="Welcome" style={{ width: "100%", height: "100%" }}/>
                </div>
            </div>
            <div className="columns2">
                <div className="col col3">
                    <div className="video-container">
                    <YoutubePlayer />
                    </div>
                </div>
                <div className="col col4">
                    <div className="title">7 Days of Slow Living</div>
                    <p>We all have the power to be more mindful, to allow ourselves to appreciate each and every moment by finding maximum joy in your day. </p>
                    <p>If you're always busy but wish to experience your life a little more mindfully, this video might be a great start your day.</p>
                </div>
            </div>
        </div>

    );
}

export default Welcome;