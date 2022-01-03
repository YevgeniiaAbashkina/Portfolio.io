import { Animated } from "react-animated-css";
import Me from "../../images/my.jpg";
import "./aboutMe.css";

export const AboutMe = () => {
    return (
        <div className="main-section">
            <div className="container about-section">
                <Animated animationIn="slideInLeft">
                    <img className="my-photo" src={Me} alt="myphoto"/>
                </Animated>
                <Animated animationIn="fadeInRight">
                    <p className="about-text">Hello!<br/> <span className="thick-text">My name is Yevheniia. <br/> I'm a beginner Frontend Developer.</span>  <br/> - Why Frontend? <br/>I am a creative person, I enjoy visualizing my work. I love logic, digging and finding more global solutions than just creating a picture as a designer. Combining creativity with logic is my vocation. In Germany, I finished one of the best International IT technology schools: Tel-Ran.de GmbH, where I got a professional degree in Fullstack Web Development and Testing. Now, I looking for a full-time position as a Web Developer or Frontend Developer in a perspective company, where I can fully use my knowledge and skills. I am open to offers and negotiations.</p>
                </Animated>
            </div>
        </div>    
    )
}