import React from 'react';

const Livestream = () => {
    return (
        <div style={{
            width: '95%',
            height: '60%',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <iframe
                src="https://www.youtube.com/embed/live_stream?channel=UCvXYkFGlGNONYL7LQpRzonQ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
                title="YouTube Livestream"
            />
        </div>
    );
}

export default Livestream;
