import booksApp from "../../../images/booksApp.png";
import phoneBookApp from "../../../images/PhoneBookApp.png";
import infinityLove from "../../../images/InfinityLove.png";

export const ReactRedux = () => {
    return (
        <div className="main-section project-section">
            <div className="container">
                <div className="project-items">
                    <div className="project-item">
                        <a href="https://yevgeniiaabashkina.github.io/BooksApp/" target="_blank" rel="noreferrer">
                            <img className="design" src={booksApp} alt="booksApp"/>
                        </a>
                        <div className="description">
                            <h3>App created with:</h3>
                            <ul>
                                <li>Bootstrap</li>
                                <li>React</li>
                                <li>React-router-dom</li>
                                <li>Redux, Redux-logger, Redux-thunk</li>
                                <li>React-yup, React-cool-form</li>
                            </ul>
                            <a href="https://github.com/YevgeniiaAbashkina/BooksApp" target="_blank" rel="noreferrer">
                                &gt;&gt;link to github repository
                            </a>
                        </div>
                    </div>
                    <div className="project-item">
                        <a href="https://yevgeniiaabashkina.github.io/Infinity-Love/" target="_blank" rel="noreferrer">
                            <img className="design" src={infinityLove} alt="infinityLoveApp"/>
                        </a>
                        <div className="description">
                            <h3>App created with:</h3>
                            <ul>
                                <li>React</li>
                                <li>React-router-dom</li>
                                <li>Redux, Redux-toolkit</li>
                                <li>Firebase DB v9.3</li>
                            </ul>
                            <a href="https://github.com/YevgeniiaAbashkina/Infinity-Love" target="_blank" rel="noreferrer">
                                &gt;&gt;link to github repository
                            </a>
                        </div>
                    </div>
                    <div className="project-item">
                    
                    <img className="design" src={phoneBookApp} alt="phoneBookApp"/>
                        <div className="description">
                            <h3>App created with:</h3>
                            <ul>
                                <li>React</li>
                                <li>React-router-dom</li>
                                <li>Redux, Redux-toolkit</li>
                                <li>Axios</li>
                                <li>Styled Components</li>
                                <li>React-yup, React-cool-form</li>
                                <li>Api http://dev.phonebook-1.telran-edu.de <br/> <br/>unfortunately at the moment the server is no longer available, but you can familiarize yourself with the contents of the project by the <a href="https://github.com/YevgeniiaAbashkina/PhoneBook" target="_blank" rel="noreferrer">&gt;&gt;link</a></li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>            
    )
}