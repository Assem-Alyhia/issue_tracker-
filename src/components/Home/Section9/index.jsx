import './section9.css';

const Section9 = () => {
    return (
        <section className="stars-talk">
            <div style={{ display:'flex', justifyContent:'space-evenly', alignItems:'center' }}>
                <div className="stars-content">
                    <h2>
                        <button className="highlight-button">Stars Talk</button>
                    </h2>
                    <h2>
                        Icons <br />
                        Around <br />
                        the World
                    </h2>
                    <p>
                        Global leaders are cheering for and <br />
                        supporting FundedMas. Now, it is <br />
                        your turn to be a part of the best <br />
                        trading challenge.
                    </p>
                </div>
                <div className="stars-cards">
                    <div className="star-card">
                        <img src="./images/colin.webp" alt="Colin Munro" />
                        <button className="play-button"></button>
                        <p>Join FundedMas and gain BIG, just like I hit BIG sixes!</p>
                        <em>Colin Munro, <span>Cricketer</span></em>
                    </div>
                    <div className="star-card">
                        <img src="./images/martinez.webp" alt="Emi Martinez" />
                        <button className="play-button"></button>
                        <p>Passion takes you to glory</p>
                        <em>Emi Martinez, <span>Footballer</span></em>
                    </div>
                    <div className="star-card">
                        <img src="./images/christ_gayle.webp" alt="Chris Gayle" />
                        <button className="play-button"></button>
                        <p>Never give up, is something you should look into</p>
                        <em>Chris Gayle, <span>Cricketer</span></em>
                    </div>
                </div>
            </div>
            <div className="comparison-section" style={{ marginTop:'200px' }}>
                <div className="comparison-header">
                    <h2>
                        <button className="highlight-button">Compare Markets</button>
                    </h2>
                    <h2>Why Choose FundedMas</h2>
                    <p>
                        Explore the features that make FundedMas stand out from <br />
                        so many other trading prop firms.
                    </p>
                </div>
                <div className="comparison-table">
                    <div className="table-row table-header">
                        <div className="table-cell" style={{ fontWeight: "lighter", fontSize: "14px", color: "#737081", borderRight: "none" }}>
                            VARIABLES
                        </div>
                        <div className="table-cell"><img src="./images/ProftShareIcon.svg" alt="" /></div>
                        <div className="table-cell"><img src="./images/2.svg" alt="" /></div>
                        <div className="table-cell"><img src="./images/4.svg" alt="" /></div>
                        <div className="table-cell"><img src="./images/3.svg" alt="" /></div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell">Profit Share from Challenge Phase</div>
                        <div className="table-cell">15%</div>
                        <div className="table-cell">0%</div>
                        <div className="table-cell">0%</div>
                        <div className="table-cell">0%</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell">Account Profit Share</div>
                        <div className="table-cell">80% | 95% with Add-on</div>
                        <div className="table-cell">80%</div>
                        <div className="table-cell">80%</div>
                        <div className="table-cell">80%</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell">Profit Target</div>
                        <div className="table-cell">8%/5%</div>
                        <div className="table-cell">10%/5%</div>
                        <div className="table-cell">8%/5%</div>
                        <div className="table-cell">8%/5%</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell">Account Reset Option</div>
                        <div className="table-cell"><div className="check-icon">✓</div></div>
                        <div className="table-cell"><div className="error-icon">✖</div></div>
                        <div className="table-cell"><div className="error-icon">✖</div></div>
                        <div className="table-cell"><div className="error-icon">✖</div></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section9;
