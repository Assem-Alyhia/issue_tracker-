import './section7.css';
import { useEffect } from 'react';

const Section7 = () => {
    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll('.globalSection-card');
            cards.forEach(card => {
                const cardPosition = card.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                if (cardPosition < screenPosition) {
                    if (!card.querySelector('.border-animation')) {
                        const border = document.createElement('div');
                        border.classList.add('border-animation');
                        card.appendChild(border);
                    }
                } else {
                    const border = card.querySelector('.border-animation');
                    if (border) border.remove();
                }
            });
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="section9">
            <div className="globalSection-container">
                <div className="card1">
                    <div className="globalSection-card" id="globalSection-card1">
                        <h2 className="globalSection-title">Global Events</h2>
                        <p className="globalSection-paragraph" style={{ color: '#fff' }}>
                            Dive into FundedMas global events, where trading enthusiasts connect, engage, and grow. We’re more than the best prop firm, we’re a community of new and experienced traders committed to learning, growing, and finding success.
                        </p>
                        <a href="#">Learn more</a>
                    </div>
                </div>
                <div className="card1">
                    <div className="globalSection-container globalSection-container2">
                        <div className="globalSection-card" id="globalSection-card2">
                            <div className="globalSection-par">
                                <h2 className="globalSection-title h2" style={{ fontSize: "3rem" }}>
                                    Collaborative Venture Powered by Expertise
                                </h2>
                                <p className="globalSection-paragraph2" style={{ color: '#fff' }}>
                                    Take a tour and step inside our dynamic workspace, and experience the place where the magic happens for prop traders around the world.
                                </p>
                                <div className="globalSection-stats">
                                    <div style={{ borderLeft: "4px solid #8b55ff", textAlign: 'center' }}>
                                        <span className="globalSection-highlight">$95M+</span>
                                        <p>Total Rewards</p>
                                    </div>
                                    <div style={{ borderLeft: "4px solid #0167e0", textAlign: 'center' }}>
                                        <span className="globalSection-highlight">97k+</span>
                                        <p>Traders</p>
                                    </div>
                                    <div style={{ borderLeft: "4px solid #d40140", textAlign: 'center' }}>
                                        <span className="globalSection-highlight">5hrs</span>
                                        <p>Avg. Reward Time</p>
                                    </div>
                                </div>
                            </div>
                            <div className="globalSection-img">
                                <img src="./images/E1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="globalSection-bottomText">
                    <h2>Trade Smart & Win</h2>
                    <p style={{ color: '#fff' }}>
                        Join FundedMas today and experience a trading community unlike any other.
                    </p>
                    <div className='btn'>
                        <div className="btnBlockS7">
                            <div className="buttonContainerS7">
                                <button className="buttonFree buttonFree2">Join Discord Community</button>
                                <div className="animatedBackground"></div>
                                <div className="innerBlurEffect"></div>
                            </div>
                        </div>
                        <div className="btnBlockS7">
                            <div className="buttonContainerS7">
                                <button className="buttonFree buttonFree2">Join X Community</button>
                                <div className="animatedBackground"></div>
                                <div className="innerBlurEffect"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section7;
