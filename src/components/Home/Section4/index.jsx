import './section4.css';
import Cookies from 'js-cookie';

const Section4 = () => {
    return (
        <div className="traderSectionContainer">
            <div className="traderSection">
                <div className="traderCard traderStarryBackground">
                    <canvas id="traderStarsCanvas"></canvas>
                    <div className="traderContent">
                        <h2>Empowering Traders in 195+ Countries</h2>
                        <div className="traderInfo">
                            <div
                                style={{
                                    paddingLeft: "0.7rem",
                                    ...(Cookies.get('i18next') === 'en'
                                        ? { borderLeft: "4px solid #8b55ff", borderRight: 'none' }
                                        : { borderRight: "4px solid #8b55ff", borderLeft: 'none' })
                                }}
                            >
                                <span className="traderHighlight">$95M+</span>
                                <p>Total Rewards</p>
                            </div>
                            <div
                                style={{
                                    paddingLeft: "0.7rem",
                                    ...(Cookies.get('i18next') === 'en'
                                        ? { borderLeft: "4px solid #0167e0", borderRight: 'none' }
                                        : { borderRight: "4px solid #0167e0", borderLeft: 'none' })
                                }}
                            >
                                <span className="traderHighlight">97k+</span>
                                <p>Traders</p>
                            </div>
                            <div
                                style={{
                                    paddingLeft: "0.7rem",
                                    ...(Cookies.get('i18next') === 'en'
                                        ? { borderLeft: "4px solid #d40140", borderRight: 'none' }
                                        : { borderRight: "4px solid #d40140", borderLeft: 'none' })
                                }}
                            >
                                <span className="traderHighlight">5hrs</span>
                                <p>Avg Reward Time</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="traderCard traderCommunityCard">
                    <img src="/images/B1.png" alt="FundedNext Community" />
                    <h2>FundedMas Community</h2>
                    <p className="traderTextHighlight">Serving over 700,000+ members</p>
                    <div className="traderIcons">
                        <img src="/images/B3.png" width="40rem" alt="" />
                        <img src="/images/B4.png" width="40rem" alt="" />
                        <img src="/images/B5.png" width="40rem" alt="" />
                        <img src="/images/B6.png" width="40rem" alt="" />
                    </div>
                </div>
                <div className="traderCard traderSupportCard">
                    <img src="./images/B2.png" alt="24/7 Pro Support" />
                    <h2>24/7 Pro Support</h2>
                    <p className="traderTextHighlight">
                        With a 50-second average response time, were a prop trading firm that truly cares about our traders.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Section4;
