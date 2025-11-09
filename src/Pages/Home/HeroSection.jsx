import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

import { useState } from 'react';

export default function HeroSection() {
    const [showSocialMedia, setShowSocialMedia] = useState(false);

    const socialMediaData = {
        "Social Media": [
            { id: 3, name: "LinkedIn", link: "https://www.linkedin.com/in/katubirabwa/", icon: <FaLinkedin /> },
        ]
    };

    const handleGetInTouchClick = () => {
        setShowSocialMedia(true);
    };

    const handleSocialMediaClick = (link) => {
        window.open(link, "_blank");
    };

    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Hey, I'm Katu.</span><br />
                        <h1>Technologist</h1>
                    </h1>
                    <p className="hero--section--description">
                    Tech professional with a strong foundation in IT, software development, and business analysis. Action-oriented and skilled at bridging the gap between technology and business, effectively collaborating with technical teams, executives, and stakeholders. Known for delivering solutions that optimize processes, enhance system performance, and drive impactful results. Adaptable, collaborative, and committed to contributing to innovative, success-driven teams in the technology industry.

                    </p>
                </div>
                
            </div>

            <div className="hero--section--img">
                <img src="./img/Tech.png" alt="Hero--Section" />
            </div>

        </section>
    );
}
