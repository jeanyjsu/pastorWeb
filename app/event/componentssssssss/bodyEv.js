
import React from 'react';
import EventDisplay from "@/app/event/componentssssssss/eventDisplay";
import Title from "@/app/event/componentssssssss/title";

const BodyEv = ({ isLoggedIn, setIsLoggedIn }) => {
    return(
        <div style={{
            width: '100%',
            minHeight: '100dvh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            boxSizing: 'border-box',
            margin: '0',
            padding: '0',
            overflow: 'hidden'
        }}>
            <Title/>
            <hr style={{
                width: '80%',
                border: 'none',
                borderTop: '2px solid #f4f4f4',
                marginTop:'1dvh',
            }}/>
            <EventDisplay isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

            {/* Background */}
            <div style={{
                content: '""',
                backgroundImage: `url('./backgroundMain.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.2,
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1
            }}>

            </div>
        </div>
    );
}

export default BodyEv;