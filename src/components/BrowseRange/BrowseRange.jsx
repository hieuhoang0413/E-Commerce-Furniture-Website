import styles from './BrowseRange.module.css';
import classNames from 'classnames/bind';
import BrowseRangeCard from '../BrowseRange/BrowseRangeCard.jsx';

import img1 from '../../assets/images/browse-range-img/pexels-alex-qian-1180283-2343469.jpg';
import img2 from '../../assets/images/browse-range-img/pexels-pixabay-462235.jpg';
import img3 from '../../assets/images/browse-range-img/pexels-pixabay-534172.jpg';

const cx = classNames.bind(styles);

function BrowseRange() {
    return (
        <div className={cx("browse-range")}>
            <div className={cx("browse-range-title")}>
                <h1>Browse The Range</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            </div>

            <div className={cx("browse-range-cards")}>
                <BrowseRangeCard image={img1} />
                <BrowseRangeCard image={img2} />
                <BrowseRangeCard image={img3} />
            </div>
        </div>
    );
}

export default BrowseRange;