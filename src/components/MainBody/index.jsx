import React from 'react';
import "./MainBody.css";

import footImage from "./mainBodyImages/foot.jpg";
import owlImage from "./mainBodyImages/owl.jpg";
import egretImage from "./mainBodyImages/egret.jpg";


const index = () => {
  return (
    <div className='main-body'>
        <div id='first-section'>
            <h2>WELCOME TO A NATURAL, HOLISTIC APPROACH TO HEALTH AND WELLNESS.</h2>
            <p>Whether you’re interested in preventative health care or treatment for an existing condition, reflexolo-chi™ alone, or combined with other innovative therapies, is ideal if you:</p>
            <p>I invite you to experience a unique blend of gentle and relaxing therapies designed to break the cycle of chronic pain and disease.  They can reawaken your body’s innate ability to heal without harmful side effects, regardless of your age or how long you’ve experienced the discomfort.</p>
            <ul>
                <li>prefer a natural, holistic approach to disease treatment and prevention</li>
                <li>have had little or no relief from other treatments</li>
                <li>prefer not taking prescription medications</li>
                <li>want to be actively involved in your own healing</li>
                <li>value learning practical self-care techniques to achieve and maintain optimal health</li>
                <li>believe that your thoughts, beliefs and attitudes contribute to stress and disease - or can be redirected to heal those disorders</li>
                <li>are ready to break free from unhealthy habits that are holding you back from living life to the fullest</li>
            </ul>
        </div>
        <div id='second-section'>
            <div id='first-column'>
                <img className='main-body-image' src={footImage} alt="foot-picture" />
                <h2>ABOUT REFLEXOLO-CHI™</h2>
                <p>This soothing variation of the traditional reflexology foot massage alleviates tension and pain associated with many ailments, leaving your whole body feeling relaxed and rejuvenated! These gentle treatments can be used to maintain optimal health or to alleviate disease.</p>
                <p className='learn-more'>Learn More</p>
            </div>
            <div id='second-column'>
                <img className='main-body-image' src={owlImage} alt="owl-picture" />
                <h2>UPCOMING CLASSES</h2>
                <p>Hands-on reflexolo-chi™ workshops are a fun and engaging way to learn the basic skills of a reflexolo-chi™ massage. A more comprehensive reflexolo-chi™ certification program is offered for those who are interested in practicing professionally.</p>
                <p className='learn-more'>Learn More</p>
            </div>
            <div id='third-column'>
                <img className='main-body-image' src={egretImage} alt="egret-picture" />
                <h2>LIMITING BELIEFS</h2>
                <p>Certain beliefs and teachings that have been passed along for generations contribute to fear, guilt, shame, low self-esteem, judgment, worry, self-doubt, stress and even disease. Learn a rapid way to silence your inner critic, let go of dysfunctional beliefs, and break vicious cycles in your relationships.</p>
                <p className='learn-more'>Learn More</p>
            </div>
        </div>
    </div>
  )
}

export default index
