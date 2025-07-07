import {PATH, locations} from './config/location';
import {links} from './config/links';

window.onload = () => {
    const pathURL = window.location.pathname;
    console.log(pathURL);

    switch (pathURL) {
        case locations.main:
            links();
            break;
        case locations.page1:
            links();
            break;
        case locations.page2:
            links();
            break;
        case locations.page3:
            links();
            break;
        default:
            window.locations.href = PATH.main;
            break;
    }
};
