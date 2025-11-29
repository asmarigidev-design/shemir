import React, { useState, useEffect, useCallback } from 'react';
import './Shproducts.css';

// ایمپورت تصاویر اصلی
import c1 from "../images/Shproductsimg/c1.jpg";
import c2 from "../images/Shproductsimg/c2.jpg";
import c3 from "../images/Shproductsimg/c3.jpg";
import c4 from "../images/Shproductsimg/c4.jpg";
import c5 from "../images/Shproductsimg/c5.jpg";
import c6 from "../images/Shproductsimg/c6.jpg";
import c7 from "../images/Shproductsimg/c7.jpg";
import c8 from "../images/Shproductsimg/c8.jpg";
import c9 from "../images/Shproductsimg/c9.jpg";
import c10 from "../images/Shproductsimg/c10.jpg";


import c1_2 from "../images/Shproductsimg/c1-2.jpg";
import c1_3 from "../images/Shproductsimg/c1-3.jpg";
import c1_4 from "../images/Shproductsimg/c1-4.jpg";

import c2_2 from "../images/Shproductsimg/c2-2.jpg";
import c2_3 from "../images/Shproductsimg/c2-3.jpg";
import c2_4 from "../images/Shproductsimg/c2-4.jpg";

import c3_2 from "../images/Shproductsimg/c3-2.jpg";
import c3_3 from "../images/Shproductsimg/c3-3.jpg";
import c3_4 from "../images/Shproductsimg/c3-4.jpg";

import c4_2 from "../images/Shproductsimg/c4-2.jpg";
import c4_3 from "../images/Shproductsimg/c4-3.jpg";
import c4_4 from "../images/Shproductsimg/c4-4.jpg";

import c5_2 from "../images/Shproductsimg/c5-2.jpg";
import c5_3 from "../images/Shproductsimg/c5-3.jpg";
import c5_4 from "../images/Shproductsimg/c5-4.jpg";

import c6_2 from "../images/Shproductsimg/c6-2.jpg";
import c6_3 from "../images/Shproductsimg/c6-3.jpg";
import c6_4 from "../images/Shproductsimg/c6-4.jpg";

import c7_2 from "../images/Shproductsimg/c7-2.jpg";
import c7_3 from "../images/Shproductsimg/c7-3.jpg";
import c7_4 from "../images/Shproductsimg/c7-4.jpg";

import c8_2 from "../images/Shproductsimg/c8-2.jpg";
import c8_3 from "../images/Shproductsimg/c8-3.jpg";
import c8_4 from "../images/Shproductsimg/c8-4.jpg";

import c9_2 from "../images/Shproductsimg/c9-2.jpg";
import c9_3 from "../images/Shproductsimg/c9-3.jpg";
import c9_4 from "../images/Shproductsimg/c9-4.jpg";

import c10_2 from "../images/Shproductsimg/c10-2.jpg";
import c10_3 from "../images/Shproductsimg/c10-3.jpg";
import c10_4 from "../images/Shproductsimg/c10-4.jpg";



