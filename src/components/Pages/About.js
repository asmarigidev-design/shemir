import { React, useEffect } from 'react';
import '../../App.css';
import shemir from "../images/Productsimg/shemir1.PNG";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        // Initialize AOS animation | مقداردهی اولیه انیمیشن AOS
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="section-header">
                    <h2> گروه شمیر کانچ</h2>
                    <p>
                        مدیریت کارگاه شمیر کانچ با سرپرستی خانم شیما ابراهیمی (شمیر)، مهندس صنایع و عاشق هنر گلدوزی
                    </p>

                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            ما ادعا نمی‌کنیم بهترین هستیم؛ خوشحالیم که بهترین‌ها و باسلیقه‌ترین‌ها ما را انتخاب می‌کنند.
                        </p>

                        <div className="features-grid">
                            <div className="feature-item art" data-aos="fade-left">
                                <h4>تولیدی لباس بلوچی</h4>
                                <p>در انواع طرح‌ها و رنگ‌ها با بالاترین کیفیت</p>
                            </div>

                            <div className="feature-item jewelry" data-aos="fade-right">
                                <h4>کمربندهای حرفه‌ای</h4>
                                <p>کمربندهای فوق حرفه‌ای اصل جهانی</p>
                            </div>

                            <div className="feature-item scarf" data-aos="fade-right">
                                <h4>شال‌های بلوچی</h4>
                                <p>انواع شال‌های دست‌دوز بلوچی</p>
                            </div>

                            <div className="feature-item artwork" data-aos="fade-left">
                                <h4>تابلوهای میکس مدیا</h4>
                                <p>ترکیب عکس با نگین و... برای خلق آثار هنری خاص</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-image" data-aos="zoom-in-up">
                        <img src={shemir} alt="هنر گلدوزی" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
