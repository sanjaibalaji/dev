import React from "react";
import Carousel from "react-multi-carousel";
import css2 from './Autoplay.module.scss';
import CustomLeftArrow from "./CustomLeftArrow";
import CustomRightArrow from "./CustomRightArrow";
import "react-multi-carousel/lib/styles.css";

interface playproperties {
  living: any
}

const Autoplay: React.FC<playproperties> = ({ living }) => {

  const [activeSlide, setActiveSlide] = React.useState(0);
  const [centerImageIndex, setCenterImageIndex] = React.useState<number>(1);

  const sliderImageUrl = [
    {
      url: "/assets/bottomcarousel/Maskgroup.svg",
      url2: "/assets/icons/play.png",
    },
    {
      url: "/assets/bottomcarousel/Maskgroup.svg",
      url2: "/assets/icons/play.png",
    },
    {
      url: "/assets/bottomcarousel/Maskgroup.svg",
      url2: "/assets/icons/play.png",
    },
    {
      url: "/assets/bottomcarousel/Maskgroup.svg",
      url2: "/assets/icons/play.png",
    },
    {
      url: "/assets/bottomcarousel/Maskgroup.svg",
      url2: "/assets/icons/play.png",
    }, {
      url: "/assets/bottomcarousel/Maskgroup.svg",
      url2: "/assets/icons/play.png",
    },

  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 601 },
      items: 2,
      slidesToSlide: 1,
    },
    mini: {
      breakpoint: { max: 600, min: 200 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const handleSlideChange = (currentSlide: number) => {
    setActiveSlide(currentSlide);
    let centerIndex = (currentSlide + 2) % sliderImageUrl.length; 
    setCenterImageIndex(centerIndex);
};


  return (
    <React.Fragment>
      <div ref={living} className={css2.living}>
        <div className={css2.toppickstitle}>
          Contented Living with Lhome
        </div>
        <div className={"container "+css2.bottomcarousel}>
          <Carousel

            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={true}
            dotListClass={
              "custom-dot-list-style " + css2.customDotListStyle

            }
            customLeftArrow={<CustomLeftArrow onClick={() => { }} />}
            customRightArrow={<CustomRightArrow onClick={() => { }} />}

            afterChange={handleSlideChange}
          >
            {
              sliderImageUrl.map((imageUrl, index) => {
                console.log("Rendering slide index:", index, "Center Image Index:", centerImageIndex);

                return (
                  <div className="slider p-4 highlightImage" key={index}>
                    <img
                      className={`${css2.maskgroupimage} ${index === centerImageIndex ? css2.centeredImage : ''}`}
                      src={imageUrl.url}
                      alt="lhome"
                    />
                    {/* {index === centerImageIndex && (
                      <div className={css2.activeOverlay}>John and Family</div>
                    )} */}
                  </div>
                );
              })
            }

          </Carousel>
        </div>
      </div>
    </React.Fragment>
  )


}

export default Autoplay;