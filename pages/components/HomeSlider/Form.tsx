import React from 'react';
import css from './Form.module.scss';

const Form: React.FC = () => {
    return (


        <div className={css.designermeetholder}>
            <div className={css.designermeet}>
                <div className={css.designermeettitle}>
                    Meet a designer
                </div>
                <div id="formentry" className={`flex  gap-6 ${css.inputbox}`}>
                    <div className={`relative h-11 w-full min-w-[200px] ${css.marginmove_5}`}>
                        <input
                            placeholder="Enter your name"
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        </label>
                    </div>
                    <div className={`relative h-11 w-full min-w-[200px] ${css.marginmove_2}`}>
                        <input
                            placeholder="Enter your Email"
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        </label>
                    </div>
                </div>
                <div className="flex  gap-6" style={{ width: "100%" }}>
                    <div className={`relative h-11 w-full min-w-[200px] ${css.marginmovebig_2}`}>
                        <input
                            placeholder="Enter your Mobile Number"
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        </label>
                    </div>
                </div>
                <div className={css.whatsappdetailsholder}>
                    <label className={css.whatsapplabel}>
                        <div className={css.label1}>you can reach me on whatsApp</div>
                        <div className={css.label2}>opt for meeting and offer updates on WhatsApp</div>
                        <label className={`inline-flex items-center ${css.whatsappcheckbox}`}>
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                        </label>
                    </label>
                </div>
                <div className="flex  gap-6" style={{ width: "100%", marginTop: "-5px" }}>
                    <div className={`relative h-11 w-full min-w-[200px] ${css.marginmovebig_2}`}>
                        <input
                            placeholder="Enter your current residence pincode"
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        </label>
                    </div>
                </div>
                <div className={css.designerbookingconfirmationholder} style={{ marginTop: "12px" }}>
                    <button className={css.designerbookingconfirmationbutton}><label>BOOK FREE DESIGN SESSION</label></button>
                </div>
                <div className={css.designerbookingwarningtext}>By submitting this form, you agree to the privacy policy and terms of use</div>
            </div>
        </div>
    );
};

export default Form;