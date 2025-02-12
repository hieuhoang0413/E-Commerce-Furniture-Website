import styles from './BrowseRangeCard.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function BrowseRangeCard({ image }) {
    return (
        <div className={cx("browse-range-card")}>
            <div className={cx("card-img")}>
                <img src={image} alt="placeholder" />
            </div>

            <div className={cx("card-name")}>
                <h3>Product Name</h3>
            </div>
        </div>
    );
}

export default BrowseRangeCard;