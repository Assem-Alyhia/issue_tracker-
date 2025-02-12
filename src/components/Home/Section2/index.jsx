import './section2.css';

const Section2 = () => {
    return (
        <section className="highlights">
            <div className="highlights-content">
                
                <h3>Application features</h3>
                <div className="highlight-cards">
                    <div className="cardD">
                        <img src="./images/ProftShareIcon (1).svg" alt="Icon" className="card-icon" />
                        <h4>User Management</h4>
                        <p>Register: Create a new account by entering your email and password and verifying the validity of the entries.

Login: Access the account using your email and password.

Token Verification: Confirm the user's validity before performing sensitive operations</p>
                    </div>
                    <div className="cardD">
                        <img src="./images/balanceIcon.svg" alt="Icon" className="card-icon" />
                        <h4>Issues Management</h4>
                        <p>View Issues: List all issues with details such as title, status, creation and closing times.

Add a new issue: Fill out a form containing title, description, status, and an image.

Edit an issue: Edit the issue details such as title, description, and status.

Delete an issue: Confirm the deletion process before executing it.

Filter issues: Ability to filter issues by status (open, in process, closed).</p>
                    </div>
                    <div className="cardD">
                        <img src="./images/news-trading.svg" alt="Icon" className="card-icon" />
                        <h4>Design & UI</h4>
                        <p>Issue Cards: Display issues in a convenient layout that includes title, status, and creation time.

Responsive Design: The app is compatible with all screen sizes.

Dark & ​​Light Theme: Ability to switch between the two modes.

Animations: Improve user experience using CSS Animations and Framer Motion.</p>
                    </div>
                    <div className="cardD">
                        <img src="./images/reset-popup.svg" alt="Icon" className="card-icon" />
                        <h4>API Interaction</h4>
                        <p>Integrate with API to perform login, add, edit, and delete issues..</p>
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