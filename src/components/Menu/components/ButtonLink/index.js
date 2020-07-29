import React from 'react'

function ButtonLink(props) {
 //props=ClassName: O que alguem vai passar, hred:"/"
 console.log(props);
    return (
        <a href="" className={props.className}>
            {props.children}
        </a>
 
 );
}
export default ButtonLink;
