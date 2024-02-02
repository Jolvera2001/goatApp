import PropTypes from "prop-types";

function Header({ openModal }) {
    return (
        <nav className="introHeader">
            <ul className="introHeaderLinks">
                <li><a href="#" onClick={openModal}>Login</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

Header.propTypes = {
    openModal: PropTypes.func.isRequired,
  };

export default Header