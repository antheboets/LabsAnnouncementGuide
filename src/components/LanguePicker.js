import React from "react";

const LanguePicker = ({strings}) =>{


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



    return(<div onClick={onClick}>
        {getLangueShortName(strings.getLanguage())}
        {open &&
        <div className="languePickerDropDown">
            <ul>
                {Object.keys(langData).map((langue)=>{
                    return <li key={langData[langue].code}>{langData[langue].text}</li>
                })}
            </ul>
        </div>
        }
    </div>);
}
export default LanguePicker;