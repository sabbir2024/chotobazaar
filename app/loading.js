// components/Loading.jsx (Alternative - without import)
"use client";
import { useEffect } from 'react';
import Image from 'next/image';

const Loading = () => {
    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            
            @media (max-width: 768px) {
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
            }
        `;
        document.head.appendChild(styleSheet);
        return () => styleSheet.remove();
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            padding: '20px',
        }}>
            <div style={{
                textAlign: 'center',
                width: '100%',
                maxWidth: '300px',
            }}>
                <div style={{
                    marginBottom: 'clamp(15px, 4vw, 25px)',
                    animation: 'bounce 1s ease-in-out infinite',
                }}>
                    <Image
                        src="/chotologo.png"
                        alt='Brand logo'
                        width={80}
                        height={80}
                        priority
                        className="mx-auto"
                        style={{
                            width: 'clamp(60px, 15vw, 80px)',
                            height: 'auto'
                        }}
                    />
                </div>

                <div style={{
                    width: 'clamp(35px, 10vw, 50px)',
                    height: 'clamp(35px, 10vw, 50px)',
                    margin: '0 auto',
                    border: 'clamp(2px, 0.8vw, 4px) solid #f0f0f0',
                    borderTop: `clamp(2px, 0.8vw, 4px) solid #2c5f2d`,
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                }}></div>

                <div style={{
                    fontSize: 'clamp(14px, 4vw, 16px)',
                    color: '#666',
                    marginTop: 'clamp(15px, 5vw, 20px)',
                    marginBottom: '5px',
                }}>
                    Loading Collection...
                </div>

                <div style={{
                    fontSize: 'clamp(12px, 3.5vw, 14px)',
                    color: '#999',
                }}>
                    (3 items)
                </div>

                <div style={{
                    width: '100%',
                    height: '3px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '3px',
                    marginTop: '30px',
                    overflow: 'hidden',
                }}>
                    <div style={{
                        width: '60%',
                        height: '100%',
                        backgroundColor: '#2c5f2d',
                        borderRadius: '3px',
                        animation: 'spin 1s linear infinite',
                    }}></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;