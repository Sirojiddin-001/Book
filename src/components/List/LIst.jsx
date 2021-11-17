import React from "react";

const List = () => {
    return (
        <div className="uk-width-1-3@m">
            <ul data-uk-accordion className="category-list">
                <li className="uk-open">
                    <a className="uk-accordion-title" href="#">Books</a>
                    <div className="uk-accordion-content">
                        <ul className="uk-nav uk-nav-default">
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a className="uk-accordion-title" href="#">Item 2</a>
                    <div className="uk-accordion-content">
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default List;