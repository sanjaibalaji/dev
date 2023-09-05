import * as React from "react";
import css from './HighLights.module.scss';
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import TopPicksForKitchen from  "./topics";
import Wardrobes from "./wardrobes";
import CustomLeftArrow from "./CustomLeftArrow";
import CustomRightArrow from "./CustomRightArrow";
import Carousel from "react-multi-carousel";


const StylishHomeProducts: React.FC = () => {
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    const [trendings, setTrendings] = React.useState([]); 
    const [wishlistimage, setWishListImage] = React.useState("");
    const [wishlistalt, setWishListAlt] = React.useState("");

    const [shareiconimage, setShareIconImage] = React.useState("");
   const [sharealt, setShareAlt] = React.useState("");
    React.useEffect(() => {
    let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
    api.then((data: any) => {
        let ltrendings = [];
         data.data.settings.trendings.forEach((datas: any) => {
            let lc: any = {};
            lc.image = `${assetpath}${datas.image}`;
            lc.name = datas.name;
            lc.subname = datas.subname;
            lc.size = datas.size
            ltrendings.push(lc);
         });
         setTrendings(ltrendings);
         setWishListImage(`${assetpath}${data.data.settings.wishlistimage}`);
         setWishListAlt(`${assetpath}${data.data.settings.wishlistAlt}`);
         setShareIconImage(`${assetpath}${data.data.settings.shareiconimage}`);
         setShareAlt(`${assetpath}${data.data.settings.shareAlt}`);
    })
    .catch(error => {
        console.log(error);
    });
 }, [assetpath]);

 const responsive = {
  desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
  },
  tablet: {
      breakpoint: { max: 1024, min: 650 },
      items: 2,
      slidesToSlide: 1,
  },
  mobile: {
      breakpoint: { max: 650, min: 350 },
      items: 1,
      slidesToSlide: 1,
  },

};


   return (
      <React.Fragment>
        <div className={css.mainhighlights}>
         <div className={css.highlights}>
          
                <div className={"container "+css.trendingoffice}>
                  <div className={css.trendingtitle}>Trending</div>

                  <Carousel

                    responsive={responsive}
                    autoPlay={false}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    infinite={true}
                    partialVisible={true}
                    dotListClass={
                        "custom-dot-list-style "
                    }
                    customLeftArrow={<CustomLeftArrow onClick={() => { }} />}
                    customRightArrow={<CustomRightArrow onClick={()=>{ }}/>}
                >

                    {trendings.map((datas: any, index: number) => (
                        <div
                            key={`${datas.subname}_${index}_${index}`}
                            className={css.customdivision}
                        >
                            <div className={css.customdivisionchild}>
                                <div className={css.customimage}>
                                    <img
                                        key={`${datas.subname}_${index}`}
                                        loading="lazy"
                                        src={datas.image}
                                        alt={datas.subname}
                                    />
                                    <div className={css.customlist}>
                                        <div className={css.customname}>
                                            {datas.name}
                                            <span className={css.wishlistholder}>
                                                <img
                                                    loading="lazy"
                                                    className={css.wishlist}
                                                    src={wishlistimage}
                                                    alt={wishlistalt}
                                                />
                                            </span>
                                            <span className={css.shareholder}>
                                                <img
                                                    loading="lazy"
                                                    className={css.share}
                                                    src={shareiconimage}
                                                    alt={sharealt}
                                                />
                                            </span>
                                        </div>
                                        <label className={css.customtext}>
                                            {datas.size}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
                </div>
                
                <div><TopPicksForKitchen /></div>
                <div><Wardrobes /></div>
              </div>
              </div>
      </React.Fragment>
   )
}

export default StylishHomeProducts;