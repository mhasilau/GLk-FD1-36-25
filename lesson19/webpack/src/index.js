import {PATH, locations} from './config/location';
import {links} from './config/links';
import {page1} from "./components/page1/page1";
import './styles/style.scss'
import './components/page1/page1.scss'
import './components/page2/page2.scss'
import {page2} from "./components/page2/page2";

window.onload = () => {
    const pathURL = window.location.pathname;
    console.log(pathURL);

    switch (pathURL) {
        case locations.main:
            links();
            break;
        case locations.page1:
            links();
            page1()
            break;
        case locations.page2:
            links();
            page2()
            break;
        case locations.page3:
            links();
            break;
        default:
            window.locations.href = PATH.main;
            break;
    }
};
