import Button from '../Button/Button';
import styles from './Explore.module.css';
import classNames from 'classnames/bind';
import { useRef, useState, useEffect } from 'react';

import livingRoom from '../../assets/images/explore-slider/living-room.jpg';
import bedroom from '../../assets/images/explore-slider/bedroom.jpg';
import kitchen from '../../assets/images/explore-slider/kitchen.jpg';
import sofa from '../../assets/images/explore-slider/sofa.jpg';

const exploreItems = [
    {
        id: 1,
        name: "Bed Room",
        title: "Inner Peace",
        image: bedroom
    },
    {
        id: 2,
        name: "Kitchen",
        title: "Meal Time",
        image: kitchen
    },
    {
        id: 3,
        name: "Living Room",
        title: "Family Time",
        image: livingRoom
    },
    {
        id: 4,
        name: "Sofa",
        title: "Relax Time",
        image: sofa
    }
];

const cx = classNames.bind(styles);

function Explore() {
    const [active, setActive] = useState(0);

    let slider = useRef(null);
    let sliderItems = useRef([]);
    let dots = useRef([]);

    const nextSlide = () => {
        setActive((prevActive) => (prevActive + 1 <= exploreItems.length - 1 ? prevActive + 1 : 0));
    }

    const handleDotClick = (index) => {
        setActive(index);
    }

    useEffect(() => {
        if (slider.current && sliderItems.current[active]) {
            const sliderWidth = 396;
            slider.current.style.transform = `translateX(-${sliderWidth * active}px)`;
        }
    }, [active]);

    return (
        <div className={cx("explore-container")}>
            <div className={cx("explore-content")}>
                <h1>50+ Beautiful rooms inspiration</h1>
                <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <Button className={cx("explore-btn")}>Explore More</Button>
            </div>
            <div className={cx("explore-products")}>
                <div ref={slider} className={cx("explore-slider")}>
                    {exploreItems.map((exploreItem, index) => (
                        <div
                            className={cx("explore-slider-item", { active: index === active })}
                            onClick={() => setActive(index)}
                            key={index}
                            ref={(el) => (sliderItems.current[index] = el)}
                        >
                            <img src={exploreItem.image} alt="placeholder" />
                        </div>
                    ))}
                </div>

                <div className={cx("explore-slider-controls")}>
                    <div className={cx("explore-slider-img-name")}>
                        <h2>
                            0{exploreItems[active].id}
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="2" viewBox="0 0 27 2" fill="none">
                                <path d="M0 1H27" stroke="#616161" />
                            </svg>
                            {exploreItems[active].name}
                        </h2>
                        <h1>{exploreItems[active].title}</h1>
                    </div>
                    <Button className={cx("explore-slider-btn")} onClick={nextSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21 12H3M21 12L15 6M21 12L15 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Button>
                </div>

                <div className={cx("explore-slider-dots-control")}>
                    <ul className={cx("explore-slider-dots")}>
                        {exploreItems.map((exploreItem, index) => (
                            <li
                                onClick={() => handleDotClick(index)}
                                key={index}
                                ref={(el) => (dots.current[index] = el)}
                                className={cx("explore-slider-dot", { active: index === active })}
                            ></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Explore;