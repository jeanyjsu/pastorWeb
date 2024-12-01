import * as React from 'react';
import NavBars from "@/app/components/navBar/navBars";
import Footers from "@/app/components/footer/footers";
import BodyAb from "@/app/about/componentss/body2/bodyAb";

export default function About() {
    return (
        <div className="Home" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBars style={{ flexShrink: 0 }} />

            <BodyAb style={{ flex: 1 }} />

            <Footers style={{ flexShrink: 0 }} />
        </div>
    );
}
