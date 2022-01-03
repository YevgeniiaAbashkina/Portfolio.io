import {useNavigate} from "react-router-dom";
import html_css from "../../images/html-css.png";
import js from "../../images/html-css-js.png";
import react from "../../images/React.png";
import react_redux from "../../images/react-redux.png";
import "../projects/projects.css";

export const Projects = () => {
    const navigate= useNavigate();
    return (
        <div className="main-section">
            <div className="container">
                <h1>The last of my projects using technology:</h1>
                <div className="items">
                    <div className="item"
                    onClick={()=>navigate("/projects/html-css")}>
                        <img className="html-css-img "src={html_css} alt="html-css"/>
                    </div>
                    <div className="item"
                    onClick={()=>navigate("/projects/javaScript")}>
                        <img className="js-img"src={js} alt="javaScript"/>
                    </div>
                    <div className="item item-react"
                    onClick={()=>navigate("/projects/react")}>
                        <h3>react</h3>
                        <img className="react-img"src={react} alt="react"/>
                    </div>
                    <div className="item item-react"
                    onClick={()=>navigate("/projects/react_redux")}>
                        <h3>react redux</h3>
                        <img className="react_redux-img"src={react_redux} alt="react-redux"/>
                    </div>
                </div>
            </div>
        </div>
    )
}