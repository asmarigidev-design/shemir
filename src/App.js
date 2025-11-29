
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import HomeSection from './components/Pages/HomeSection';
import Products from './components/Products/Products';
import FaqSection from './components/FaqSection/FaqSection';
import Services from './components/Services/Services';
import ShemirKanchSlider from './components/ShemirKanchSlider/ShemirKanchSlider';
import ShamirKanach from './components/ShamirKanach/ShamirKanach';
import Contact from './components/Contact/Contact';
import About from './components/Pages/About';
import Loading from './components/Loading/Loading';

const App = () => {
    // Loading state - وضعیت لودینگ
    const [isLoading, setIsLoading] = useState(true);
    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    // Navigation states - وضعیت‌های نویگیشن
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [showNavbar, setShowNavbar] = useState(false);
    const [scrollCount, setScrollCount] = useState(0);

    // Refs for DOM elements and scroll tracking - رفرنس‌ها برای المنت‌های DOM و ردیابی اسکرول
    const homeSectionRef = useRef(null);
    const lastScrollY = useRef(0);
    const scrollThreshold = useRef(5);
    const hasReachedThreshold = useRef(false);
    const isScrollingDown = useRef(false);

    useEffect(() => {
        // Auto-play background video - پخش خودکار ویدیو بک‌گراند
        const video = document.querySelector('.background-video');
        if (video) {
            video.play();
        }

        // Get scroll threshold based on screen size - دریافت آستانه اسکرول بر اساس سایز صفحه
        const getScrollThreshold = () => {
            return window.innerWidth <= 768 ? 55 : 90;
        };

        // Handle scroll for navbar show/hide - مدیریت اسکرول برای نمایش/مخفی کردن نوبار
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const threshold = getScrollThreshold();

            const scrollingDown = currentScrollY > lastScrollY.current;
            isScrollingDown.current = scrollingDown;

            if (scrollingDown) {
                const scrollDelta = currentScrollY - lastScrollY.current;

                if (scrollDelta > scrollThreshold.current) {
                    setScrollCount(prev => {
                        const newCount = prev + 1;

                        if (newCount >= threshold && !showNavbar && !hasReachedThreshold.current) {
                            setShowNavbar(true);
                            hasReachedThreshold.current = true;
                        }
                        return newCount;
                    });
                }
            } else {
                if (showNavbar) {
                    setShowNavbar(false);
                    setTimeout(() => {
                        hasReachedThreshold.current = false;
                    }, 100);
                }
            }

            // Reset at top of page - ریست کردن در بالای صفحه
            if (currentScrollY <= 100) {
                setScrollCount(0);
                hasReachedThreshold.current = false;
            }

            lastScrollY.current = currentScrollY;
        };

        // Handle scroll for navbar reappearance - مدیریت اسکرول برای ظاهر شدن مجدد نوبار
        const handleScrollForReappear = () => {
            const currentScrollY = window.scrollY;
            const threshold = getScrollThreshold();

            if (currentScrollY > lastScrollY.current && !showNavbar) {
                if (scrollCount >= threshold && !hasReachedThreshold.current) {
                    setShowNavbar(true);
                    hasReachedThreshold.current = true;
                }
            }

            lastScrollY.current = currentScrollY;
        };

        // Add event listeners - افزودن شنودگرهای رویداد
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScrollForReappear);

        // Cleanup event listeners - پاک کردن شنودگرهای رویداد
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleScrollForReappear);
        };
    }, [showNavbar, scrollCount]);

    // Scroll to section function - تابع اسکرول به بخش مورد نظر
    const scrollToSection = (sectionId) => {
        if (sectionId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                const homeHeight = homeSectionRef.current?.offsetHeight || 0;
                const elementPosition = element.offsetTop - homeHeight;
                window.scrollTo({ top: elementPosition, behavior: 'smooth' });
            }
        }
        setActiveSection(sectionId);
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="App">
                {isLoading ? (
                    <Loading onLoadingComplete={handleLoadingComplete} />
                ) : (
                    <>
                        {/* Navigation - نویگیشن */}
                        <nav className={`navbar ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}  >
                            <div className="nav-container">
                                <div className="nav-logo">
                                    <h1>Shemir</h1>
                                    <h2> Kanch </h2>
                                </div>
                                <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                                    <div className={`nav-item ${activeSection === 'home' ? 'active' : ''}`} onClick={() => scrollToSection('home')}>خانه</div>
                                    <div className={`nav-item ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>درباره ما</div>
                                    <div className={`nav-item ${activeSection === 'products' ? 'active' : ''}`} onClick={() => scrollToSection('products')}>محصولات</div>
                                    <div className={`nav-item ${activeSection === 'services' ? 'active' : ''}`} onClick={() => scrollToSection('services')}>خدمات</div>
                                    <div className={`nav-item ${activeSection === 'faq' ? 'active' : ''}`} onClick={() => scrollToSection('faq')}>سوالات</div>
                                    <div className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}> تماس با ما</div>
                                </div>
                                <div
                                    className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                </div>
                            </div>
                        </nav>

                        {/* Main sections - بخش‌های اصلی */}
                        <HomeSection
                            scrollToSection={scrollToSection}
                            ref={homeSectionRef}
                        />

                        <About />
                        <Products />
                        <Services />
                        <ShemirKanchSlider />
                        <ShamirKanach />
                        <FaqSection />
                        <Contact />
                    </>
                )}
            </div>
        </>
    );
};

export default App;