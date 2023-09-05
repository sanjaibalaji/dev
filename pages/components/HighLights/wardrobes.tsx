import React from "react";
import css from "./HighLights.module.scss"
import { simpleCallInitAPI } from "../../../services/ApicallInit";
import * as config from "../../../next.config.js";
import CustomLeftArrow from "./CustomLeftArrow";
import CustomRightArrow from "./CustomRightArrow";
import Carousel from "react-multi-carousel";


const Wardrobes: React.FC = () => {

    //assetspath 
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    
    //wishlist image 
    const [wishlistimage, setWishListImage] = React.useState("");
    const [wishlistalt, setWishListAlt] = React.useState("");

    //sharelist image
    const [shareiconimage, setShareIconImage] = React.useState("");
    const [sharealt, setShareAlt] = React.useState("");

    //data of top picks
    const [wardrobefly, setWordrobeFly] = React.useState([]);


    //use effect for getting data from api
    React.useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);

        api
            .then((data: any) => {
                setWishListImage(`${assetpath}${data.data.settings.wishlistimage}`);
                setWishListAlt(`${assetpath}${data.data.settings.wishlistAlt}`);
                setShareIconImage(`${assetpath}${data.data.settings.shareiconimage}`);
                setShareAlt(`${assetpath}${data.data.settings.shareAlt}`);
                let lwardrobefly = [];
                data.data.settings.warddrobefly.forEach((datas: any) => {
                   let lc: any = {};
                   lc.image = `${assetpath}${datas.image}`;
                   lc.name = datas.name;
                   lc.subname = datas.subname;
                   lc.size = datas.size
                   lwardrobefly.push(lc);
                });
                setWordrobeFly(lwardrobefly);
                
            }
            )
            .catch((error) => {
                console.log(error)
            })
    }, [assetpath])

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
             <div className={css.wardrobesfly}>
                  <div className={"container "+css.listingOuterLayer}>
                    <div className={css.warddrobeflytitle}>
                      Wardrobes That Fly Off the Shelves
                    </div>
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

                    {wardrobefly.map((datas: any, index: number) => (
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
                </div>
        </React.Fragment>
    )

}

export default Wardrobes;