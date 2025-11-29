import React, { useState, useEffect } from 'react';
import './ShemirKanchSlider.css';
import bac1 from "../images/sliderimg/bac1.webp";
import bac2 from "../images/sliderimg/bac2.webp";
import bac8 from "../images/sliderimg/bac8.webp";
import bac9 from "../images/sliderimg/bac9.webp";
import bac10 from "../images/sliderimg/bac10.webp";
import bac11 from "../images/sliderimg/bac11.webp";
import bac12 from "../images/sliderimg/bac12.webp";
import bac14 from "../images/sliderimg/bac14.webp";

// ShemirKanchSlider component | کامپوننت اسلایدر شمیر کانچ
const ShemirKanchSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Slider data optimized | داده‌های اسلایدر - نسخه بهینه‌شده
    const slides = [
        {
            id: 1,
            title: "گروه قدرتمند شمیر کانچ",
            subtitle: "هنر، اصالت و نوآوری در گلدوزی",
            description:
                "کارگاه شمیر کانچ با مدیریت خانم شیما ابراهیمی (شمیر)، مهندس صنایع و عاشق هنر گلدوزی، تلفیقی از تخصص و عشق به هنر است.",
            image: bac1,
            cta: "مشاهده مجموعه"
        },
        {
            id: 2,
            title: "زیبایی بی‌پایان گلدوزی",
            subtitle: "هنر جاودانه",
            description:
                "گلدوزی یکی از زیباترین هنرهای جهان است؛ هنری که اصالت و ظرافت را در هر دوخت نمایان می‌کند.",
            image: bac2,
            cta: "مشاهده فروشگاه"
        },
        {
            id: 3,
            title: "‌دستگاه‌های گلدوزی کامپیوتری",
            subtitle: "شغلی پردرآمد، عالی و آینده‌دار با ارسال به تمام نقاط کشور",
            description:
                "‌فروش دستگاه‌های صنعتی گلدوزی کامپیوتری از تک‌کله تا بیست‌کله.",
            image: bac14,
            cta: "مشاهده فروشگاه"
        },
        {
            id: 4,
            title: "شعبه‌های شمیر کانچ",
            subtitle: "تهران و چابهار",
            description:
                "گروه شمیر با یک شعبه در تهران و دو شعبه در چابهار، خدمات حرفه‌ای گلدوزی را همراه با مشاوره رایگان ارائه می‌دهد.",
            image: bac9,
            cta: "مشاهده فروشگاه"
        },
        {
            id: 5,
            title: "پاسخگوی همه سلیقه‌ها",
            subtitle: "بانوان، آقایان و تولیدی‌ها",
            description:
                "گروه شمیر پاسخگوی هرگونه سلیقه بانوان، آقایان، ورزشکاران و تولیدی‌هاست؛ از طرح‌های خاص تا سفارش‌های اختصاصی.",
            image: bac10,
            cta: "مشاهده فروشگاه"
        },
        {
            id: 6,
            title: "مشاوره رایگان و کیفیت عالی",
            subtitle: "طرح دلخواه شما",
            description:
                "کافیست طرح دلخواهتان را ارائه دهید؛ ما آن را با بالاترین کیفیت دوخت و ظرافت تحویل می‌دهیم.",
            image: bac11,
            cta: "مشاهده فروشگاه"
        },
        {
            id: 7,
            title: "لباس‌های خاص و نگین‌کاری شده",
            subtitle: "طراحی اختصاصی شمیر کانچ",
            description:
                "لباس‌های نگین‌کاری شده با طرح اختصاصی شمیر کانچ، کامل زه‌دوزی شده، جذاب، خوشرنگ و خاص هستند.",
            image: bac12,
            cta: "مشاهده فروشگاه"
        },
        {
            id: 8,
            title: "هنر اصیل و کهن",
            subtitle: "دستی و صنعتی",
            description:
                "گلدوزی چه به‌صورت دستی و چه صنعتی، تخصص و هنر ماست. اصالت و کیفیت در هر بخیه.",
            image: bac8,
            cta: "مشاهده فروشگاه"
        }
    ];

    // Auto slide change | تغییر خودکار اسلایدها
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    // Go to specific slide | رفتن به اسلاید مشخص
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="shemir-slider">
            <div className="slider-container">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="slide-overlay"></div>
                        <div className="slide-content" data-aos="fade-left">
                            <h2 className="slide-title">{slide.title}</h2>
                            <h3 className="slide-subtitle">{slide.subtitle}</h3>
                            <p className="slide-description">{slide.description}</p>
                            <button className="slide-cta">{slide.cta}</button>
                        </div>
                    </div>
                ))}

                <div className="slider-indicators">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShemirKanchSlider;
