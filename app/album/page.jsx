import * as React from 'react';
import NavBars from "@/app/components/navBar/navBars";
import Footers from "@/app/components/footer/footers";
import BodyAL from "@/app/album/componentsss/bodyAL";

export default function Album() {
    return (
        <div className="Home" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBars style={{ flexShrink: 0 }} />

            <BodyAL style={{ flexShrink: 0 }}/>

            <Footers style={{ flexShrink: 0 }} />
        </div>
    );
}