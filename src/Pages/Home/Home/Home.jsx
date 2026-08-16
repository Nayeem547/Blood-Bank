import React from 'react';
import Header from './Header';
import Card from '../Card/Card';
import BloodCompatibilityEligibility from '../../../Component/BloodCompatibilityEligibility';

const Home = () => {
    return (
        <div className="space-y-12 pb-16"> 
            <Header />
            <Card /> 
            <BloodCompatibilityEligibility />
        </div>
    );
};

export default Home;