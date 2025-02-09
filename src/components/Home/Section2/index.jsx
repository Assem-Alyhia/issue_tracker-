import './section2.css';

const Section2 = () => {
    return (
        <section className="highlights">
            <div className="highlights-content">
                <h2>
                    <button className="highlight-button">Key Highlights</button>
                </h2>
                <h3>Maximize Your Trading Success with FundedMas</h3>
                <div className="highlight-cards">
                    <div className="cardD">
                        <img src="./images/ProftShareIcon (1).svg" alt="Icon" className="card-icon" />
                        <h4>15% Profit Share in Challenge Phase</h4>
                        <p>FundedMas is the only trading prop firm that offers a 15% profit share from the Challenge Phase profits, so you can start earning immediately.</p>
                    </div>
                    <div className="cardD">
                        <img src="./images/balanceIcon.svg" alt="Icon" className="card-icon" />
                        <h4>Balance-Based Drawdown</h4>
                        <p>FundedMas offers a balance-based drawdown, ensuring traders can hold their trades tension-free.</p>
                    </div>
                    <div className="cardD">
                        <img src="./images/news-trading.svg" alt="Icon" className="card-icon" />
                        <h4>News Trading</h4>
                        <p>FundedMas allows news trading so you can quickly make profits by utilizing big market movements when a high-impact news is announced.</p>
                    </div>
                    <div className="cardD">
                        <img src="./images/reset-popup.svg" alt="Icon" className="card-icon" />
                        <h4>Reset & Topup</h4>
                        <p>Reset or top-up your account to restart your trading journey, even if you’ve violated any rules.</p>
                    </div>
                    <div className="cardD">
                        <img src="./images/monthly-competition.svg" alt="Icon" className="card-icon" />
                        <h4>Monthly Competition</h4>
                        <p>FundedMas hosts free monthly competitions where you can compete for exclusive rewards.</p>
                    </div>
                </div>
            </div>
            <div className="highlights-image">
                <img src="./images/Screenshot 2024-11-02 185115.png" alt="Trading Image" />
            </div>
        </section>
    );
};

export default Section2;
