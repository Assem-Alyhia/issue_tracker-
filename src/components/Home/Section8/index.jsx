import { useState } from 'react';
import './section8.css';

const Section8 = () => {
    const [selectedPlan, setSelectedPlan] = useState('Stellar');

    const plans = [
        { id: 1, name: 'Stellar', account_size: '$50,000', acquire_plan: '10%', annual_profit_yield: '8%', max_withdrawal_limit: '$25,000', profit_deduction: '5%', plan_duration: '12 months', status: 'Active' },
        { id: 2, name: 'Stellar Lite', account_size: '$25,000', acquire_plan: '12%', annual_profit_yield: '7%', max_withdrawal_limit: '$12,500', profit_deduction: '4%', plan_duration: '6 months', status: 'Active' },
        { id: 3, name: 'Evaluation', account_size: '$10,000', acquire_plan: '15%', annual_profit_yield: '6%', max_withdrawal_limit: '$5,000', profit_deduction: '3%', plan_duration: '3 months', status: 'Active' },
        { id: 4, name: 'Express', account_size: '$5,000', acquire_plan: '20%', annual_profit_yield: '5%', max_withdrawal_limit: '$2,500', profit_deduction: '2%', plan_duration: '1 month', status: 'Active' },
    ];

    const handlePlanChange = (plan) => {
        setSelectedPlan(plan);
    };

    const selectedData = plans.find(plan => plan.name === selectedPlan);

    return (
        <div className="sectionTableHome">
            <div className="pricingTable-container">
                <div className="pricingTable-header">
                    <h1>Choose the Best Plan</h1>
                    <div className="pricingTable-list">
                        {plans.map((plan) => (
                            <button
                                key={plan.id}
                                className={`pricingTable-btn ${selectedPlan === plan.name ? 'selected' : ''}`}
                                onClick={() => handlePlanChange(plan.name)}
                            >
                                <img src={`./images/D${plan.id}.png`} width="30%" alt="" />{plan.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="pricingTable-content">
                    <div className="pricingTable-tableWrapper">
                        <table>
                            <tbody>
                                <tr><td>Account Size</td><td>{selectedData.account_size}</td></tr>
                                <tr><td>Profit Target</td><td>{selectedData.acquire_plan}</td></tr>
                                <tr><td>Maximum Daily Loss</td><td>{selectedData.annual_profit_yield}</td></tr>
                                <tr><td>Maximum Overall Loss</td><td>{selectedData.max_withdrawal_limit}</td></tr>
                                <tr><td>Balance Based Drawdown</td><td>{selectedData.profit_deduction}</td></tr>
                                <tr><td>Minimum Trading</td><td>{selectedData.plan_duration}</td></tr>
                                <tr><td>Profit Split Upto</td><td>{selectedData.status}</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="pricingTable-footer">
                    <div className="pricingTable-addonInfo">
                        <p className="pricingTable-addonTitle">Add-ons for {selectedPlan}</p>
                        <p>● Lifetime Payout 95%</p>
                        <p>● 150% Reward</p>
                        <p>● Double Up</p>
                        <p>● No Minimum Trading Days</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section8;
