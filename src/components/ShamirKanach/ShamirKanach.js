import './ShamirKanach.css';
import Shproducts from '../Shproducts/Shproducts';

// ShamirKanach component | کامپوننت شمیر کانچ
const ShamirKanach = () => {
    return (
        <div className="sk-shamir-kanach">

            <section className="sk-intro-section">
                <div className="sk-container" data-aos="fade-right">
                    <h2>شمیر کانچ بزرگ‌ترین تولیدکننده لباس بلوچی در سطح استان</h2>
                    <div className="sk-features">
                        <div className="sk-feature-item">
                            <span className="sk-icon">✓</span>
                            <span>تولیدات باکیفیت، قیمت مناسب</span>
                        </div>
                        <div className="sk-feature-item">
                            <span className="sk-icon">✓</span>
                            <span>محصولات متنوع و منحصربه‌فرد</span>
                        </div>
                        <div className="sk-feature-item">
                            <span className="sk-icon">✓</span>
                            <span>کاتالوگ آنلاین و همیشه به‌روز</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sk-why-us">
                <div className="sk-container">
                    <h2 className="sk-section-title" data-aos="fade-up">چرا شمیر کانچ بزرگ‌ترین تولیدکننده است؟</h2>

                    <div className="sk-reasons-grid" data-aos="fade-left">
                        <div className="sk-reason-card">
                            <h3>تولید انبوه با کیفیت</h3>
                            <p>هر طرحی که در کارگاه شمیر کانچ طراحی می‌شود، بیش از هزار عدد از آن طرح و رنگ تولید و دوخته می‌شود.</p>
                        </div>

                        <div className="sk-reason-card">
                            <h3>تجربه و اصالت</h3>
                            <p>شمیر کانچ با دو کارگاه گلدوزی در چابهار و تهران و بیش از ۱۵ سال سابقه، یکی از قدیمی‌ترین کارگاه‌های تولیدی در استان می‌باشد.</p>
                        </div>

                        <div className="sk-reason-card">
                            <h3>مسئولیت اجتماعی</h3>
                            <p>نیروی کار کارگاه‌ها و دفتر شمیر کانچ در چابهار و تهران از جوانان بومی استان هستند که باعث اشتغال‌زایی ده‌ها خانوار شده‌ایم.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Shproducts />

            <section className="sk-materials-section">
                <div className="sk-container" data-aos="fade-down">
                    <h2 className="sk-section-title">پارچه‌های مورد استفاده</h2>
                    <div className="sk-materials-grid">
                        <div className="sk-material-item">
                            <h4>پارچه پلیس گیاهی</h4>
                            <p>با کیفیت عالی و تنفس‌پذیری مناسب</p>
                        </div>
                        <div className="sk-material-item">
                            <h4>پارچه ساتن لیزری</h4>
                            <p>با ظاهری درخشان و لوکس</p>
                        </div>
                        <div className="sk-material-item">
                            <h4>پارچه کرپ</h4>
                            <p>سبک، مقاوم و با قابلیت انعطاف بالا</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sk-equipment-section">
                <div className="sk-container" data-aos="fade-down">
                    <h2 className="sk-section-title">تجهیزات پیشرفته</h2>
                    <p>واردکننده دستگاه‌های گلدوزی صنعتی و انواع قطعات با آخرین تکنولوژی روز</p>
                    <p>فروش دستگاه های گلدوزی از یک کله تابیست کله</p>
                </div>
            </section>

        </div>
    );
};

export default ShamirKanach;
