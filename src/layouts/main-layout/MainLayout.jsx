import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './MainLayout.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    );
}

export default MainLayout;