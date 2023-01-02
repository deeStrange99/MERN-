import React from "react";

import './MainHeader.css'

const MainHeader = props => {
    return <header className="main-header">
        {props.children} 
        {/* need to know about the props.children, allows to render anything from the opening and closing tags  */}
    </header>
};

export default MainHeader;