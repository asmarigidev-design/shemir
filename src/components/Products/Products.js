import { React, useEffect } from 'react';
import './Products.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import l3 from "../images/Productsimg/l3.jpg";
import l2 from "../images/Productsimg/l2.jpg";
import k1 from "../images/Productsimg/k1.webp";
import k2 from "../images/Productsimg/k3.jpg";
import t1 from "../images/Productsimg/t1.jfif";
import t2 from "../images/Productsimg/t2.jfif";
import sh1 from "../images/Productsimg/sh1.jfif";
import sh2 from "../images/Productsimg/sh2.jfif";
import a1 from "../images/Productsimg/a1.PNG";
import a2 from "../images/Productsimg/a2.webp";
import p1 from "../images/Productsimg/p1.webp";
import p2 from "../images/Productsimg/p2.webp";
import d1 from "../images/Productsimg/d1.webp";
import d2 from "../images/Productsimg/d2.jpg";
import ka1 from "../images/Productsimg/ka1.jpg";
import ka2 from "../images/Productsimg/ka2.jpg";
import bac15 from "../images/Productsimg/bac15.webp";
import bac14 from "../images/sliderimg/bac14.webp";

const Products = () => {
    useEffect(() => {
        // Initialize AOS animation | مقداردهی اولیه انیمیشن AOS
        AOS.init({ duration: 1000 });
    }, []);

    // Products data | داده‌های محصولات
    const products = [
        {
            id: 1,
            title: "لباس بلوچی",
            description: "طرح‌های متنوع: پلیواری، سبزو، ماه و روچ تاپکی، برگ‌ریزان، گلبهار، تاجدار",
            features: ["پارچه گیاهی درجه یک", "نگین الماش تراشه", "زه‌دوزی شده"],
            image: l3,
            circularImage: l2
        },
        {
            id: 2,
            title: "کمربندهای رزمی",
            description: "کمربندهای مشکی و استادی فوق حرفه‌ای VIP مدل اصل جهانی",
            features: ["گلدوزی کامپیوتری", "شخصی‌سازی شده", "کیفیت جهانی"],
            image: k1,
            circularImage: k2
        },
        {
            id: 3,
            title: "شال‌های بلوچی",
            description: "شال‌های دست‌دوز در طرح‌های اصیل و رنگ‌های متنوع",
            features: ["مناسب به عنوان یادگاری", "طرح‌های اصیل", "قیمت مناسب"],
            image: sh1,
            circularImage: sh2
        },
        {
            id: 4,
            title: "تابلوهای میکس مدیا",
            description: "ترکیب عکس با نگین، تور و گل برای خلق آثار هنری منحصر به‌فرد",
            features: ["طراحی شخصی‌سازی شده", "ترکیب متریال‌های متنوع", "یادگاری خاص و ماندگار"],
            image: t2,
            circularImage: t1
        },
        {
            id: 5,
            title: "انواع آرم و لوگو",
            description: "گلدوزی اختصاصی انواع آرم و لوگو روی لباس و محصولات",
            features: ["گلدوزی دقیق", "شخصی‌سازی طرح", "کیفیت بالا"],
            image: a2,
            circularImage: a1
        },
        {
            id: 6,
            title: "انواع پارچه",
            description: "پارچه‌های گیاهی و باکیفیت در رنگ‌ها و طرح‌های متنوع",
            features: ["پلیس گیاهی", "ساتن لیزری", "کرپ"],
            image: p1,
            circularImage: p2
        },
        {
            id: 7,
            title: "گلدوزی کفش و کیف",
            description: "شخصی‌سازی کفش و کیف با طرح‌های مدرن و اصیل",
            features: ["دوخت ظریف", "طرح اختصاصی", "کیفیت تضمینی"],
            image: ka1,
            circularImage: ka2
        },
        {
            id: 8,
            title: "گلدوزی دستکش و کلاه",
            description: "گلدوزی حرفه‌ای روی دستکش و کلاه برای استایل خاص",
            features: ["طرح‌های متنوع", "دوخت مقاوم", "شخصی‌سازی"],
            image: d1,
            circularImage: d2
        },
        {
            id: 9,
            title: "فروش دستگاه‌های گلدوزی",
            description: "فروش دستگاه‌های صنعتی گلدوزی کامپیوتری از تک‌کله تا بیست‌کله",
            features: ["شغلی پردرآمد", "ارسال به سراسر کشور", "کیفیت تضمینی"],
            image: bac14,
            circularImage: bac15
        }
    ];

    return (
        <section id="products" className="products-section">
            <div className="container">
                <div className="section-header" data-aos="zoom-in">
                    <h2>محصولات شمیر کانچ</h2>
                    <p>تنوع بی‌نظیر در تولیدات باکیفیت و قیمت مناسب</p>
                </div>

                <div className="products-grid">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Product card component | کامپوننت کارت محصول
const ProductCard = ({ product }) => {
    return (
        <div className="product-card" data-aos="flip-left">
            <div className="product-image-container">
                <div className="product-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="circular-image-wrapper">
                    <div className="circular-image-border">
                        <div className="circular-image">
                            <img src={product.circularImage} alt={product.title} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-content" data-aos="fade-left">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <ul>
                    {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                {/* Professional button | دکمه حرفه‌ای */}
                <button className="shop-button">مشاهده فروشگاه</button>
            </div>
        </div>
    );
};

export default Products;
