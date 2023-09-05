import * as React from "react";
import * as config from "../next.config.js";
import "react-multi-carousel/lib/styles.css";
import PageHeader from "./components/PageHeader";
import DesignGalleryBanner from "./components/DesignGalleryBanner/DesignGallery";
import DesignGallery from "./components/DesignGallery/DesignGallery";
import WhyLhome from "./components/whyLhome/whyLhome";
import TopPicksForKitchen from "./components/HighLights/topics";
import Wardrobes from "./components/HighLights/wardrobes";
import css from "../styles/designgallery.module.scss";
import StylishHomeProducts from "./components/StylishHomeProducts/StylishHomeProducts";
import Autoplay from "./components/Autoplayslider/Autoplayslider";
import FAQPage from "./components/Faq/FAQPage";
import ReferNowPage from "./components/ReferNow/ReferNowPage";
import Footer  from "./components/Footer/Footer";
import Warranty from "./components/warranty/Warranty";
import Guranted from "./components/Guranted/Guranted";
import Interior from "./components/Designinterior/Interior";


const DesignGalleryPage: React.FC = () => {

       const [screenwidth, setWidth] = React.useState(window.innerWidth); 
   let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
  let hgtt = 0;
  if (window.innerWidth<600){
      hgtt = window.innerHeight-210; 
      if (window.innerWidth > 490 && window.innerWidth < 512){
          hgtt += 10;
      }
  }else{
       hgtt = window.innerHeight-160;
  }
  const [screenheight, setHeight] = React.useState(hgtt);  

  const handleResize = React.useCallback(()=>{
     setWidth(window.innerWidth);
     let hgtt = 0;
     if (window.innerWidth<600){
         hgtt = window.innerHeight-210; 
         if (window.innerWidth > 490 && window.innerWidth < 512){
             hgtt += 10;
         }
         if (window.innerWidth > 571 && window.innerWidth < 599){
             hgtt += 50;
         }
         if (window.innerWidth > 570 && window.innerWidth < 572){
             hgtt += 45;
         }
         if (window.innerWidth > 509 && window.innerWidth < 571){
             hgtt += 25;
         }
         if (window.innerWidth > 500 && window.innerWidth < 510){
             hgtt += 15;
         }
         if (window.innerWidth < 500){
             hgtt -= 10;
         }
     }else{
         hgtt = window.innerHeight-160;
     }
     setHeight(hgtt);
  },[]);

  const handleResized = React.useCallback(()=>{
    setTimeout(()=>{
       handleResize();
    },1000);
  },[handleResize]);


  React.useEffect(() => {
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResized);
  }, [handleResize,handleResized]);

  React.useEffect(()=>{
    setTimeout(()=>{
       handleResize();
    },500);
  },[handleResize]);

  const routechanged = (e)=>{
    setTimeout(()=>{
       handleResize();
    },1000);
  }
   const living = React.useRef(null);

   const Cclass: string = "peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        
   
   return (
      <React.Fragment>
         <div className="animate-fade-in">
            <div className={css.lhomePage}>
               <PageHeader screenwidth={screenwidth} screenheight={screenheight} assetpath={assetpath} />
               <div className={css.LhomeBottom}>
           <div><DesignGalleryBanner /></div>
         <div><DesignGallery /></div>
         <div><WhyLhome screenwidth={screenwidth} screenheight={screenheight} /></div>
         <div className={"mb-3 "+css.ToppicsdivforDesignGallery}><TopPicksForKitchen />
          <Wardrobes /></div>
          <div><Interior /></div>
          <div><StylishHomeProducts /></div>
          <div><Autoplay living={null} /></div>
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