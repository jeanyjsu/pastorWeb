import * as React from 'react';
import NavBars from "@/app/components/navBar/navBars";
import BodyMd from "@/app/media/componentsssss/bodyMd";
import Footers from "@/app/components/footer/footers";


export default function Media() {
    return (
        <div className="Home" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBars style={{ flexShrink: 0 }} />

            <BodyMd style={{ flexShrink: 0 }}/>

            <Footers style={{ flexShrink: 0 }} />
        </div>
    );
}