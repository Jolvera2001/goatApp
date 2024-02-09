import { useState } from 'react';

import Introduction from "../components/landingPage/Introduction";
import Head from '../components/header'
import WhyGoat from "../components/landingPage/WhyGoat";
import AboutUs from "../components/landingPage/AboutUs";
import Footer from "../components/landingPage/Footer";
import Divider from "../components/Divider";
import Modal from "../components/landingPage/Modal";

function LandingPage() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    return(
        <div className="container">
                {/* This is for the header and Modal*/}
                <Head openModal={openModal} />
                <Modal isOpen={isOpen} closeModal={closeModal} />

                {/* This is for the introduction of our site */}
                <img src="/src/assets/GO.png" alt="Logo" className="headerLogo"></img>
                <Introduction openModal={openModal}/>

                {/* This is for the feature showcase*/}
                <WhyGoat />
                <Divider />

                {/* This is for the About us */}
                <AboutUs />
                <Footer />

        </div>
    );
}

export default LandingPage