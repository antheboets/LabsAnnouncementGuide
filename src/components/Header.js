import React from "react";
import HeaderButton from "./HeaderButton";
import LanguePicker from "./LanguePicker";

const Header = ({strings}) =>{
    return (
    <div className="header">
        <div className="headerLeft">
            <h1>{strings.nameWebsite}</h1>
            <HeaderButton text={strings.about}/>
            <HeaderButton text={strings.about}/>
        </div>
        <div className="headerRight">
            <HeaderButton text={strings.about}/>
            <LanguePicker strings={strings}/>
        </div>
    </div>);
}
export default Header;