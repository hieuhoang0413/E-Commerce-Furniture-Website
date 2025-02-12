import styles from './Products.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Products({ children }) {
    return (
        <div className={cx("products-container")}>
            {children}
        </div>
    );
}

export default Products;