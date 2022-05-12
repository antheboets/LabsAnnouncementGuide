import React from "react";

const LanguePicker = ({strings,setLangues,className}) =>{
    const [open, setOPen] = React.useState(false);

    const onClick = () =>{
        setOPen(!open);
    }

    const langData = {
        English:{text:"eng",code:"En",name:"English"},
        Dutch:{text:"nl",code:"Nl",name:"Nederlands"}
    };

    const getLangueShortName = (langCode) =>{
        let myKeys = Object.keys(langData)
        for (let i = 0; i < myKeys.length; i++){
            let iter = myKeys[i];
            if(langData[iter].code === langCode){
                return langData[iter].text;
            }
         }
        return "";
    }

    const setNewLangue = (langueCode) =>{
        console.log(langueCode,strings.getLanguage());
        if(langueCode !== strings.getLanguage()){
            setLangues(langueCode);
        }
        setOPen(false);
    }

    return(<div className={className} onClick={onClick}>
        {getLangueShortName(strings.getLanguage())}
        {open && 
        <div className="languePickerDropDown">
            <ul className="languePickerDropDown">
                {Object.keys(langData).map((langue)=>{
                    return <li key={langData[langue].code} className="languePickerDropDown" onClick={() =>{setNewLangue(langData[langue].code)}}>{langData[langue].text}</li>
                })}
            </ul>
        </div>}
    </div>);
}
export default LanguePicker;