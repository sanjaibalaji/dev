// import React, { useState } from 'react';
// import css from "../Faq/FAQPage.module.scss";
// import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// const faqData: FAQItem[] = [
//   { question: 'What Is Home Interior Design?', answer: 'React is a JavaScript library for building user interfaces.' },
//   { question: 'Why Is An Interior Designer Important?', answer: 'React is a JavaScript library for building user interfaces.' },
//   { question: 'What are the most important factors to keep in mind while designing a room?', answer: 'React is a JavaScript library for building user interfaces.' },
//   { question: 'Which Cities Is Lhome Operational In?', answer: 'React is a JavaScript library for building user interfaces.' }
// ];

// const FAQPage: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const [isLogged, setIsLogged] = useState<boolean>(false);

//   const toggleAnswer = (index: number) => {
//     if (activeIndex === index) {
//       setActiveIndex(null);
//       setIsLogged(false);
//     } else {
//       setActiveIndex(index);
//       setIsLogged(true);
//     }
//   };

//   return (
//     <React.Fragment>
//       <div className={css.faqContainer}>   
//         <h1 className={css.faqHead}>Frequently Asked Questions</h1>
//         <div className={css.faqInnerLayer}>
//           {faqData.map((faq, index) => (
//             <div key={index}>
//               <div className={css.faqQuestion} onClick={() => toggleAnswer(index)}>
//                 {faq.question}
//                 {isLogged ? <AiOutlineMinus className={css.faqIcon}/> : <AiOutlinePlus className={css.faqIcon} />}
//               </div>
//               {activeIndex === index && (
//                 <div className={css.faqAnswer}> 
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default FAQPage;
import * as React from "react";
import css from "../Faq/FAQPage.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FAQPage: React.FC = () => {
  let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
  const [faq, setFaq] = React.useState([]);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [isLogged, setIsLogged] = React.useState<boolean>(false);


  React.useEffect(() => {
      let api = simpleCallInitAPI(`${assetpath}/assets/faq.json`);
      api.then((data: any) => {

        let sectionOne = [];
        data.data.FAQs.faqBox.forEach((faqs: any) => {
            let faq: any = {};
            faq.question = faqs.question;
            faq.answer = faqs.answer;

            sectionOne.push(faq);
        });
        setFaq(sectionOne);
    })
}, []);

  const toggleAnswer = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      setIsLogged(false);
    } else {
      setActiveIndex(index);
      setIsLogged(true);
    }
  };

  return (
      <React.Fragment>
         <div className={css.faqContainer}>   
     <h1 className={css.faqHead}>Frequently Asked Questions</h1>
    <div className={css.faqInnerLayer}>
        {faq.map((faq, index) => (
            <div key={index}>
              <div className={css.faqBox} onClick={() => toggleAnswer(index)}>
                <div className={css.faqQuestion}>{faq.question}</div>
                <div className={css.faqIcon}>{isLogged ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
              </div>
              {activeIndex === index && (
                <div className={css.faqAnswer}> 
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
      </React.Fragment>
  )
}

export default FAQPage;


