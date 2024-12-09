import React from 'react';
import Banner from '../Banner/Banner';
import RunningCampaign from '../RunningCampaign/RunningCampaign';
import Newsletter from '../Newslatter/Neslater';
import HowWeWork from './../HowWE';

const Home = () => {
    return (
        <div>
            {/* banner section */}
            <Banner/>
            {/* RunningCampaign */}
            <RunningCampaign/>
            {/* extra two section */}
           
            <section><HowWeWork/></section>
            <section><Newsletter/></section>
            {/*  */}
        
        </div>
    );
};

export default Home;