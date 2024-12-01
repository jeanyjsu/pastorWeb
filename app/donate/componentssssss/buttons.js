import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import PaymentIcon from '@mui/icons-material/Payment';

const Buttons = () => {
    const [openOnlineDialog, setOpenOnlineDialog] = useState(false);

    const handleOpenOnline = () => {
        setOpenOnlineDialog(true);
    };

    const handleCloseOnline = () => {
        setOpenOnlineDialog(false);
    };

    return (
        <>
            <div
                style={{
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                }}
            >
                <button
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#f96846',
                        color: '#3f4359',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                    }}
                    onClick={handleOpenOnline}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = '#e5573c')}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = '#f96846')}
                >
                    <PaymentIcon /> Gift Online
                </button>
            </div>

            {/* Dialog */}
            <Dialog open={openOnlineDialog} onClose={handleCloseOnline} maxWidth="sm" fullWidth>
                <DialogContent>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src="/qrcode.png"
                            alt="Gift Online"
                            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Buttons;
