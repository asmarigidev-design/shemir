import React, { useState, useEffect } from 'react';
import './Loading.css';

const Loading = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    const [pulse, setPulse] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                const newProgress = prev + Math.random() * 8;
                if (newProgress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        if (onLoadingComplete) onLoadingComplete();
                    }, 800);
                    return 100;
                }
                return newProgress;
            });
        }, 200);

        //Alternating pulses پالس‌های متناوب
        const pulseInterval = setInterval(() => {
            setPulse(prev => !prev);
        }, 600);

        return () => {
            clearInterval(interval);
            clearInterval(pulseInterval);
        };
    }, [onLoadingComplete]);

    //Calculating SVG dashes for circle animation محاسبه دش‌های SVG برای انیمیشن دایره
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="loading-container">
            {/*Background effects افکت‌های پس‌زمینه */}
            <div className="floating-particle particle-1"></div>
            <div className="floating-particle particle-2"></div>
            <div className="floating-particle particle-3"></div>
            <div className="floating-particle particle-4"></div>

            <div className="loading-content">
                {/*Main loading circle دایره اصلی لودینگ */}
                <div className="circle-loader">
                    <svg className="progress-ring" width="200" height="200">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#c30d26" />
                                <stop offset="50%" stopColor="#e74c3c" />
                                <stop offset="100%" stopColor="#7e1418" />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/*Circle background پس‌زمینه دایره */}
                        <circle
                            className="progress-ring-background"
                            stroke="rgba(195, 13, 38, 0.2)"
                            strokeWidth="12"
                            fill="transparent"
                            r={radius}
                            cx="100"
                            cy="100"
                        />

                        {/*Circle progress پیشرفت دایره */}
                        <circle
                            className="progress-ring-circle"
                            stroke="url(#gradient)"
                            strokeWidth="12"
                            strokeLinecap="round"
                            fill="transparent"
                            r={radius}
                            cx="100"
                            cy="100"
                            style={{
                                strokeDasharray: circumference,
                                strokeDashoffset: strokeDashoffset,
                                filter: 'url(#glow)'
                            }}
                        />
                    </svg>

                    {/*Content of the center of the circle محتوای مرکز دایره */}
                    <div className={`circle-content ${pulse ? 'pulse' : ''}`}>
                        <div className="logo-icon">
                            <div className="logo-inner">Sh</div>
                        </div>
                        <div className="percentage">{Math.round(progress)}%</div>
                    </div>
                </div>

                {/* Content of the center of the circle متن و اطلاعات */}
                <div className="loading-text">
                    <h1 className="loading-title">
                        <span className="title-word word-1">Shemir</span>
                        <span className="title-word word-2">Kanch</span>
                    </h1>

                    {/*Dynamic points نقاط پویا */}
                    <div className="dynamic-dots">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>

                {/*Bottom status bar نوار وضعیت پایین */}
                <div className="status-bar">
                    <div className="status-progress" style={{ width: `${progress}%` }}></div>
                    <div className="status-text">
                        {progress < 30 && 'بارگذاری منابع...'}
                        {progress >= 30 && progress < 60 && 'آماده‌سازی رابط...'}
                        {progress >= 60 && progress < 90 && 'بارگذاری محتوا...'}
                        {progress >= 90 && 'اتمام عملیات...'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;