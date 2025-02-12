import styles from './Button.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({ className, children, ...props }) {
    return (
        <button className={cx('button', className)} {...props}>
            {children}
        </button>
    );
}

export default Button;
