import React from 'react';
import './Contact.css';
import { FaInstagram, FaTelegram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

// Contact component | کامپوننت تماس با ما
const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <h2>تماس با ما</h2>
                    <p>آماده پاسخگویی به سوالات و دریافت سفارشات شما هستیم</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>آدرس‌ها</h3>
                        <div className="address-item">
                            <h4>تهران</h4>
                            <p>خیابان وحدت اسلامی، میدان وحدت اسلامی، ابتدای فروزش</p>
                            <br />
                            <h4>چابهار</h4>
                            <p>بلوارد شهید ریگی، جنب مدرسه دینی، گلدوزی کامپیوتری شیما</p>
                        </div>

                        <div className="social-links">
                            <h4>شبکه‌های اجتماعی</h4>
                            <div className="social-icons">
                                <a href="/" className="social-icon">@shemir.kanch.cfz</a>
                                <a href="/" className="social-icon">@shemir.doch</a>
                                <a href="/" className="social-icon">@shemir.belts</a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h3>ارسال پیام</h3>
                        <form>
                            <div className="form-group">
                                <input type="text" placeholder="نام شما" />
                            </div>
                            <div className="form-group">
                                <input type="tel" placeholder="شماره تماس" />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="پیام شما" rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn-primary">ارسال پیام</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer | فوتر */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <h3>شمیر کانچ</h3>
                            <p>هنر، اصالت و نوآوری در گلدوزی</p>
                        </div>

                        <div className="footer-links" data-aos="fade-up">
                            <a href="/"><FaInstagram /></a>
                            <a href="/"><FaYoutube /></a>
                            <a href="/"><FaTelegram /></a>
                            <a href="/"><FaWhatsapp /></a>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>© {new Date().getFullYear()} شمیر کانچ - تمام حقوق محفوظ است</p>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
