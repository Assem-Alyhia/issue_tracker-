import './section3.css';

const Section3 = () => {
    return (
        <div className="homeContainer">
            <div className="fundedContainer">
                <header className="fundedHeader">
                    <span className="fundedTagline">Why FundedMas</span>
                    <h1>Trade with the Most Reliable Prop Firm</h1>
                    <p>Accurate | Fast | Stable | Trustworthy</p>
                </header>
                <div className="fundedFeatures">
                    <div className="fundedLeftSide">
                        <div className="fundedFeatureBox fundedPurpleBox">
                            <h2 style={{ display:'flex' }}>Guaranteed Payouts</h2>
                            <p>Get paid in 24 hours or we pay $1,000 extra.</p>
                        </div>
                        <div className="fundedFeatureBox fundedBlueBox">
                            <h2 style={{ display:'flex' }}>Best Trading Conditions</h2>
                            <ul>
                                <li>Raw Spreads</li>
                                <li>Guaranteed payouts within 24 hours</li>
                                <li>Low commissions</li>
                            </ul>
                        </div>
                    </div>
                    <div className="fundedRightSide">
                        <div className="fundedFeatureBox fundedPurpleBox">
                            <h3>〽️ Your Choice!</h3>
                            <h1>Best Trading Platforms</h1>
                            <h2>Trade on MT4, MT5 & cTrader platforms</h2>
                            <p>Our MQ licenses and advanced in-house technology ensure enhanced experience, security, and efficiency.</p>
                        </div>
                        <div className="fundedImage">
                            <img src="./images/A3.webp" alt="Trading Platform" />
                        </div>
                    </div>
                </div>
                <div className="fundedPar">
                    <p className="fundedPar1">FundedMas Community & Support</p>
                    <p className="fundedPar2">..................................................................</p>
                </div>
            </div>
        </div>
    );
};

export default Section3;
