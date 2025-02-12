import Home from "../views/Home/Home.jsx";
import About from "../views/About/About.jsx";
import Contact from "../views/Contact/Contact.jsx";
import Product from "../views/Product/Product.jsx";
import Service from "../views/Service/Service.jsx";
import Shop from "../views/Shop/Product.jsx";

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/product',
        element: <Product />
    },
    {
        path: '/service',
        element: <Service />
    },
    {
        path: '/shop',
        element: <Shop />
    }
]

export default routes;