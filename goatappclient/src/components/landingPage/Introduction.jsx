import '../../styles/App.css'
import PropTypes from "prop-types";

function Introduction({ openModal }) {
    return (
        <div className="imageContainerIntro">
            <div className='backgroundImage'></div>
            <div className='gradientLayer'></div>
            <div className="card">
                <h2>Keep Connections on the Hilltop Simple</h2>
                <p><b>GOat Places</b> is a simple and fast way to share campus experiences with friends. 
                    Whether you want to create them or simply let others know, this is the place to be!</p>
                <button onClick={openModal}>Join the Hilltop!</button>
            </div>
        </div>
    );
}

Introduction.propTypes = {
    openModal: PropTypes.func.isRequired,
}

export default Introduction