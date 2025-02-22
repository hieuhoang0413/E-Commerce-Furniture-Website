import styles from './Slide.module.css';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx';

import img1 from '../../assets/images/slide-img/scandinavian-interior-mockup-wall-decal-background 1.png';
import img2 from '../../assets/images/slide-img/pexels-fotoaibe-1571468.jpg';
import img3 from '../../assets/images/slide-img/pexels-fotoaibe-1643383.jpg';
import img4 from '../../assets/images/slide-img/pexels-fotoaibe-1669799.jpg';
import img5 from '../../assets/images/slide-img/pexels-jvdm-1543447.jpg';
import img6 from '../../assets/images/slide-img/pexels-pixabay-259580.jpg';

const cx = classNames.bind(styles);

const collection = [
    { src: img1, caption: "Caption one" },
    { src: img2, caption: "Caption two" },
    { src: img3, caption: "Caption three" },
    { src: img4, caption: "Caption four" },
    { src: img5, caption: "Caption five" },
    { src: img6, caption: "Caption six" },
];

function Slide() {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(prevIndex => (prevIndex + 1) % collection.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={cx("slide-show")}>
            <div className={cx("slide-container")}>
                <div className={cx("slide")}>
                    <img className={cx("image")} src={collection[slideIndex].src} alt={collection[slideIndex].caption} />
                </div>
            </div>

            <div className={cx("slide-content-container")}>
                <h3>New Arrival</h3>
                <h1>Discover Our New Collection</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</h2>
                <Link to='/shop'><Button className={cx('slide-button')}>BUY NOW</Button></Link>
            </div>
        </div>
    )
}

export default Slide;