import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Footer.module.css';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx("footer")}>
            <div className={cx("footer-about-us")}>
                <h1 className={cx("footer-brand")}>Funiro.</h1>
                <p className={cx("footer-describe")}>400 University Drive Suite 200 Coral Gables,</p>
                <p className={cx("footer-describe")}>FL 33134 USA</p>
            </div>

            <div className={cx("footer-page-links")}>
                <p>Links</p>
                <ul className="page-link-list">
                    <li><Link className={cx("page-link")} to="/">Home</Link></li>
                    <li><Link className={cx("page-link")} to="/shop">Shop</Link></li>
                    <li><Link className={cx("page-link")} to="/about">About</Link></li>
                    <li><Link className={cx("page-link")} to="/contact">Contact</Link></li>
                </ul>
            </div>

            <div className={cx("footer-support-links")}>
                <p>Help</p>
                <ul className={cx("support-link-list")}>
                    <li>Payment Options</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                </ul>
            </div>

            <div className={cx("footer-get-notified")}>
                <p>Newsletter</p>
                <form className={cx('form-get-notified')}>
                    <input
                        className={cx('input-get-notified')}
                        type="email"
                        placeholder="Enter Your Email Address"
                        required
                    />
                    <Button className={cx('footer-button')} type="submit">
                        SUBSCRIBE
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Footer;