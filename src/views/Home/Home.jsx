import styles from './Home.module.css';
import classNames from 'classnames/bind';
import Slide from '../../components/Slide/Slide';
import BrowseRange from '../../components/BrowseRange/BrowseRange';


import Products from '../../components/Products/Products';
import Product from '../../components/Product/Product';
import Button from '../../components/Button/Button';
import Explore from '../../components/Explore/Explore';
import ShowPage from '../../components/ShowPage/ShowPage';



const cx = classNames.bind(styles);

function Home() {

    return (
        <div className={cx("home-page-container")}>
            <Slide />
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
            <ShowPage />
        </div>
    );
}

export default Home;