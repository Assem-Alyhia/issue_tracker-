import { useState } from 'react';
import './section5.css';

const Section5 = () => {
    const [activeCard, setActiveCard] = useState(1);

    const cardsData = [
        { id: 1, name: 'Starter Plan', profit: '50' },
        { id: 2, name: 'Advanced Plan', profit: '70' },
        { id: 3, name: 'Pro Plan', profit: '90' },
        { id: 4, name: 'Pro Plan', profit: '90' }
    ];
    
    const features = {
        1: ['Basic Support', '5 Trading Instruments', 'Daily Market Updates','Daily Market Updates','Daily Market Updates'],
        2: ['Priority Support', '10 Trading Instruments', 'Advanced Market Analysis','Advanced Market Analysis','Advanced Market Analysis'],
        3: ['Dedicated Account Manager', 'All Trading Instruments', 'Custom Trading Strategies','Custom Trading Strategies','Custom Trading Strategies'],
        4: ['Dedicated Account Manager', 'All Trading Instruments', 'Custom Trading Strategies', 'Custom Trading Strategies', 'Custom Trading Strategies']
    };
    
    return (
        <div className="section7">
            <div className="fundedNextContainer">
                <button className="fundedNext-btn">Start a Challenge</button>
                <h1>FundedMas Challenges</h1>
                <div className="fundedNext-cards">
                    {cardsData.map((card, index) => (
                        <div 
                            key={card.id} 
                            className={`fundedNext-outCardShadow ${activeCard === card.id ? 'active-card' : ''}`} 
                            onClick={() => setActiveCard(card.id)}
                            style={{ background: activeCard === card.id ? 'linear-gradient(180deg, #8d1bff, #ad5bff)' : 'transparent' }}
                        > 
                            <div className="fundedNext-card">
                                <img src={`./images/C${index + 1}.png`} alt={card.name} width="50rem" style={{ margin: '0.2rem auto' }} />
                                <h2>{card.name}</h2>
                                <p>Profit Split {card.profit}%</p>
                                <hr style={{ opacity: '0.1', margin: '2rem auto', width: '90%' }} />
                                <ul>
                                    {features[card.id].map((feature, idx) => <li key={idx}>{feature}</li>)}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="fundedNext-paymentMethodsContainer">
                    <p className="fundedNext-title" style={{ color :'#ffffff' }}>AVAILABLE PAYMENT METHODS</p>
                    <div className="fundedNext-carousel" style={{ margin: 'auto' }}>
                        <div className="fundedNext-carouselTrack">
                            <div className="fundedNext-carouselItem"><img src="images/C5.png" alt="Bitcoin" /></div>
                            <div className="fundedNext-carouselItem"><img src="images/C6.png" alt="Tether" /></div>
                            <div className="fundedNext-carouselItem"><img src="images/C7.png" alt="USD Coin" /></div>
                            <div className="fundedNext-carouselItem"><img src="images/C8.png" alt="Ethereum" /></div>
                            <div className="fundedNext-carouselItem"><img src="images/C5.png" alt="Visa" /></div>
                            <div className="fundedNext-carouselItem"><img src="images/C6.png" alt="MasterCard" /></div>
                            <div className="fundedNext-carouselItem"><img src="images/C7.png" alt="PayPal" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section5;
