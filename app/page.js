'use client';

import * as React from 'react';
import NavBars from "@/app/components/navBar/navBars";
import Bodyy from "@/app/components/bodys/Bodyy";
import Footers from "@/app/components/footer/footers";

export default function Home() {
    return (
        <div className="Home" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBars style={{ flexShrink: 0 }} />

            <Bodyy style={{ flex: 1 }} />

            <Footers style={{ flexShrink: 0 }} />
        </div>
    );
}

