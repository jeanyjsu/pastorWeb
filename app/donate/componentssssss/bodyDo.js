"use client";

import React from "react";
import BannerImg from "@/app/donate/componentssssss/bannerimg";
import Quotes from "@/app/donate/componentssssss/quotes";

const BodyDo = () => {
    return (
        <div style={{ width: '100%', overflow: 'auto', position: 'relative', }}>

            {/* Banner */}
            <div style={{ width: '100%' }}>
                <BannerImg />
            </div>

            {/* Main body content */}
            <div style={{ position: 'relative', }}>
                <Quotes />
            </div>
        </div>

    );
};

export default BodyDo;



