import React from 'react';
import Banner from '../Banner/Banner';
import RunningCampaign from '../RunningCampaign/RunningCampaign';
import Newsletter from '../Newslatter/Neslater';

const Home = () => {
    return (
        <div>
            {/* banner section */}
            <Banner/>
            {/* RunningCampaign */}
            <RunningCampaign/>
            {/* extra two section */}
            <section><Newsletter/></section>
            <section></section>
            {/*  */}
        
        </div>
    );
};

export default Home;