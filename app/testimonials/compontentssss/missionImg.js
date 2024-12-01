"use client";

import React, { useState, useEffect } from 'react';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import {Box} from "@mui/material";

const MissionImg = ({ selectedCountry }) => {
    const [imageUrls, setImageUrls] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const facebookAlbumUrl = "https://www.facebook.com/Onlie.Vancouver.persian.Church/photos_albums";

    //fetch images whenever the selectCountry change
    useEffect(() => {
        if (selectedCountry) {
            fetch(`/api/getImgs?country=${encodeURIComponent(selectedCountry)}`)
                .then((response) => response.json())
                .then((data) => {
                    if (Array.isArray(data)) {
                        setImageUrls(data);
                    } else {
                        console.error("Unexpected response format:", data);
                    }
                })
                .catch(error => console.error('Error fetching images:', error));
        }
    }, [selectedCountry]);

    //Open enlarge version of image as dialog when clicked
    const handleImageClick = (url) => {
        setSelectedImage(url);
        setOpen(true);
    };

    //closes it
    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    return (
        <Box sx={{
            width: '100%',
            margin: '2dvh auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>

            {/* Image grid */}
            <div style={{
                width: '100%',
                height: 'auto',
                paddingBottom: '2%',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <ImageList
                    sx={{
                        width: "100%",
                        height: {
                            xs: "100%",
                            sm: "100%",
                            md: "auto",
                        },
                        maxHeight: "100%",
                        overflowY: "auto",
                        overflowX: "hidden",
                        boxSizing: "border-box",
                    }}
                    cols={3}
                    rowHeight={164}
                >
                    {imageUrls.map((url, index) => (
                        <ImageListItem key={index}>
                            <img
                                src={`${url}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={`Mission Image ${index + 1}`}
                                loading="lazy"
                                style={{
                                    cursor: "pointer",
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                }}
                                onClick={() => handleImageClick(url)}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

                {/* "See More" button */}
                <Button
                    variant="contained"
                    onClick={() => window.open(facebookAlbumUrl, "_blank")}
                    sx={{
                        marginTop: "20px",
                        backgroundColor: "#f96846",
                        color: "#fff",
                        "&:hover": {
                            backgroundColor: "#e35b3c",
                        },
                    }}
                >
                    See More
                </Button>
            </div>

            {/* Fullsize image dialog */}
            <Dialog open={open} onClose={handleClose} maxWidth="lg">
                <DialogContent>
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Full-size Mission Image"
                            style={{
                                width: "100%",
                                height: "auto",
                                maxHeight: "90vh",
                                display: "block",
                                margin: "0 auto",
                            }}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default MissionImg;


