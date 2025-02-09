import './section6.css';

const Section6 = () => {
    return (
        <div className="section8">
            <div className="feedbackSection-container">
                <div className="feedbackSection-header">
                    <button className="feedbackSection-btn">
                        Trader Feedback & Analysis
                    </button>
                    <h1>Our Traders L❤️ve Us</h1>
                    <header className="feedbackSection-description">
                        <p>
                            FundedMas shines with traders like you! See what real traders have to say about our best-in-class prop trading firm.
                        </p>
                    </header>
                </div>
                <div className="feedbackSection-trust">
                    <span className="feedbackSection-ratingText">Excellent</span>
                    <div className="feedbackSection-stars">
                        {[...Array(5)].map((_, idx) => (
                            <div key={idx} className="feedbackSection-star">
                                <img src="/images/star1.png" alt="Star" />
                            </div>
                        ))}
                    </div>
                    <div className="feedbackSection-ratingDetails">
                        <span className="feedbackSection-reviewCount">
                            Rated 4.5/5 based on 21,668 reviews on
                        </span>
                        <span className="feedbackSection-trustLogo">
                            <img src="/images/star.png" width="20rem" alt="Trustpilot Logo" /> Trustpilot
                        </span>
                    </div>
                </div>
                <div className="feedbackSection-cardContainer">
                    {[
                        { rating: "★★★★★", title: "Great Support", text: "The Support Agent Ivy was super efficient, fast and precise in answering my questions.", user: "- Michela, 2 hours ago" },
                        { rating: "★★★★★", title: "Amazing Customer Support", text: "Fast and kind in answering all my questions.", user: "- Amit Gupta, 51 minutes ago" },
                        { rating: "★★★★★", title: "Amazing Customer Support", text: "Fast and kind in answering all my questions.", user: "- Amit Gupta, 51 minutes ago" },
                        { rating: "★★★★★", title: "Amazing Customer Support", text: "Fast and kind in answering all my questions.", user: "- Amit Gupta, 51 minutes ago" },
                        { rating: "★★★★★", title: "Amazing Customer Support", text: "Fast and kind in answering all my questions.", user: "- Amit Gupta, 51 minutes ago" },
                        { rating: "★★★★★", title: "Great Support", text: "The Support Agent Ivy was super efficient, fast and precise in answering my questions.", user: "- Michela, 2 hours ago" },
                        { rating: "★★★★★", title: "Amazing Customer Support", text: "Fast and kind in answering all my questions.", user: "- Amit Gupta, 51 minutes ago" },
                        { rating: "★★★★★", title: "Amazing Customer Support", text: "Fast and kind in answering all my questions.", user: "- Amit Gupta, 51 minutes ago" },
                        { rating: "★★★★★", title: "Amazing Customer Support", text: "Fast and kind in answering all my questions.", user: "- Amit Gupta, 51 minutes ago" },
                        { rating: "★★★★★", title: "Amazing Customer Support", text: "Fast and kind in answering all my questions.", user: "- Amit Gupta, 51 minutes ago" },
                        { rating: "★★★★★", title: "Amazing Customer Support", text: "Fast and kind in answering all my questions.", user: "- Amit Gupta, 51 minutes ago" },
                        { rating: "★★★★★", title: "Amazing Customer Support", text: "Fast and kind in answering all my questions.", user: "- Amit Gupta, 51 minutes ago" },
                    ].map((review, index) => (
                        <div key={index} className="feedbackSection-card">
                            <div className="feedbackSection-rating">{review.rating}</div>
                            <h3>{review.title}</h3>
                            <p>{review.text}</p>
                            <span className="feedbackSection-user">{review.user}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section6;
