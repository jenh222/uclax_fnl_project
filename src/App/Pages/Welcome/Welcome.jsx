import React from 'react';
import '../Pages.scss';
import Slideshow from  './Slideshow/Slideshow.jsx';

const Welcome = () => {
    return(
        <div className ={ 'Pages Welcome'}>
            <Slideshow />
            <div className="columns">
                <div className="col col1">
                    <div className="title">TITLE HERE</div>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                </div>
                <div className="col col2">
                    <img src={("../img/about/about.jpg")} alt="Welcome" style={{ width: "100%", height: "100%" }}/>
                </div>
            </div>
            <div className="columns">
            <div className="col col2">
                <iframe title="7 Days of Slow Living" width="100%" height="330px" src="https://www.youtube.com/embed/y2PL4gNffBI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="col col1">
                    <div className="title">7 Days of Slow Living</div>
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                </div>
            </div>
        </div>

    );
}

export default Welcome;