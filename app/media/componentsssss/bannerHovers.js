import { Box } from '@mui/material';

const BannerHovers = ({ link, imageUrl, text, backgroundColor, reversed, gradient }) => {
    const handleClick = () => {
        window.open(link, '_blank');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: reversed ? 'row-reverse' : 'row',
                width: '100%',
                height: { xs: '20%', md: '30%' },
                overflow: 'hidden',
                cursor: 'pointer',
                alignSelf: { xs: 'flex-end', sm: 'flex-end', md: 'auto' },
                position: { xs: 'relative', sm: 'relative', md: 'static' },
                bottom: { xs: '10px', sm: '10px', md: 'auto' },
                '&:hover .imageSide': {
                    flex: { xs: '0', sm: '0', md: '3' },
                },
                '&:hover .colorSide': {
                    flex: { xs: '1', sm: '1', md: '7' },
                },
                transition: 'flex 0.5s ease',
            }}
            onClick={handleClick}
             >


            {/* Image Section */}
            <Box
                className="imageSide"
                sx={{
                    flex: { xs: '0', sm: '0', md: '7' },
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: { xs: 'none', sm: 'none', md: 'block' },
                    transition: 'flex 0.5s ease',
                }}
            />

            {/* Background Color Section with Gradient */}
            <Box
                className="colorSide"
                sx={{
                    flex: { xs: '1', sm: '1', md: '3' },
                    background: gradient
                        ? 'linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7)'
                        : backgroundColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'flex 0.5s ease',
                    color: 'white',
                    fontWeight: 'bold',
                }}
            >
                {text}
            </Box>
        </Box>
    );
};

export default BannerHovers;






