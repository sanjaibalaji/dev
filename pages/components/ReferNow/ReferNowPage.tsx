
import * as React from "react";
import css from './ReferNowPage.module.scss';
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';

const ReferNowPage: React.FC = () => {
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    const [referboyimage, setReferBoyImage] = React.useState("");
    const [referboyalt, setReferBoyAlt] = React.useState("");React.useEffect(() => {
    let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
    api.then((data: any) => {
       setReferBoyImage(`${assetpath}${data.data.settings.referboyimage}`);
       setReferBoyAlt(`${assetpath}${data.data.settings.referboyalt}`);
    })
    .catch(error => {
        console.log(error);
    });
 }, [assetpath]);

   return (
      <React.Fragment>
         <div className={css.referNow} >
         <div className={css.referNowOuter} >
            <img loading="lazy" src={referboyimage} className={css.referman} alt={referboyalt} />     
            <div>
               <div className={css.refermanmaintext}>Love our service? Recommend us!</div>
               <div className={css.refermansubtext}>Earn ₹ 10,000 for every friend who tries LHome.</div>
               <div className={css.refermanbuttonholder}>
                  <button>Refer Now</button>
               </div>
               </div> 
            </div>
        </div>
      </React.Fragment>
   )
}

export default ReferNowPage;