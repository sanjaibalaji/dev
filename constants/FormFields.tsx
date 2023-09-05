import * as React from "react";
import countries from '../public/countries.json'


interface InputkeyData {
   labelText:string;
   labelFor:string;
   id:string;
   name:string;
   type:string;
   autoComplete:string;
   isRequired:boolean;
   placeholder:string;
   pattern:string;
   errorMessage:string;
   iconApply:object;
   iconClear:object;
   apicheck:string;
   apimessage:string;
   sametag:string;
   sametagmessage:string;
   apifields:object;
   apitable:string;
   apiwhere:object;
   apiewhere:object;
   apiqueryfields:object;
   apitypes:object;
   apigroup:object;
   apiorder:object;
   apitype:string;
   apiresultrows:string;
   apicheckcount:string; 
   apicheckexisting:string;
   tablelink:string;
   tableupdate:string;
   tablefields:object;
   tabletypes:object;   
   tablesubtypes:object;
   tablewhere:object;
   tablegroup:object;
   tableorder:object;  
   tableprocess:string;
   emailheader:string;
   emailsubject:string;
   emailsend:string;
   createdmessage:string;
   modifiedmessage:string;
   deletedmessage:string;
   duplicatemessage:string;
   usagewarningmessage:string;
   style:string;
   customclass:string;
   autocompletedata:object;
   ignorebackendmessage:boolean;
   disabledadd:boolean;
   disabledmodify:boolean;  
   disableddelete:boolean;
   autocompletetable:string;
   autocompletetablefields:object;
   autocompletetablewhere:object;
   autocompletetableorder:object;
   autocompleteupdatefield:object;
   autocompletedisplayfield:object;
   autocompletedisplaytitlefield:object;
   autocompleteselectfield:string;
   countrycodefield:string;
   idupdate:boolean;
   apigetvalues:object;
   ignoreduplicatemessage:boolean;
}

const linkprefix = "http://localhost/";

