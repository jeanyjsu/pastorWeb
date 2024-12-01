import * as React from 'react';
import NavBars from "@/app/components/navBar/navBars";
import BodyDo from "@/app/donate/componentssssss/bodyDo";
import Footers from "@/app/components/footer/footers";


export default function Donate() {
    return (
        <div className="Home" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBars style={{ flexShrink: 0 }} />

           <BodyDo style={{ flexShrink: 0 }} />

            <Footers style={{ flexShrink: 0 }} />
        </div>
    );
}