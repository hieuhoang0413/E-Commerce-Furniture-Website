import Button from '../Button/Button';
import styles from './Explore.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Explore() {
    return (
        <div className={cx("explore-container")}>
            <div className={cx("explore-content")}>
                <h1>50+ Beautiful rooms inspiration</h1>
                <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <Button className={cx("explore-btn")}>Explore More</Button>
            </div>
            <div className={cx("explore-products")}>
                
            </div>
        </div>
    );
}

export default Explore;