const customerFields : Array<InputkeyData> = [
      {
        labelText:"Customer ID",
        labelFor:"customer-id",
        id:"customerid",
        name:"customerid",
        type:"text",
        autoComplete:"",
        isRequired:true,
        placeholder:"Customer ID",
        pattern:``,
        errorMessage:'Customer ID cannot be empty.',
        iconApply:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
        iconClear:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
        apicheck:`${linkprefix}rentalapp/dbutilities.php`,
        apimessage:'Customer ID cannot be duplicated.',
        sametag:'',
        sametagmessage:'',
        apifields:{},
        apitable:"customer",
        apiwhere:{customerid:"S#customerid"},
        apiewhere:{uid:"S#id"},
        apiqueryfields:{customerid:""},
        apitypes:{customerid:""},
        apigroup:{},
        apiorder:{},
        apitype:"query",
        apiresultrows:"NO",
        apicheckcount:"NO",
        apicheckexisting:"YES",
        tablelink:`${linkprefix}rentalapp/dbutilities.php`,
        tableupdate:'customer',
        tablefields:{customerid:"S#customerid",company:"S#companyname",street:"S#street",customername:"S#name",surname:"S#surname",city:"S#city",country:"S#country",zip:"S#zip",phone:"S#phone",remarks:"S#remarks",email:"S#emailaddress"},
        tabletypes:{customerid:"",company:"",street:"",customername:"",surname:"",city:"",country:"",zip:"",phone:"",remarks:"",email:"",uid:""},
        tablesubtypes:{customerid:"#upper",company:"#proper",street:"#asitis",customername:"#proper",surname:"#proper",city:"#proper",country:"#proper",zip:"#asitis",phone:"#asitis",remarks:"#proper",email:"#lower",uid:"#asitis"},
        tablewhere:{uid:"S#id"},   
        tablegroup:{},
        tableorder:{},
        tableprocess:"query",
        emailheader:"",
        emailsubject:"",
        emailsend:"No",
        createdmessage:"Customer Added Successfully.",
        modifiedmessage:"Customer Modified Successfully",
        deletedmessage:"Customer Deleted Successfully",      
        duplicatemessage:"",
        usagewarningmessage:"",
        style:'',
        customclass:'',
        autocompletedata:[],
        ignorebackendmessage:false,
        ignoreduplicatemessage:true,
        disabledadd:false,
        disabledmodify:false,  
        disableddelete:false,
        autocompletetable:"customer",
        autocompletetablefields:{uid:"",customerid:"",company:""},
        apigetvalues:{uid:"",customerid:"#decrypt",company:"#decrypt",street:"#decrypt",customername:"#decrypt",surname:"#decrypt",city:"#decrypt",country:"#decrypt",zip:"#decrypt",phone:"#decrypt",remarks:"#decrypt",email:"#decrypt"},
        autocompletetablewhere:{},
        autocompletetableorder:{customerid:""},
        autocompleteupdatefield:{customerid:""},
        autocompletedisplayfield:{customerid:"",company:""},
        autocompleteselectfield:"customerid",
        autocompletedisplaytitlefield:{"customerid":"Customer ID","company":"Company Name"},
        countrycodefield:"",
        idupdate:true   
      },    
      {
        labelText:"Company Name",
        labelFor:"company-name",
        id:"companyname",
        name:"companyname",
        type:"text",
        autoComplete:"",
        isRequired:true,
        placeholder:"Company Name",
        pattern: '',
        errorMessage:'Company Name cannot be empty.',
        iconApply:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
        iconClear:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
        apicheck:`${linkprefix}rentalapp/dbutilities.php`,
        apimessage:'Company name cannot be duplicated.',
        sametag:'',
        sametagmessage:'',
        apifields:{},
        apitable:"customer",
        apiwhere:{company:"S#companyname"},
        apiewhere:{uid:"S#id"},
        apiqueryfields:{company:""},
        apitypes:{company:""},
        apigroup:{},
        apiorder:{},
        apitype:"query",
        apiresultrows:"NO",
        apicheckcount:"NO",
        apicheckexisting:"YES",
        tablelink:`${linkprefix}rentalapp/dbutilities.php`,
        tableupdate:'customer',
        tablefields:{customerid:"S#customerid",company:"S#companyname",street:"S#street",customername:"S#name",surname:"S#surname",city:"S#city",country:"S#country",zip:"S#zip",phone:"S#phone",remarks:"S#remarks",email:"S#emailaddress"},
        tabletypes:{customerid:"",company:"",street:"",customername:"",surname:"",city:"",country:"",zip:"",phone:"",remarks:"",email:""},
        tablesubtypes:{customerid:"#upper",company:"#proper",street:"#asitis",customername:"#proper",surname:"#proper",city:"#proper",country:"#proper",zip:"#asitis",phone:"#asitis",remarks:"#proper",email:"#lower",uid:"#asitis"},
        tablewhere:{uid:"S#id"},
        tablegroup:{},
        tableorder:{},
        tableprocess:"query",
        emailheader:"",
        emailsubject:"",
        emailsend:"No",
        createdmessage:"Customer Added Successfully.",
        modifiedmessage:"Customer Modified Successfully",
        deletedmessage:"Customer Deleted Successfully",      
        duplicatemessage:"",
        usagewarningmessage:"",
        style:'',
        customclass:'',
        autocompletedata:[],
        ignorebackendmessage:false,
        ignoreduplicatemessage:false,
        disabledadd:false,
        disabledmodify:true,
        disableddelete:true,
        autocompletetable:"",
        autocompletetablefields:{},
        autocompletetablewhere:{},    
        autocompletetableorder:{},
        apigetvalues:{uid:"",customerid:"#decrypt",company:"#decrypt",street:"#decrypt",customername:"#decrypt",surname:"#decrypt",city:"#decrypt",country:"#decrypt",zip:"#decrypt",phone:"#decrypt",remarks:"#decrypt",email:"#decrypt"},
        autocompleteupdatefield:{},
        autocompletedisplayfield:{},
        autocompleteselectfield:"",
        autocompletedisplaytitlefield:{},
        countrycodefield:"",
        idupdate:true                     
      },    
      {
        labelText:"Email",
        labelFor:"emailaddress",
        id:"emailaddress",
        name:"emailaddress",
        type:"email",
        autoComplete:"",
        isRequired:true,
        placeholder:"Email address",
        pattern: '/[^\s]*@[a-z0-9.-]*/i',
        errorMessage:'Invalid email',
        iconApply:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
        iconClear:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
        apicheck:`${linkprefix}rentalapp/dbutilities.php`,
        apimessage:'',
        sametag:'',
        sametagmessage:'',
        apifields:{},
        apitable:"",
        apiwhere:{},
        apiewhere:{},
        apiqueryfields:{},
        apitypes:{},
        apigroup:{},
        apiorder:{},
        apitype:"query",
        apiresultrows:"NO",
        apicheckcount:"NO",
        apicheckexisting:"YES",
        tablelink:`${linkprefix}rentalapp/dbutilities.php`,
        tableupdate:'customer',
        tablefields:{customerid:"S#customerid",company:"S#companyname",street:"S#street",customername:"S#name",surname:"S#surname",city:"S#city",country:"S#country",zip:"S#zip",phone:"S#phone",remarks:"S#remarks",email:"S#emailaddress"},
        tabletypes:{customerid:"",company:"",street:"",customername:"",surname:"",city:"",country:"",zip:"",phone:"",remarks:"",email:""},
        tablesubtypes:{customerid:"#upper",company:"#proper",street:"#asitis",customername:"#proper",surname:"#proper",city:"#proper",country:"#proper",zip:"#asitis",phone:"#asitis",remarks:"#proper",email:"#lower",uid:"#asitis"},
        tablewhere:{uid:"S#id"},
        tablegroup:{},
        tableorder:{},        
        tableprocess:"query",
        emailheader:"",
        emailsubject:"",
        emailsend:"No",
        createdmessage:"Customer Added Successfully.",
        modifiedmessage:"Customer Modified Successfully",
        deletedmessage:"Customer Deleted Successfully",      
        duplicatemessage:"",
        usagewarningmessage:"",
        style:'',
        customclass:'',
        autocompletedata:[],
        ignorebackendmessage:true,
        ignoreduplicatemessage:false,
        disabledadd:false,
        disabledmodify:true,  
        disableddelete:true,
        autocompletetable:"",
        autocompletetablefields:{},
        autocompletetablewhere:{},
        autocompletetableorder:{},
        autocompleteupdatefield:{},
        autocompletedisplayfield:{},
        apigetvalues:{uid:"",customerid:"#decrypt",company:"#decrypt",street:"#decrypt",customername:"#decrypt",surname:"#decrypt",city:"#decrypt",country:"#decrypt",zip:"#decrypt",phone:"#decrypt",remarks:"#decrypt",email:"#decrypt"},
        autocompletedisplaytitlefield:{},
        autocompleteselectfield:"",
        countrycodefield:"",
        idupdate:false      
      },      
      {
        labelText:"Name",
        labelFor:"name",
        id:"name",
        name:"name",
        type:"text",
        autoComplete:"",
        isRequired:false,
        placeholder:"Name",
        pattern: '',
        errorMessage:'',
        iconApply:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
        iconClear:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
        apicheck:`${linkprefix}rentalapp/dbutilities.php`,
        apimessage:'',
        sametag:'',
        sametagmessage:'',
        apifields:{},
        apitable:"",
        apiwhere:{},
        apiewhere:{},
        apiqueryfields:{},
        apitypes:{},
        apigroup:{},
        apiorder:{},
        apitype:"query",
        apiresultrows:"NO",
        apicheckcount:"NO",
        apicheckexisting:"YES",
        tablelink:`${linkprefix}rentalapp/dbutilities.php`,
        tableupdate:'customer',
        tablefields:{customerid:"S#customerid",company:"S#companyname",street:"S#street",customername:"S#name",surname:"S#surname",city:"S#city",country:"S#country",zip:"S#zip",phone:"S#phone",remarks:"S#remarks",email:"S#emailaddress"},
        tabletypes:{customerid:"",company:"",street:"",customername:"",surname:"",city:"",country:"",zip:"",phone:"",remarks:"",email:""},
        tablesubtypes:{customerid:"#upper",company:"#proper",street:"#asitis",customername:"#proper",surname:"#proper",city:"#proper",country:"#proper",zip:"#asitis",phone:"#asitis",remarks:"#proper",email:"#lower",uid:"#asitis"},
        tablewhere:{uid:"S#id"},
        tablegroup:{},
        tableorder:{},
        tableprocess:"query",
        emailheader:"",
        emailsubject:"",
        emailsend:"No",
        createdmessage:"Customer Added Successfully.",
        modifiedmessage:"Customer Modified Successfully",
        deletedmessage:"Customer Deleted Successfully",      
        duplicatemessage:"",
        usagewarningmessage:"",
        style:'{"display":"inline-block","width":"49%","paddingLeft":"1%","marginTop":".15em !important"}',
        customclass:'',
        autocompletedata:[],
        ignorebackendmessage:true,
        ignoreduplicatemessage:false,
        disabledadd:false,
        disabledmodify:true,  
        disableddelete:true,
        autocompletetable:"",
        autocompletetablefields:{},
        autocompletetablewhere:{},
        autocompletetableorder:{},
        autocompleteupdatefield:{},
        autocompletedisplayfield:{},
        apigetvalues:{uid:"",customerid:"#decrypt",company:"#decrypt",street:"#decrypt",customername:"#decrypt",surname:"#decrypt",city:"#decrypt",country:"#decrypt",zip:"#decrypt",phone:"#decrypt",remarks:"#decrypt",email:"#decrypt"},
        autocompletedisplaytitlefield:{},
        autocompleteselectfield:"",
        countrycodefield:"",
        idupdate:false                  
      },    
      {
        labelText:"SurName",
        labelFor:"surname",
        id:"surname",
        name:"surname",
        type:"text",
        autoComplete:"",
        isRequired:false,
        placeholder:"Name",
        pattern: '',
        errorMessage:'',
        iconApply:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
        iconClear:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
        apicheck:`${linkprefix}rentalapp/dbutilities.php`,
        apimessage:'',
        sametag:'',
        sametagmessage:'',
        apifields:{},
        apitable:"",
        apiwhere:{},
        apiewhere:{},
        apiqueryfields:{},
        apitypes:{},
        apigroup:{},
        apiorder:{},
        apitype:"query",
        apiresultrows:"NO",
        apicheckcount:"NO",
        apicheckexisting:"YES",
        tablelink:`${linkprefix}rentalapp/dbutilities.php`,
        tableupdate:'customer',
        tablefields:{customerid:"S#customerid",company:"S#companyname",street:"S#street",customername:"S#name",surname:"S#surname",city:"S#city",country:"S#country",zip:"S#zip",phone:"S#phone",remarks:"S#remarks",email:"S#emailaddress"},
        tabletypes:{customerid:"",company:"",street:"",customername:"",surname:"",city:"",country:"",zip:"",phone:"",remarks:"",email:""},
        tablesubtypes:{customerid:"#upper",company:"#proper",street:"#asitis",customername:"#proper",surname:"#proper",city:"#proper",country:"#proper",zip:"#asitis",phone:"#asitis",remarks:"#proper",email:"#lower",uid:"#asitis"},
        tablewhere:{uid:"S#id"},
        tablegroup:{},
        tableorder:{},
        tableprocess:"query",
        emailheader:"",
        emailsubject:"",
        emailsend:"No",
        createdmessage:"Customer Added Successfully.",
        modifiedmessage:"Customer Modified Successfully",
        deletedmessage:"Customer Deleted Successfully",      
        duplicatemessage:"",
        usagewarningmessage:"",
        style:'{"display":"inline-block","width":"49%","paddingLeft":"1%","marginTop":".15em !important"}',
        customclass:'',
        autocompletedata:[],
        ignorebackendmessage:true,
        ignoreduplicatemessage:false,
        disabledadd:false,
        disabledmodify:true,  
        disableddelete:true,
        autocompletetable:"",
        autocompletetablefields:{},
        autocompletetablewhere:{},
        autocompletetableorder:{},
        autocompleteupdatefield:{},
        autocompletedisplayfield:{},
        apigetvalues:{uid:"",customerid:"#decrypt",company:"#decrypt",street:"#decrypt",customername:"#decrypt",surname:"#decrypt",city:"#decrypt",country:"#decrypt",zip:"#decrypt",phone:"#decrypt",remarks:"#decrypt",email:"#decrypt"},
        autocompletedisplaytitlefield:{},
        autocompleteselectfield:"",
        countrycodefield:"",
        idupdate:false                 
      },    
      {
        labelText:"Street",
        labelFor:"street",
        id:"street",
        name:"street",
        type:"text",
        autoComplete:"",
        isRequired:false,
        placeholder:"Street Details",
        pattern: '',
        errorMessage:'',
        iconApply:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
        iconClear:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
        apicheck:`${linkprefix}rentalapp/dbutilities.php`,
        apimessage:'',
        sametag:'',
        sametagmessage:'',
        apifields:{},
        apitable:"",
        apiwhere:{},
        apiewhere:{},
        apiqueryfields:{},
        apitypes:{},
        apigroup:{},
        apiorder:{},
        apitype:"query",
        apiresultrows:"NO",
        apicheckcount:"NO",
        apicheckexisting:"YES",
        tablelink:`${linkprefix}rentalapp/dbutilities.php`,
        tableupdate:'customer',
        tablefields:{customerid:"S#customerid",company:"S#companyname",street:"S#street",customername:"S#name",surname:"S#surname",city:"S#city",country:"S#country",zip:"S#zip",phone:"S#phone",remarks:"S#remarks",email:"S#emailaddress"},
        tabletypes:{customerid:"",company:"",street:"",customername:"",surname:"",city:"",country:"",zip:"",phone:"",remarks:"",email:""},
        tablesubtypes:{customerid:"#upper",company:"#proper",street:"#asitis",customername:"#proper",surname:"#proper",city:"#proper",country:"#proper",zip:"#asitis",phone:"#asitis",remarks:"#proper",email:"#lower",uid:"#asitis"},
        tablewhere:{uid:"S#id"},
        tablegroup:{},
        tableorder:{},
        tableprocess:"query",
        emailheader:"",
        emailsubject:"",
        emailsend:"No",
        createdmessage:"Customer Added Successfully.",
        modifiedmessage:"Customer Modified Successfully",
        deletedmessage:"Customer Deleted Successfully",      
        duplicatemessage:"",
        usagewarningmessage:"",
        style:'{"display":"inline-block","width":"49%","paddingLeft":"1%","marginTop":".15em !important"}',
        customclass:'',
        autocompletedata:[],
        ignorebackendmessage:true,
        ignoreduplicatemessage:false,
        disabledadd:false,
        disabledmodify:true,  
        disableddelete:true,
        autocompletetable:"",
        autocompletetablefields:{},
        autocompletetablewhere:{},
        autocompletetableorder:{},
        autocompleteupdatefield:{},
        autocompletedisplayfield:{},
        apigetvalues:{uid:"",customerid:"#decrypt",company:"#decrypt",street:"#decrypt",customername:"#decrypt",surname:"#decrypt",city:"#decrypt",country:"#decrypt",zip:"#decrypt",phone:"#decrypt",remarks:"#decrypt",email:"#decrypt"},
        autocompletedisplaytitlefield:{},
        autocompleteselectfield:"",
        countrycodefield:"",
        idupdate:false                
      },    
      {
        labelText:"City",
        labelFor:"city",
        id:"city",
        name:"city",
        type:"text",
        autoComplete:"",
        isRequired:false,
        placeholder:"City",
        pattern: '',
        errorMessage:'',
        iconApply:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
        iconClear:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
        apicheck:`${linkprefix}rentalapp/dbutilities.php`,
        apimessage:'',
        sametag:'',
        sametagmessage:'',
        apifields:{},
        apitable:"",
        apiwhere:{},
        apiewhere:{},
        apiqueryfields:{},
        apitypes:{},
        apigroup:{},
        apiorder:{},
        apitype:"query",
        apiresultrows:"NO",
        apicheckcount:"NO",
        apicheckexisting:"YES",
        tablelink:`${linkprefix}rentalapp/dbutilities.php`,
        tableupdate:'customer',
        tablefields:{customerid:"S#customerid",company:"S#companyname",street:"S#street",customername:"S#name",surname:"S#surname",city:"S#city",country:"S#country",zip:"S#zip",phone:"S#phone",remarks:"S#remarks",email:"S#emailaddress"},
        tabletypes:{customerid:"",company:"",street:"",customername:"",surname:"",city:"",country:"",zip:"",phone:"",remarks:"",email:""},
        tablesubtypes:{customerid:"#upper",company:"#proper",street:"#asitis",customername:"#proper",surname:"#proper",city:"#proper",country:"#proper",zip:"#asitis",phone:"#asitis",remarks:"#proper",email:"#lower",uid:"#asitis"},
        tablewhere:{uid:"S#id"},
        tablegroup:{},
        tableorder:{},
        tableprocess:"query",
        emailheader:"",
        emailsubject:"",
        emailsend:"No",
        createdmessage:"Customer Added Successfully.",
        modifiedmessage:"Customer Modified Successfully",
        deletedmessage:"Customer Deleted Successfully",      
        duplicatemessage:"",
        usagewarningmessage:"",
        style:'{"display":"inline-block","width":"49%","paddingLeft":"1%","marginTop":".15em !important"}',
        customclass:'',
        autocompletedata:[],
        ignorebackendmessage:true,
        ignoreduplicatemessage:false,
        disabledadd:false,
        disabledmodify:true,  
        disableddelete:true,
        autocompletetable:"",
        autocompletetablefields:{},
        autocompletetablewhere:{},
        autocompletetableorder:{},
        autocompleteupdatefield:{},
        autocompletedisplayfield:{},
        autocompletedisplaytitlefield:{},
        apigetvalues:{uid:"",customerid:"#decrypt",company:"#decrypt",street:"#decrypt",customername:"#decrypt",surname:"#decrypt",city:"#decrypt",country:"#decrypt",zip:"#decrypt",phone:"#decrypt",remarks:"#decrypt",email:"#decrypt"},
        autocompleteselectfield:"",
        countrycodefield:"",
        idupdate:false     
      },    
      {
        labelText:"Country",
        labelFor:"country",
        id:"country",
        name:"country",
        type:"text",
        autoComplete:"",
        isRequired:false,
        placeholder:"Country",
        pattern: '',
        errorMessage:'',
        iconApply:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
        iconClear:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
        apicheck:`${linkprefix}rentalapp/dbutilities.php`,
        apimessage:'',
        sametag:'',
        sametagmessage:'',
        apifields:{},
        apitable:"",
        apiwhere:{},
        apiewhere:{},
        apiqueryfields:{},
        apitypes:{},
        apigroup:{},
        apiorder:{},
        apitype:"query",
        apiresultrows:"NO",
        apicheckcount:"NO",
        apicheckexisting:"YES",
        tablelink:`${linkprefix}rentalapp/dbutilities.php`,
        tableupdate:'customer',
        tablefields:{customerid:"S#customerid",company:"S#companyname",street:"S#street",customername:"S#name",surname:"S#surname",city:"S#city",country:"S#country",zip:"S#zip",phone:"S#phone",remarks:"S#remarks",email:"S#emailaddress"},
        tabletypes:{customerid:"",company:"",street:"",customername:"",surname:"",city:"",country:"",zip:"",phone:"",remarks:"",email:""},
        tablesubtypes:{customerid:"#upper",company:"#proper",street:"#asitis",customername:"#proper",surname:"#proper",city:"#proper",country:"#proper",zip:"#asitis",phone:"#asitis",remarks:"#proper",email:"#lower",uid:"#asitis"},
        tablewhere:{uid:"S#id"},
        tablegroup:{},
        tableorder:{},
        tableprocess:"query",
        emailheader:"",
        emailsubject:"",
        emailsend:"No",
        createdmessage:"Customer Added Successfully.",
        modifiedmessage:"Customer Modified Successfully",
        deletedmessage:"Customer Deleted Successfully",      
        duplicatemessage:"",
        usagewarningmessage:"",
        style:'{"display":"inline-block","width":"49%","paddingLeft":"1%","marginTop":".15em !important"}',
        customclass:'',
        autocompletedata :countries,
        ignorebackendmessage:true,
        ignoreduplicatemessage:false,
        disabledadd:false,
        disabledmodify:true,  
        disableddelete:true,
        autocompletetable:"",
        autocompletetablefields:{},
        autocompletetablewhere:{},
        autocompletetableorder:{},
        autocompleteupdatefield:{},
        autocompletedisplayfield:{code:"",name:""},
        autocompletedisplaytitlefield:{code:"Code",name:"Name"},
        autocompleteselectfield:"name",
        apigetvalues:{uid:"",customerid:"#decrypt",company:"#decrypt",street:"#decrypt",customername:"#decrypt",surname:"#decrypt",city:"#decrypt",country:"#decrypt",zip:"#decrypt",phone:"#decrypt",remarks:"#decrypt",email:"#decrypt"},
        countrycodefield:"code",
        idupdate:false     
      },    
      {
        labelText:"Zip",
        labelFor:"zip",
        id:"zip",
        name:"zip",
        type:"text",
        autoComplete:"",
        isRequired:false,
        placeholder:"Zip",
        pattern: '',
        errorMessage:'',
        iconApply:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
        iconClear:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
        apicheck:`${linkprefix}rentalapp/dbutilities.php`,
        apimessage:'',
        sametag:'',
        sametagmessage:'',
        apifields:{},
        apitable:"",
        apiwhere:{},
        apiewhere:{},
        apiqueryfields:{},
        apitypes:{},
        apigroup:{},
        apiorder:{},
        apitype:"query",
        apiresultrows:"NO",
        apicheckcount:"NO",
        apicheckexisting:"YES",
        tablelink:`${linkprefix}rentalapp/dbutilities.php`,
        tableupdate:'customer',
        tablefields:{customerid:"S#customerid",company:"S#companyname",street:"S#street",customername:"S#name",surname:"S#surname",city:"S#city",country:"S#country",zip:"S#zip",phone:"S#phone",remarks:"S#remarks",email:"S#emailaddress"},
        tabletypes:{customerid:"",company:"",street:"",customername:"",surname:"",city:"",country:"",zip:"",phone:"",remarks:"",email:""},
        tablesubtypes:{customerid:"#upper",company:"#proper",street:"#asitis",customername:"#proper",surname:"#proper",city:"#proper",country:"#proper",zip:"#asitis",phone:"#asitis",remarks:"#proper",email:"#lower",uid:"#asitis"},
        tablewhere:{uid:"S#id"},
        tablegroup:{},
        tableorder:{},
        tableprocess:"query",
        emailheader:"",
        emailsubject:"",
        emailsend:"No",
        createdmessage:"Customer Added Successfully.",
        modifiedmessage:"Customer Modified Successfully",
        deletedmessage:"Customer Deleted Successfully",      
        duplicatemessage:"",
        usagewarningmessage:"",
        style:'{"display":"inline-block","width":"49%","paddingLeft":"1%","marginTop":".15em !important"}',
        customclass:'',
        autocompletedata:[],
        ignorebackendmessage:true,
        ignoreduplicatemessage:false,
        disabledadd:false,
        disabledmodify:true,  
        disableddelete:true,
        autocompletetable:"",
        autocompletetablefields:{},
        autocompletetablewhere:{},
        autocompletetableorder:{},
        autocompleteupdatefield:{},
        autocompletedisplayfield:{},
        autocompletedisplaytitlefield:{},
        autocompleteselectfield:"",
        apigetvalues:{uid:"",customerid:"#decrypt",company:"#decrypt",street:"#decrypt",customername:"#decrypt",surname:"#decrypt",city:"#decrypt",country:"#decrypt",zip:"#decrypt",phone:"#decrypt",remarks:"#decrypt",email:"#decrypt"},
        countrycodefield:"",
        idupdate:false      
      },    
      {
        labelText:"Phone",
        labelFor:"phone",
        id:"phone",
        name:"phone",
        type:"mobile",
        autoComplete:"",
        isRequired:false,
        placeholder:"Phone",
        pattern: '',
        errorMessage:'',
        iconApply:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
        iconClear:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
        apicheck:`${linkprefix}rentalapp/dbutilities.php`,
        apimessage:'',
        sametag:'',
        sametagmessage:'',
        apifields:{},
        apitable:"",
        apiwhere:{},
        apiewhere:{},
        apiqueryfields:{},
        apitypes:{},
        apigroup:{},
        apiorder:{},
        apitype:"query",
        apiresultrows:"NO",
        apicheckcount:"NO",
        apicheckexisting:"YES",
        tablelink:`${linkprefix}rentalapp/dbutilities.php`,
        tableupdate:'customer',
        tablefields:{customerid:"S#customerid",company:"S#companyname",street:"S#street",customername:"S#name",surname:"S#surname",city:"S#city",country:"S#country",zip:"S#zip",phone:"S#phone",remarks:"S#remarks",email:"S#emailaddress"},
        tabletypes:{customerid:"",company:"",street:"",customername:"",surname:"",city:"",country:"",zip:"",phone:"",remarks:"",email:""},
        tablesubtypes:{customerid:"#upper",company:"#proper",street:"#asitis",customername:"#proper",surname:"#proper",city:"#proper",country:"#proper",zip:"#asitis",phone:"#asitis",remarks:"#proper",email:"#lower",uid:"#asitis"},
        tablewhere:{uid:"S#id"},
        tablegroup:{},
        tableorder:{},
        tableprocess:"query",
        emailheader:"",
        emailsubject:"",
        emailsend:"No",
        createdmessage:"Customer Added Successfully.",
        modifiedmessage:"Customer Modified Successfully",
        deletedmessage:"Customer Deleted Successfully",      
        duplicatemessage:"",
        usagewarningmessage:"",
        style:'{"display":"inline-block","width":"49%","paddingLeft":"1%","marginTop":".15em !important"}',
        customclass:'',
        autocompletedata:[],
        ignorebackendmessage:true,
        ignoreduplicatemessage:false,
        disabledadd:false,
        disabledmodify:true,  
        disableddelete:true,
        autocompletetable:"",
        autocompletetablefields:{},
        autocompletetablewhere:{},
        autocompletetableorder:{},
        autocompleteupdatefield:{},
        autocompletedisplayfield:{},
        autocompletedisplaytitlefield:{},
        autocompleteselectfield:"",
        apigetvalues:{uid:"",customerid:"#decrypt",company:"#decrypt",street:"#decrypt",customername:"#decrypt",surname:"#decrypt",city:"#decrypt",country:"#decrypt",zip:"#decrypt",phone:"#decrypt",remarks:"#decrypt",email:"#decrypt"},
        countrycodefield:"",
        idupdate:false       
      },    
      {
        labelText:"Remarks",
        labelFor:"remarks",
        id:"remarks",
        name:"remarks",
        type:"text",
        autoComplete:"",
        isRequired:false,
        placeholder:"Remarks",
        pattern: '',
        errorMessage:'',
        iconApply:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
        iconClear:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
        apicheck:`${linkprefix}rentalapp/dbutilities.php`,
        apimessage:'',
        sametag:'',
        sametagmessage:'',
        apifields:{},
        apitable:"",
        apiwhere:{},
        apiewhere:{},
        apiqueryfields:{},
        apitypes:{},
        apigroup:{},
        apiorder:{},
        apitype:"query",
        apiresultrows:"NO",
        apicheckcount:"NO",
        apicheckexisting:"YES",
        tablelink:`${linkprefix}rentalapp/dbutilities.php`,
        tableupdate:'customer',
        tablefields:{customerid:"S#customerid",company:"S#companyname",street:"S#street",customername:"S#name",surname:"S#surname",city:"S#city",country:"S#country",zip:"S#zip",phone:"S#phone",remarks:"S#remarks",email:"S#emailaddress"},
        tabletypes:{customerid:"",company:"",street:"",customername:"",surname:"",city:"",country:"",zip:"",phone:"",remarks:"",email:""},
        tablesubtypes:{customerid:"#upper",company:"#proper",street:"#asitis",customername:"#proper",surname:"#proper",city:"#proper",country:"#proper",zip:"#asitis",phone:"#asitis",remarks:"#proper",email:"#lower",uid:"#asitis"},
        tablewhere:{uid:"S#id"},
        tablegroup:{},
        tableorder:{},
        tableprocess:"query",
        emailheader:"",
        emailsubject:"",
        emailsend:"No",
        createdmessage:"Customer Added Successfully.",
        modifiedmessage:"Customer Modified Successfully",
        deletedmessage:"Customer Deleted Successfully",          
        duplicatemessage:"",
        usagewarningmessage:"",
        style:'{"display":"inline-block","width":"49%","paddingLeft":"1%","marginTop":".15em !important"}',
        customclass:'',
        autocompletedata:[],
        ignorebackendmessage:true,
        ignoreduplicatemessage:false,
        disabledadd:false,
        disabledmodify:true,  
        disableddelete:true,
        autocompletetable:"",
        autocompletetablefields:{},
        autocompletetablewhere:{},
        autocompletetableorder:{},
        autocompleteupdatefield:{},
        autocompletedisplayfield:{},
        autocompletedisplaytitlefield:{},
        autocompleteselectfield:"",
        apigetvalues:{uid:"",customerid:"#decrypt",company:"#decrypt",street:"#decrypt",customername:"#decrypt",surname:"#decrypt",city:"#decrypt",country:"#decrypt",zip:"#decrypt",phone:"#decrypt",remarks:"#decrypt",email:"#decrypt"},
        countrycodefield:"",
        idupdate:false     
      }
]


const FormFields:any = {};
FormFields.customerFields = customerFields;
export  default FormFields;