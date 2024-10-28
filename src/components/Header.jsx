import React from "react";
import PropTypes from 'prop-types';

function Header( {brandName, brandURL, navLinks} ) {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <a href= {brandURL} className="navbar-brand">{brandName}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        { navLinks.map((link, index) => (
                            <li className="navbar-item" key={index}>   { /* Como navLinks es un array, utilizamos una key para identificar cada li, que será el elemento único que se repite.*/}
                                <a href= {link.url} className="nav-link">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )

}

Header.propTypes = {
    brandName: PropTypes.string.isRequired,
    brandURL: PropTypes.string.isRequired,
    navLinks: PropTypes.array.isRequired,
}

export default Header;

