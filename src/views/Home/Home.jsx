import styles from './Home.module.css';
import classNames from 'classnames/bind';
import Slide from '../../components/Slide/Slide';
import BrowseRange from '../../components/BrowseRange/BrowseRange';

import img1 from '../../assets/images/slide-img/scandinavian-interior-mockup-wall-decal-background 1.png';
import img2 from '../../assets/images/slide-img/pexels-fotoaibe-1571468.jpg';
import img3 from '../../assets/images/slide-img/pexels-fotoaibe-1643383.jpg';
import img4 from '../../assets/images/slide-img/pexels-fotoaibe-1669799.jpg';
import img5 from '../../assets/images/slide-img/pexels-jvdm-1543447.jpg';
import img6 from '../../assets/images/slide-img/pexels-pixabay-259580.jpg';
import Products from '../../components/Products/Products';
import Product from '../../components/Product/Product';
import Button from '../../components/Button/Button';
import Explore from '../../components/Explore/Explore';

const collection = [
    { src: img1, caption: "Caption one" },
    { src: img2, caption: "Caption two" },
    { src: img3, caption: "Caption three" },
    { src: img4, caption: "Caption four" },
    { src: img5, caption: "Caption five" },
    { src: img6, caption: "Caption six" },
];

const cx = classNames.bind(styles);

function Home() {

    return (
        <div className={cx("home-page-container")}>
            <Slide
                input={collection}
                mode={`automatic`}
                timeout={`10000`}
            />

            <BrowseRange />

            <div className={cx("home-page-products")}>
                <h1>Our Products</h1>
                <Products>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </Products>
                <Button className={cx("show-more-btn")}>Show More</Button>
            </div>

            <Explore />
        </div>
    );
}

export default Home;