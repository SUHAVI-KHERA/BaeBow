"use client";

// This is a placeholder component to represent a QR code.
// In a real application, you would use a library like 'react-qr-code'.
export function QrCode({ value }: { value: string }) {
    // The value prop is included for future integration but not used in this placeholder.
    return (
        <div className="p-2 bg-white rounded-md shadow-md inline-block">
             <svg width="128" height="128" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H12V12H4V4ZM12 20H4V28H12V20ZM4 14H6V18H4V14ZM8 14H10V16H8V14ZM20 4H28V12H20V4ZM20 14H22V16H20V14ZM24 14H26V16H24V14ZM26 18H28V22H26V18ZM20 20H22V22H20V20ZM24 24H26V26H24V24ZM26 26H28V28H26V26ZM22 28H24V30H22V28ZM14 20H18V24H14V20ZM14 26H16V28H14V26ZM18 28H20V30H18V28ZM14 14H16V18H14V14Z" fill="black"/>
                <path d="M6 6H10V10H6V6ZM22 6H26V10H22V6ZM6 22H10V26H6V22Z" fill="black"/>
            </svg>
        </div>
    );
}
