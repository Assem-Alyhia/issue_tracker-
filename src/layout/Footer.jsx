import { Link } from 'react-router-dom';
import './layout.css';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-column logo-section">
                        <Link to="/"><img src="./log.png" style={{ width: '6rem' }} alt="FundedMas Logo" className="logo"></img></Link>
                        <div className="social-icons">
                            <a href="#"><img src="./images/discord.svg" alt="Discord" ></img></a>
                            <a href="#"><img src="./images/youtube.svg" alt="YouTube"></img></a>
                            <a href="#"><img src="./images/twitter.svg" alt="Twitter"></img></a>
                            <a href="#"><img src="./images/facebook.svg" alt="Facebook"></img></a>
                            <a href="#"><img src="./images/instagram_footer.svg" alt="Instagram"></img></a>
                            <p>support@issuetracker.com </p>
                        </div>
                    </div>
                
                
                    <div className="footer-column education">
                        <h4>Education</h4>
                        <ul>
                            <li><a href="#">Dashboard Tour</a></li>
                            <li><a href="#">Economic Calendar</a></li>
                            <li><a href="#">Trading Firm</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-column privacy">
                        <h4>Privacy & Policy</h4>
                        <ul>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Affiliate T&C</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                            <li><a href="#">AML Policy</a></li>
                            <li><a href="#">Subscribe to newsletter</a></li>
                        </ul>
                    </div>
                
                    <div className="footer-column contact">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><a href="#">Email</a></li>
                            <li><a href="#">Live Chat</a></li>
                            <li><a href="#">Messenger</a></li>
                            <li><a href="#">Connect with us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <hr></hr>
                    <p>
                        The website https://FundedMas.com is owned and operated by GrowthNext F.Z.C. which is registered in Executive Office No. 7, AI Robotics Hub, C1 Building, AFZ, Ajman, UAE, company no.: 28831. The FundedMas-Copyright © 2024 is a registered trademark brand name owned by GrowthNext F.Z.C. Simulated trading operations are done on FundedMas trading servers operated by GrowthNext.
                    </p>
                    <p>FundedMas-Copyright © 2024</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
