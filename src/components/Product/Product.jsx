import styles from './Product.module.css';
import classNames from 'classnames/bind';
import productImage from '../../assets/images/products/image 1.png'

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx("product")}>
            <div className={cx("product-image")}>
                <img src={productImage} alt="" />
            </div>
            <div className={cx("product-info")}>
                <h2 className={cx("product-name")}>
                    Syltherine
                </h2>
                <h3 className={cx("product-sort-description")}>
                    Stylish cafe chair
                </h3>
                <div className={cx("product-price")}>
                    <p className={cx("sale-price")}>Rp 2.500.000</p>
                    <p className={cx("origin-price")}>Rp 3.500.000</p>
                </div>
            </div>
        </div>
    );
}

export default Product;