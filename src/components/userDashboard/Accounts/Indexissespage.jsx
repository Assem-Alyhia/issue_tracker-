import { Link } from 'react-router-dom';
import styles from './Accounts.module.css';
import { useState, useEffect } from 'react';
import { Select, MenuItem, InputLabel, FormControl, IconButton, TextField, Grid } from '@mui/material';
import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';
import IssuesPage from '../../../layout/IssuesPage';
import ColorModeSwitch from '../../ColorModeSwitch';

const Indexissespage = () => {
  const [activeStatus, setActiveStatus] = useState('Accepted');
  const [activePlan, setActivePlan] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // تم إزالة الكود الخاص بالـ API هنا
    };

    fetchData();
  }, []);

  // فلترة البيانات حسب الـ status والـ manage_plan
  const filteredData = cardsData.filter(card =>
    (activeStatus === 'All' || card.status === activeStatus) &&
    (activePlan === 'All' || card.manage_plan === activePlan) &&
    (card.id.toString().includes(searchQuery)) // بحث بالـ ID فقط
  );

  const renderContent = () => {
    if (filteredData.length === 0) {
      return (
        <div className={styles.emptyState}>
          <img
            src="/userDashboard/Accounts/notFound.png"
            alt="No Accounts"
            className={styles.emptyImage}
          />
          <p>You have no {activeStatus} accounts with {activePlan} plan</p>
        </div>
      );
    }
  
    return (
      <div className={styles.dashboardTour}>
        {filteredData.map((card) => (
          <div key={card.id} className={styles.dashboardCard}>
            <div className={styles.inCrad}>
              <div className={styles.dashboardImage}>
                <img
                  src="https://FundedNext.fra1.cdn.digitaloceanspaces.com/dashboard/default.svg"
                  alt="Demo Dashboard"
                />
              </div>
              <div className={styles.pCard}>
                <h3>
                  {card.manage_plan} | {card.account_size} | Login: <span>{card.id}</span>
                </h3>
                <div className={styles.activeAccountCard}>
                  <div className={styles.borderRight}>
                    <p style={{ fontSize: '.8rem' }}>
                      Server Type: <span style={{ textTransform: 'uppercase' }}>{card.platform}</span>
                    </p>
                    <p style={{ fontSize: '.8rem' }}>Balance: {card.account_size}</p>
                    <p style={{ fontSize: '.8rem' }}>Payment Method: {card.payment_method}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '.8rem' }}>Equity: {card.account_size}</p>
                    <p style={{ fontSize: '.8rem' }}>Account Type: {card.manage_plan}</p>
                    <p style={{ fontSize: '.8rem' }}>Mediator: {card.mediator}</p>
                    <p style={{ fontSize: '.8rem' }}>Status: {card.status}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.daBtn}>
              <Link to='/user/dashboard/dashboard/accounts/tradingOverview'>
                <button>Dashboard</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className={styles.accountHero}>
        <img
          alt="Banner image"
          decoding="async"
          sizes="100vw"
          src="/userDashboard/Accounts/hero.png"
          className={styles.bannerImage}
        />
        <div className={styles.textBlock}>
          <p className={styles.textBlockTitle}>Issues Tracker</p>
          <p className={styles.textBlockSubtitle}>
            Unlock your trading potential with FundedMas. Start trading now!
          </p>
        </div>
        <div className={styles.btnBlock}>
          <Link to="/freeTrial">
            <div className={styles.buttonContainer}>
              <button className={styles.buttonFree}>Free Trial</button>
              <div className={styles.animatedBackground}></div>
              <div className={styles.innerBlurEffect}></div>
            </div>
          </Link>
          <a href="https://FundedMas.com/plan" className={styles.startChallengeOriginal}>
            <button type="button" className={styles.createAccountBtn}>
              Start Challenge
            </button>
          </a>
        </div>
      </div>

      <div className={styles.issuesSection}>
      <IssuesPage />
    </div>

    </>
  );
};

export default Indexissespage;
