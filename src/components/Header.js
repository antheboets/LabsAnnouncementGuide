import React from "react";
import HeaderButton from "./HeaderButton";
import LanguePicker from "./LanguePicker";

const Header = ({strings,setLanguage}) =>{
    return (
    <div className="header">
        <div className="headerLeft">
            <h1 className="headerItem">{strings.nameWebsite}</h1>
            <HeaderButton text={strings.about}/>
            <HeaderButton text={strings.about}/>
        </div>
        <div className="headerRight">
            <HeaderButton text={strings.about}/>
            <LanguePicker className="headerItem" setLangues={setLanguage} strings={strings}/>
        </div>
    </div>);
}
export default Header;