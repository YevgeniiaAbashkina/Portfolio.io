import robots from "../../../images/robots.png";
import design from "../../../images/design.png";
import elegant from "../../../images/elegant.png";
import tinyone from "../../../images/tinyone.png";
import recipes from "../../../images/recipes.png";
import "./htmlCss.css";

export const HtmlCss = () => {
    return (
        <div className="main-section project-section">
            <div className="container">
                <div className="project-items">
                <div className="project-item">
                        <a href="https://yevgeniiaabashkina.github.io/elegant.github.io/" target="_blank" rel="noreferrer"><img className="design" src={elegant} alt="elegant"/></a>
                        <div className="description">
                            <h3>page created with:</h3>
                            <ul>
                                <li>HTML and CSS /grid</li>
                                <li>Google Fonts, Font Awesome</li>
                                <li>Animate.css</li>
                                <li>Bootstrap</li>
                                <li>CSS @media Rule</li>
                                <li>mobile adaptive</li>
                            </ul>
                            <a href="https://github.com/YevgeniiaAbashkina/elegant.github.io" target="_blank" rel="noreferrer">&gt;&gt;link to github repository</a>
                        </div>
                    </div>
                    <div className="project-item">
                        <a href="https://yevgeniiaabashkina.github.io/tinyone.github.io/" target="_blank" rel="noreferrer"><img className="design" src={tinyone} alt="tinyone"/></a>
                        <div className="description">
                            <h3>page created with:</h3>
                            <ul>
                                <li>HTML and CSS</li>
                                <li>Google Fonts</li>
                                <li>Animate.css</li>
                                <li>Bootstrap</li>
                                <li>Font Awesome Icons</li>
                                <li>mobile adaptive</li>
                            </ul>
                            <a href="https://github.com/YevgeniiaAbashkina/tinyone.github.io/" target="_blank" rel="noreferrer">&gt;&gt;link to github repository</a>
                        </div>
                    </div>
                    <div className="project-item">
                        <a href="https://yevgeniiaabashkina.github.io/recipes.github.io/" target="_blank" rel="noreferrer"><img className="design" src={recipes} alt="recipes"/></a>
                        <div className="description">
                            <h3>page created with:</h3>
                            <ul>
                                <li>HTML and CSS /The position Property, flex-box</li>
                                <li>Google Fonts</li>
                                <li>Animate.css</li>
                                <li>@keyframes</li>
                                <li>CSS @media Rule</li>
                                <li>mobile adaptive</li>
                            </ul>
                            <a href="https://github.com/YevgeniiaAbashkina/recipes.github.io" target="_blank" rel="noreferrer">&gt;&gt;link to github repository</a>
                        </div>
                    </div>
                    <div className="project-item">
                        <a href="https://yevgeniiaabashkina.github.io/design.github.io/" target="_blank" rel="noreferrer"><img className="design" src={design} alt="design"/></a>
                        <div className="description">
                            <h3>page created with:</h3>
                            <ul>
                                <li>HTML and CSS Layout: <br/>The position Property, z-index </li>
                            </ul>
                            <a href="https://github.com/YevgeniiaAbashkina/design.github.io" target="_blank" rel="noreferrer"> &gt;&gt;link to github repository</a>
                        </div>
                    </div>

                    <div className="project-item">
                        <a href="https://yevgeniiaabashkina.github.io/robots.github.io/" target="_blank" rel="noreferrer"><img className="design" src={robots} alt="robots"/></a>
                        <div className="description">
                            <h3>page created with:</h3>
                            <ul>
                                <li>HTML and CSS Layout: <br/>The position Property, float </li>
                            </ul>
                            <a href="https://github.com/YevgeniiaAbashkina/robots.github.io/" target="_blank" rel="noreferrer">&gt;&gt;link to github repository</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}