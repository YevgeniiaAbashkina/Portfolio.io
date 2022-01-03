import cv from "../../images/cv.png";
import { Animated } from "react-animated-css";
import "./cv.css";

export const Cv = () => {
    return (
            <div className="main-section-cv">
                <div className="container">
                    <a className="to-pdf" href="https://drive.google.com/file/d/1X2QGem3vvrfx5lU7Jo0ppKlaOhlHQKBI/view?usp=sharing" target="_blank" rel="noreferrer">save as PDF</a>
                    <a href=" https://yevgeniiaabashkina.github.io/CV_for_Portfolio/" target="_blank" rel="noreferrer">
                        <Animated animationIn="zoomOut"animationOutDelay={500} isVisible={false}>
                            <img className="cv-image" src={cv} alt="cv"/>
                        </Animated>
                    </a>
                </div>
            </div>
    )
}