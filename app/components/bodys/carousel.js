"use client";
import React, { useEffect, useState } from "react";

const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(1);

    const reviews = [
        { name: "Matthew 22:9 NIV", quote: "So go to the street corners and invite to the banquet anyone you find." },
        { name: "Matthew 28:19 NIV", quote: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit," },
        { name: "Mark 16:15 NIV", quote: "He said to them, Go into all the world and preach the gospel to all creation." },
        { name: "Matthew 10:16 NIV", quote: "I am sending you out like sheep among wolves. Therefore be as shrewd as snakes and as innocent as doves." },
        { name: "Luke 10:1-3 NIV", quote: "After this the Lord appointed seventy-two others and sent them two by two ahead of him to every town and place where he was about to go. He told them, The harvest is plentiful, but the workers are few. Ask the Lord of the harvest, therefore, to send out workers into his harvest field. Go! I am sending you out like lambs among wolves." },
        { name: "John 15:16 NIV", quote: "You did not choose me, but I chose you and appointed you so that you might go and bear fruit—fruit that will last—and so that whatever you ask in my name the Father will give you." },
        { name: "Matthew 10:5-7 NIV", quote: "These twelve Jesus sent out with the following instructions: “Do not go among the Gentiles or enter any town of the Samaritans. Go rather to the lost sheep of Israel. As you go, proclaim this message: The kingdom of heaven has come near." },
    ];

    //to cycle through the quotes, reset to first quote once it hits the last one
    useEffect(() => {
        let current = 1;
        const cycleReviews = () => {
            if (current === reviews.length) {
                current = 1;
            } else {
                current += 1;
            }
            setActiveSlide(current);
        };
        const intervalId = setInterval(() => {
            cycleReviews();
        }, 10000);
        return () => clearInterval(intervalId);
    }, [reviews]);

    return (
        <div
            style={{
                textAlign: "center",
                width:'100%',
                maxWidth: "100%",
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                height: "100%",
                position: "relative",
                paddingBottom:'2dvh'
            }}
        >
            {/* Carousel display that allows scrolling for longer quotes */}
            <div
                style={{
                    width: "80%",
                    height: "13dvh",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {reviews.map((review, index) => {
                    const { name, quote } = review;
                    const count = index + 1;
                    return (
                        <div
                            key={count}
                            style={{
                                display: count === activeSlide ? "block" : "none",
                                padding: "10px",
                                borderRadius: "5px",
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                backgroundColor: "#3f4359",
                                boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
                                color: "#ffde59",
                                overflowY: "auto",
                                overflowX: "hidden",

                            }}
                        >
                            <blockquote
                                style={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "canter",
                                    justifyContent: "center",
                                }}
                            >
                                <cite>
                                    <strong>{name}</strong>
                                </cite>
                                    <p
                                        style={{
                                            margin: 0,
                                            lineHeight: "1.5",
                                            textAlign: "center",
                                            color: "#ffde59",
                                        }}
                                    >`&quot;{quote}`&quot;</p>
                            </blockquote>
                        </div>
                );
                })}
                </div>

            {/* Dots Navigation */}
            <div
                style={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                {reviews.map((_, index) => (
                    <span
                        key={index}
                        style={{
                            display: "inline-block",
                            width: "10px",
                            height: "10px",
                            margin: "0 5px",
                            borderRadius: "50%",
                            backgroundColor: activeSlide === index + 1 ? "#f96846" : "#ffde59",
                            cursor: "pointer",
                        }}
                        onClick={() => setActiveSlide(index + 1)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;



