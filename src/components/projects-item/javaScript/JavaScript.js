import todo from "../../../images/todo.png";
import phoneBook from "../../../images/phoneBook.png";
import games from "../../../images/games.png";

export const JavaScript = () => {
    return (
        <div className="main-section project-section">
            <div className="container">
                <div className="project-items">
                <div className="project-item">
                        <a href="https://yevgeniiaabashkina.github.io/to-do-list-JavaScript.io/" target="_blank" rel="noreferrer"><img className="design" src={todo} alt="todolist"/></a>
                        <div className="description">
                            <h3>created with:</h3>
                            <ul>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>JavaScript</li>
                            </ul>
                            <a href="https://github.com/YevgeniiaAbashkina/to-do-list-JavaScript.io" target="_blank" rel="noreferrer">&gt;&gt;link to github repository</a>
                        </div>
                    </div>
                    <div className="project-item">
                        <a href="https://yevgeniiaabashkina.github.io/phone_book.io/" target="_blank" rel="noreferrer"><img className="design" src={phoneBook} alt="phoneBook"/></a>
                        <div className="description">
                            <h3>created with:</h3>
                            <ul>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                            <a href="https://github.com/YevgeniiaAbashkina/phone_book.io" target="_blank" rel="noreferrer">&gt;&gt;link to github repository</a>
                        </div>
                    </div>
                    <div className="project-item">
                        <a href="https://yevgeniiaabashkina.github.io/games.github.io/" target="_blank" rel="noreferrer"><img className="design" src={games} alt="games"/></a>
                        <div className="description">
                            <h3>created with:</h3>
                            <ul>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                            <a href="https://github.com/YevgeniiaAbashkina/games.github.io" target="_blank" rel="noreferrer">&gt;&gt;link to github repository</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