const Shproducts = () => {
    const [selectedDesign, setSelectedDesign] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // داده‌های طرح‌های اختصاصی با تصاویر import شده
    const designData = {
        item1: {
            title: "طرح پلیواری",
            images: [c1, c1_2, c1_3, c1_4],
            description: "طرح پلیواری با گلدوزی سنتی و مدرن"
        },
        item2: {
            title: "طرح سبزو",
            images: [c2, c2_2, c2_3, c2_4],
            description: "طرح سبزو با رنگ‌های طبیعی و آرامش‌بخش"
        },
        item3: {
            title: "طرح ماه و روچ تاپکی",
            images: [c3, c3_2, c3_3, c3_4],
            description: "طرح ماه و روچ تاپکی با نمادهای سنتی"
        },
        item4: {
            title: "طرح برگ‌ریزان",
            images: [c4, c4_2, c4_3, c4_4],
            description: "طرح برگ‌ریزان با الهام از طبیعت"
        },
        item5: {
            title: "طرح گلبهار",
            images: [c5, c5_2, c5_3, c5_4],
            description: "طرح گلبهار با گل‌های رنگارنگ"
        },
        item6: {
            title: "طرح تاجدار",
            images: [c6, c6_2, c6_3, c6_4],
            description: "طرح تاجدار با طراحی سلطنتی"
        },
        item7: {
            title: "طرح پری بالا",
            images: [c7, c7_2, c7_3, c7_4],
            description: "طرح پری بالا با جزئیات ظریف"
        },
        item8: {
            title: "طرح رینگ",
            images: [c8, c8_2, c8_3, c8_4],
            description: "طرح رینگ با حلقه‌های تزئینی"
        },
        item9: {
            title: "طرح نگینی",
            images: [c9, c9_2, c9_3, c9_4],
            description: "طرح نگینی با نگین‌های درخشان"
        },
        item10: {
            title: "طرح سیاه دوچ",
            images: [c10, c10_2, c10_3, c10_4],
            description: "طرح سیاه دوچ با کنتراست بالا"
        }
    };


    const openModal = (designId) => {
        setSelectedDesign(designData[designId]);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedDesign(null);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'auto';
    };

    const nextImage = useCallback(() => {
        setCurrentImageIndex((prev) =>
            prev === selectedDesign.images.length - 1 ? 0 : prev + 1
        );
    }, [selectedDesign]);

    const prevImage = useCallback(() => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? selectedDesign.images.length - 1 : prev - 1
        );
    }, [selectedDesign]);

    const selectThumbnail = (index) => {
        setCurrentImageIndex(index);
    };

    // مدیریت کیبورد
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedDesign) return;

            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedDesign, currentImageIndex, nextImage, prevImage]);

    return (
        <section id="skproducts" className="sk-products-section">
            <div className="sk-container">
                <h2 className="sk-section-title">خدمات و محصولات</h2>

                <div className="sk-services">
                    <div className="sk-service-card">
                        <h3>فروش پارچه‌های گیاهی</h3>
                        <p data-aos="fade-down">در همه‌ی رنگ‌ها با بالاترین کیفیت</p>
                    </div>

                    <div className="sk-service-card">
                        <h3>تولید هفتگی</h3>
                        <p data-aos="fade-down">پنجاه دست لباس با جدیدترین طرح‌های کارگاه شمیر کانچ</p>
                    </div>
                </div>

                <div className="sk-designs" data-aos="fade-up">
                    <h3 data-aos="fade-down">طرح‌های اختصاصی شمیر کانچ</h3>
                    <div className="sk-designs-grid">
                        <div className="sk-design-item item1" onClick={() => openModal('item1')}><span>طرح پلیواری</span></div>
                        <div className="sk-design-item item2" onClick={() => openModal('item2')}><span>طرح سبزو</span></div>
                        <div className="sk-design-item item3" onClick={() => openModal('item3')}><span>طرح ماه و روچ تاپکی</span></div>
                        <div className="sk-design-item item4" onClick={() => openModal('item4')}><span>طرح برگ‌ریزان</span></div>
                        <div className="sk-design-item item5" onClick={() => openModal('item5')}><span>طرح گلبهار</span></div>
                        <div className="sk-design-item item6" onClick={() => openModal('item6')}><span>طرح تاجدار</span></div>
                        <div className="sk-design-item item7" onClick={() => openModal('item7')}><span>طرح پری بالا</span></div>
                        <div className="sk-design-item item8" onClick={() => openModal('item8')}><span>طرح رینگ</span></div>
                        <div className="sk-design-item item9" onClick={() => openModal('item9')}><span>طرح نگینی</span></div>
                        <div className="sk-design-item item10" onClick={() => openModal('item10')}><span>طرح سیاه دوچ</span></div>
                        <button><span>طرح های بیشتر...</span></button>
                    </div>
                </div>

                <div className="sk-special-collection" data-aos="fade-left">
                    <h3>لباس‌های خاص و نگین‌کاری شده</h3>
                    <p>طرح اختصاصی شمیر کانچ، کامل زه‌دوزی شده، فوق‌العاده جذاب، خوشرنگ و خاص</p>

                    <div className="sk-quality-features">
                        <h4>مزایای محصولات شمیر کانچ:</h4>
                        <ul>
                            <li>دوخت با پارچه گیاهی و نگین الماش تراشه درجه یک</li>
                            <li>نگین‌ها کاملاً ثابت و از لباس جدا نمی‌شوند</li>
                            <li>کیفیت بسیار بالای پارچه و دوخت تضمینی</li>
                            <li>غیرقابل مقایسه با لباس‌های بی‌کیفیت وارداتی</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* مودال گالری */}
            {selectedDesign && (
                <div className="sk-modal-overlay" onClick={closeModal}>
                    <div className="sk-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="sk-modal-header">
                            <h3>{selectedDesign.title}</h3>
                            <p>{selectedDesign.description}</p>
                        </div>

                        <div className="sk-modal-gallery">
                            <div className="sk-main-image-container">
                                <button className="sk-nav-button sk-prev-button" onClick={prevImage}>›</button>
                                <img
                                    src={selectedDesign.images[currentImageIndex]}
                                    alt={selectedDesign.title}
                                    className="sk-main-image"
                                />
                                <button className="sk-nav-button sk-next-button" onClick={nextImage}>‹</button>

                                <div className="sk-image-counter">
                                    {currentImageIndex + 1} / {selectedDesign.images.length}
                                </div>
                            </div>

                            <div className="sk-thumbnails-container">
                                {selectedDesign.images.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`sk-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                        onClick={() => selectThumbnail(index)}
                                    >
                                        <img src={image} alt={`${selectedDesign.title} ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
export default Shproducts;