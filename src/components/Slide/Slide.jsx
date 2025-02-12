import styles from './Slide.module.css';
import classNames from 'classnames/bind';
import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx';

const cx = classNames.bind(styles);

function Slide({ input, ratio, mode, timeout = 5000 }) {
    const [slideIndex, setSlideIndex] = useState(0);

    const getNewSlideIndex = useCallback((step) => {
        const numberSlide = input.length;
        let newSlideIndex = slideIndex + step;
        if (newSlideIndex >= numberSlide) {
            newSlideIndex = 0;
        } else if (newSlideIndex < 0) {
            newSlideIndex = numberSlide - 1;
        }
        return newSlideIndex;
    }, [input, slideIndex]);

    useEffect(() => {
        let automaticInterval;
        if (mode === 'automatic') {
            automaticInterval = setInterval(() => {
                setSlideIndex(getNewSlideIndex(1));
            }, timeout);
        }

        return () => {
            if (automaticInterval) {
                clearInterval(automaticInterval);
            }
        }
    }, [slideIndex, mode, timeout, getNewSlideIndex]);

    return (
        <div className={cx("slide-show")}>
            <div className={cx("slide-container")}>
                {input.map((image, index) => {
                    return (
                        <div
                            key={index}
                            className={cx("slide", { active: slideIndex === index })}
                        >
                            <img className={cx("image")} src={image.src} alt={image.caption} />
                        </div>
                    );
                })}
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