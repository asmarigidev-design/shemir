import React, { useState, useEffect, useRef, useMemo } from 'react';
import videoSource from '../images/Productsimg/back.webm';

const HomeSection = ({ scrollToSection }) => {
    const [typewriterText, setTypewriterText] = useState('');
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const homeSectionRef = useRef(null);

    // Sentences for typewriter | جملات برای تایپ‌رایتر
    const sentences = useMemo(() => [
        "گلدوزی‌هایی که روایتگر قصه‌های کهن هستند...",
        "هر بخیه، شعری از اصالت و هنر دستان طلایی...",
        "آفرینش زیبایی ماندگار با نوآوری بی‌پایان..."
    ], []);

    // Typewriter effect | افکت تایپ‌رایتر
    useEffect(() => {
        const typewriter = setTimeout(() => {
            if (currentCharIndex < sentences[currentSentenceIndex].length) {
                // Typing character by character | تایپ کردن حرف به حرف
                setTypewriterText(prev => prev + sentences[currentSentenceIndex][currentCharIndex]);
                setCurrentCharIndex(prev => prev + 1);
            } else {
                // When sentence ends, wait and start next | وقتی جمله تمام شد، منتظر بمان و جمله بعدی را شروع کن
                setTimeout(() => {
                    setTypewriterText('');
                    setCurrentCharIndex(0);
                    setCurrentSentenceIndex(prev => (prev + 1) % sentences.length);
                }, 2000); // 2 seconds pause between sentences | 2 ثانیه مکث بین جملات
            }
        }, 100); // Typing speed (ms) | سرعت تایپ (میلی‌ثانیه)

        return () => clearTimeout(typewriter);
    }, [currentCharIndex, currentSentenceIndex, sentences]);

    return (
        <section
            id="home"
            ref={homeSectionRef}
            className="home-section fixed-section"
        >
            <div className="video-background">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="background-video"
                >
                    <source src={videoSource} type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
            </div>

            <div className="section-content home-content">
                <div className="hero-content">
                    <div className="hero-text nastaliq ">
                        <h1 className="hero-title animate-fade-in nastaliq-text">
                            گروه قدرتمند <span className="highlight ">شمیر کانچ</span>
                        </h1>

                        <p className="hero-subtitle animate-fade-in-delay nastaliq-text">
                            جایی که هنر، اصالت و نوآوری در گلدوزی و تولید لباس‌های بلوچی به اوج می‌رسد.
                        </p>

                        {/* New typewriter | تایپ‌رایتر جدید */}
                        <div className="typewriter-container animate-fade-in-delay-2">
                            <p className="typewriter-text nastaliq-text">
                                {typewriterText}
                                <span className="cursor">|</span>
                            </p>
                        </div>

                        <div className="hero-buttons animate-fade-in-delay-3">
                            <button className="btn-primary" onClick={() => scrollToSection('products')}>
                                مشاهده محصولات
                            </button>
                            <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                                تماس با ما
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSection;
