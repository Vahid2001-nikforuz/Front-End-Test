import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./component/App";
import BlueBoxCreated from './component/blueboxcreated';
import BoxCreated from "./component/boxcreated";
import Heading from "./component/heading";
import Input from './component/input';
import SmallBoxCreated from './component/smallboxcreated';
import Time from "./component/time"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
        <Time />
        <Heading text="A full stack of solutions at every step of influencer marketing workflow:" />
        <App />
        <p className="paragtow">ANALYTICAL REPORTS</p>
        <Heading text="Get a best-in-class analytical report of any Instagram, YouTube, TikTok, Twitter or Twitch account" />

        <Input />
        <Heading text="Example reports:" />
        <SmallBoxCreated />
        <p className="underSmall">Check 1,000+ more free top influencer’s reports in Top Ratings or  Check my account for free</p>

        <Heading text="We deliver industry standard data & insights for success in Influencer marketing:" />
        <BlueBoxCreated />
        <Heading text="Use HypeAuditor on every step of Influencer marketing workflow & analytics:" />
        <BoxCreated />
        <Heading text="Join 750,000+ influencers and businessesusing HypeAuditor today:" />



    </div>
);




