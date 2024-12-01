import * as React from 'react';
import NavBars from "@/app/components/navBar/navBars";
import Footers from "@/app/components/footer/footers";
import BodyTs from "@/app/testimonials/compontentssss/bodyTs";

export default function Testimonials() {
    return (
        <div className="Home" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBars style={{ flexShrink: 0 }} />

            <BodyTs style={{ flexShrink: 0 }} />

            <Footers style={{ flexShrink: 0 }} />
        </div>
    );
}