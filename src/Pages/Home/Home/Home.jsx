import React from 'react';
import Card from '../Card/Card';
import Header from './Header';
import BloodCompatibilityEligibility from '../../../Component/BloodCompatibilityEligibility';


const Home = () => {
    return (
        <div> 
            <Header></Header>
            <Card></Card> 
            <> <div className='text-center text-600'> aro 2ta component add korbo
                </div> </>
            <BloodCompatibilityEligibility> </BloodCompatibilityEligibility>
        </div>
    );
};
 
export default Home;