import React from "react";
import css from "./DesignGallery.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';

const DesignGallery: React.FC = () => {
  let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
  const [gallerydesign, setgallerydesign] = React.useState([]);

  React.useEffect(() => {
    let api = simpleCallInitAPI(`${assetpath}/assets/gallery.json`);
    api.then((data: any) => {
      setgallerydesign(data.data.gallery);
    })
      .catch(error => {
        console.log(error);
      });

  }, []);

  return (
    <React.Fragment>
      <header>
        <h2 className={css.heading}>Design Gallery</h2>
        <p className={css.paraheading}> If you’re on the lookout for simple home interior designs, look no further<br />
          than HomeLane for end- to-end interior design services.</p><br />
      </header>
      <div>{gallerydesign.length!=0? 
      <div className={"container "+css.outerLayer}>
        <div className="row">
          {gallerydesign.map((datas: any, index: number) => (
            <div className={"col-sm-6 col-md-4 "+css.card} key={`${datas.name}_${index}`}>
              <div className={css.gallerytitle}>{datas.title}</div>
              <div className={css.customimage}>
                <img
                  key={`${datas.name}_${index}`}
                  loading="lazy"
                  src={datas.image}
                  alt={datas.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      : <div>loading</div>
        }
      </div>
    </React.Fragment>
  );
};
export default DesignGallery;