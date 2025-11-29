import React, { useState } from 'react';
import './FaqSection.css'; // Separate style file | فایل استایل جداگانه

// FaqSection component | کامپوننت بخش سوالات متداول
const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    // Toggle FAQ item | باز و بسته کردن آیتم سوالات
    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // FAQ data | داده‌های سوالات متداول
    const faqData = [
        {
            question: "آیا می‌دانید شمیر یعنی چه؟",
            answer: "شمیر تلفیق اسم خانوادگی ماست و کانچ به معنای آینه است. ما اولین گروه طراحی و تولید لباس بلوچی کامپیوتری هستیم که توانستیم روی لباس‌ها آینه‌دوزی انجام دهیم."
        },
        {
            question: "آیا امکان خرید عمده و تکی وجود دارد؟",
            answer: "بله، مشتریان می‌توانند محصولات شمیر کانچ را هم به‌صورت عمده و هم به‌صورت تکی تهیه کنند."
        },
        {
            question: "آیا برای دختر بچه‌های کوچک هم لباس دارید؟",
            answer: "بله، کوچک‌ترین سایز بچگانه مناسب یک تا دو سال است."
        },
        {
            question: "آیا قیمت‌های لباس نگینی یکسان است؟",
            answer: "خیر، قیمت لباس نگینی با نگین درجه یک حدود ۱۰۰ تا ۲۰۰ تومان بیشتر از نگین‌های درجه دو است."
        },
        {
            question: "آیا می‌توانیم جنس پارچه یا رنگ مورد نظرمان را انتخاب کنیم؟",
            answer: "بله، با پارچه‌های چلیس گیاهی، ساتن لیزری و کرپ می‌توانید انتخاب کنید."
        },
        {
            question: "آیا امکان سفارش آنلاین وجود دارد؟",
            answer: "بله، کاتالوگ آنلاین ما همیشه به‌روز است و امکان ثبت سفارش آنلاین وجود دارد."
        },
        {
            question: "آیا خدمات مشاوره رایگان دارید؟",
            answer: "بله، مشتریان پیش از سفارش می‌توانند از مشاوره رایگان ما بهره‌مند شوند."
        },
        {
            question: "آیا ارسال به سراسر کشور انجام می‌شود؟",
            answer: "بله، محصولات شمیر کانچ به تمام نقاط ایران ارسال می‌شوند."
        },
        {
            question: "آیا لباس‌های رزمی شما استاندارد جهانی دارند؟",
            answer: "بله، تمامی لباس‌های رزمی تولید شمیر مطابق با استانداردهای جهانی طراحی و دوخته می‌شوند."
        },
        {
            question: "آیا امکان شخصی‌سازی طرح‌ها وجود دارد؟",
            answer: "بله، شما می‌توانید طرح اختصاصی خود را ارائه دهید و ما آن را با بهترین کیفیت اجرا می‌کنیم."
        }
    ];

    return (
        <section id="faq" className="faq-section">
            <div className="container">
                <div className="section-header">
                    <h2>سوالات متداول</h2>
                    <p>پاسخ به پرسش‌های پرتکرار شما</p>
                </div>

                <div className="faq-content" data-aos="fade-up">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <div
                                className="faq-question"
                                onClick={() => toggleFaq(index)}
                            >
                                <h4 data-aos="fade-right">{item.question}</h4>
                                <div className="faq-icon">
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="special-button">مشاهده جزئیات بیشتر</button>
            </div>
        </section>
    );
};

export default FaqSection;
