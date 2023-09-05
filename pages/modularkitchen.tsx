import * as React from "react";
import * as config from "../next.config.js";
import PageHeader from "./components/PageHeader";
import css from "../styles/modularkitchen.module.scss";
import Footer from "./components/Footer/Footer";
import KitchenBaner from "./components/ModularKitchen/kitchenbaner";
import Autoplay from "./components/Autoplayslider/Autoplayslider";
import ReferNowPage from "./components/ReferNow/ReferNowPage";
import Warranty from "./components/warranty/Warranty";
import KitchenFilter from "./components/ModularKitchen/filter/filter";
import Guranted from "./components/Guranted/Guranted";
import FAQPage from "./components/Faq/FAQPage";


const DesignGalleryPage: React.FC = () => {
    const living= React.useRef(null);
    const [screenwidth, setWidth] = React.useState(window.innerWidth);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    let hgtt = 0;
    if (window.innerWidth < 600) {
        hgtt = window.innerHeight - 210;
        if (window.innerWidth > 490 && window.innerWidth < 512) {
            hgtt += 10;
        }
    } else {
        hgtt = window.innerHeight - 160;
    }
    const [screenheight, setHeight] = React.useState(hgtt);


    const handleResize = React.useCallback(() => {
        setWidth(window.innerWidth);
        let hgtt = 0;
        if (window.innerWidth < 600) {
            hgtt = window.innerHeight - 210;
            if (window.innerWidth > 490 && window.innerWidth < 512) {
                hgtt += 10;
            }
            if (window.innerWidth > 571 && window.innerWidth < 599) {
                hgtt += 50;
            }
            if (window.innerWidth > 570 && window.innerWidth < 572) {
                hgtt += 45;
            }
            if (window.innerWidth > 509 && window.innerWidth < 571) {
                hgtt += 25;
            }
            if (window.innerWidth > 500 && window.innerWidth < 510) {
                hgtt += 15;
            }
            if (window.innerWidth < 500) {
                hgtt -= 10;
            }
        } else {
            hgtt = window.innerHeight - 160;
        }
        setHeight(hgtt);
    }, []);

    const handleResized = React.useCallback(() => {
        setTimeout(() => {
            handleResize();
        }, 1000);
    }, [handleResize]);


    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResized);
    }, [handleResize, handleResized]);

    React.useEffect(() => {
        setTimeout(() => {
            handleResize();
        }, 500);
    }, [handleResize]);

    const routechanged = (e) => {
        setTimeout(() => {
            handleResize();
        }, 1000);
    }

    return (
        <React.Fragment>
            <div className="animate-fade-in">
                <div className={css.lhomePage}>
                    <PageHeader screenwidth={screenwidth} screenheight={screenheight} assetpath={assetpath} />
                    <div className={css.LhomeBottom}>
                    <div><KitchenBaner /></div>
                    <div className={css.kitchenfilterComponent}><KitchenFilter /></div>
                    <div><Autoplay living={living}/></div>
                    <div><ReferNowPage /></div>
                    <div><Warranty /></div>
                    <div><FAQPage /></div>
                    <div><Guranted /></div>
                        <div><Footer /></div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}
export default DesignGalleryPage;
  