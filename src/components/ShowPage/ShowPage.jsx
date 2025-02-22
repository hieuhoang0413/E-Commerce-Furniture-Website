import styles from './ShowPage.module.css';
import classNames from 'classnames/bind';

import img1 from '../../assets/images/show-page-img/img1.jpg';
import img2 from '../../assets/images/show-page-img/img2.jpg';
import img3 from '../../assets/images/show-page-img/img3.jpg';
import img4 from '../../assets/images/show-page-img/img4.jpg';
import img5 from '../../assets/images/show-page-img/img5.jpg';
import img6 from '../../assets/images/show-page-img/img6.jpg';
import img7 from '../../assets/images/show-page-img/img7.jpg';
import img8 from '../../assets/images/show-page-img/img8.jpg';
import img9 from '../../assets/images/show-page-img/img9.jpg';

const cx = classNames.bind(styles);

const images = [
    {
        id: 1,
        src: img1,
    },
    {
        id: 2,
        src: img2,
    },
    {
        id: 3,
        src: img3,
    },
    {
        id: 4,
        src: img4,
    },
    {
        id: 5,
        src: img5,
    },
    {
        id: 6,
        src: img6,
    },
    {
        id: 7,
        src: img7,
    },
    {
        id: 8,
        src: img8,
    },
    {
        id: 9,
        src: img9,
    },
];

function ShowPage() {
    return (
        <div className={cx("show-page-container")}>
            <div className={cx("show-page-title")}>
                <h2>Share your setup with</h2>
                <h1>#FuniroFurniture</h1>
            </div>

            <div className={cx("show-page")}>
                {images.map((image) => (
                    <div key={image.id} className={cx("show-page-item", `show-page-item-${image.id}`)}>
                        <img src={image.src} className={cx("show-page-img")} alt={`img-${image.id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShowPage;