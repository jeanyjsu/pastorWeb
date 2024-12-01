"use client";

import React, { useState } from 'react';
import NavBars from "@/app/components/navBar/navBars";
import BodyEv from "@/app/event/componentssssssss/bodyEv.js";
import Footers from "@/app/components/footer/footers";


export default function Event() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="Home" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBars style={{ flexShrink: 0 }} />

            <BodyEv isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} style={{ flexShrink: 0 }} />

            <Footers setIsLoggedIn={setIsLoggedIn} style={{ flexShrink: 0 }} />
        </div>
    );
}