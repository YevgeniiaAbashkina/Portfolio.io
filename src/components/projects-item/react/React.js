import menuRate from "../../../images/menuRate.png";
import photoAlbums from "../../../images/photoAlbums.png";
import mealsCategory from "../../../images/mealsCategory.png";

export const React = () => {
    return (
        <div className="main-section project-section">
            <div className="container">
                <div className="project-items">
                    <div className="project-item">
                        <a href="https://yevgeniiaabashkina.github.io/FoodWithRate" target="_blank" rel="noreferrer"><img className="design" src={menuRate} alt="menuApp"/></a>
                        <div className="description">
                            <h3>App created with:</h3>
                            <ul>
                                <li>Bootstrap</li>
                                <li>React, React-dom</li>
                                <li>Api from <a href="https://www.themealdb.com/" target="_blank" rel="noreferrer">www.themealdb.com</a></li>
                            </ul>
                            <a href="https://github.com/YevgeniiaAbashkina/FoodWithRate" target="_blank" rel="noreferrer">&gt;&gt;link to github repository</a>
                        </div>
                    </div>
                    
                    <div className="project-item">
                        <a href="https://yevgeniiaabashkina.github.io/foodApiCategory/" target="_blank" rel="noreferrer"><img className="design" src={mealsCategory} alt="mealsCategoryApp"/></a>
                        <div className="description">
                            <h3>App created with:</h3>
                            <ul>
                                <li>Bootstrap</li>
                                <li>React, React-dom</li>
                                <li>React-router-dom v5.3</li>
                                <li>React Hooks (useState, useEffect)</li>
                                <li>Api from <a href="https://www.themealdb.com/" target="_blank" rel="noreferrer">www.themealdb.com</a></li>
                            </ul>
                            <a href="https://github.com/YevgeniiaAbashkina/foodApiCategory" target="_blank" rel="noreferrer">&gt;&gt;link to github repository</a>
                        </div>
                    </div>
                    <div className="project-item">
                        <a href="https://yevgeniiaabashkina.github.io/photoAlbums/" target="_blank" rel="noreferrer"><img className="design" src={photoAlbums} alt="photoAlbumsApp"/></a>
                        <div className="description">
                            <h3>created with:</h3>
                            <ul>
                                <li>Bootstrap</li>
                                <li>Bootstrap Icons</li>
                                <li>React, React-dom</li>
                                <li>React-router-dom v5.3</li>
                                <li>React Hooks (useState, useContext)</li>
                                <li>React context</li>
                            </ul>
                            <a href="https://github.com/YevgeniiaAbashkina/photoAlbums" target="_blank" rel="noreferrer">&gt;&gt;link to github repository</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}