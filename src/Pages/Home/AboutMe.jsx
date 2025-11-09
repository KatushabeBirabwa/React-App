import React from 'react';

export default function AboutMe() {
    return (
        <section id="AboutMe" className="about-section">
            <div className="about-container">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="./img/hero_img.jpg" alt="About Me" className="about-img" />
                        </div>
                        <div className="flip-card-back">
                            <h1 className="about-name">Katu Birabwa</h1>
                            <p className="about-role">Software Developer</p>
                            <p className="about-role">Security Engineer</p>
                            
                        </div>
                    </div>
                </div>

                <div className="about-description">
                    <h2 className="about-heading">About Me</h2>
                    <p className="about-text1">
Born and raised in Kampala, Uganda, I embarked on a life-changing journey when I immigrated to the United States. Coming from a small but vibrant city, I carried with me big dreams of independence, growth, and knowledge. Guided by a passion for both business and technology, I began my professional path across diverse industries gaining hands-on experience in Information Technology, data analytics, and software development.
</p><br></br>
The road was not without challenges. Adapting to a new culture, navigating unfamiliar academic systems, and balancing work with studies tested my resilience and determination. Yet, every challenge strengthened my character and deepened my appreciation for the opportunities ahead.
<br></br>

<p className="about-text2">
From the bustling streets of Kampala to the fast-paced innovation hubs of New York City, my journey has been one of growth, gratitude, and purpose. I’m thankful for the support of my family and mentors who believed in me along the way. Every step, every challenge, and every success has shaped who I am today.
</p> <br></br>

<p className="about-text3">
    Now, as I enter a new chapter, I carry forward the lessons of experience and the power of education. Driven by curiosity, purpose, and a deep passion for technology, I’m committed to creating meaningful impact and contributing to innovation that empowers others..
</p>

                </div>
            </div>
        </section>
    );
}
