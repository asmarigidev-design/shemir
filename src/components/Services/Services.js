import React from 'react';
import './Services.css';

// Services component | کامپوننت خدمات
const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h2>خدمات ویژه شمیر کانچ</h2>
                    <p>گلدوزی و طراحی حرفه‌ای با مشاوره رایگان</p>
                </div>

                <div className="services-content">
                    <div className="service-item" data-aos="fade-right">
                        <h3>گلدوزی کامپیوتری</h3>
                        <p>انواع گلدوزی و هر مدل آرم و بج داوری از یک عدد تا ده‌هزار عدد با بالاترین کیفیت</p>
                    </div>

                    <div className="service-item" data-aos="fade-left">
                        <h3>شخصی‌سازی لباس</h3>
                        <p>گلدوزی انواع آرم و لوگوی مدنظر شما به‌صورت عمده و تک روی هر نوع لباس</p>
                    </div>

                    <div className="service-item" data-aos="fade-right">
                        <h3>فروش دستگاه گلدوزی</h3>
                        <p>فروش دستگاه‌های صنعتی گلدوزی کامپیوتری از تک‌کله تا بیست‌کله</p>
                    </div>

                    <div className="service-item" data-aos="fade-left">
                        <h3>ارسال به سراسر کشور</h3>
                        <p>شغلی پردرآمد، عالی و آینده‌دار با ارسال به تمام نقاط کشور</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
