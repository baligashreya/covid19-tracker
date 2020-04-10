import React from 'react'
function SubGlobal(props) {
    const {heading, number, color }=props;
    const classes=`${color} card-subtitle`
    return (
        <div className="col-md-5 text-center mt-3" >
            <p className={classes}>{heading}</p>
            <p className={`${color} card-text`}>{number}</p>
        </div>
    )
}


export default SubGlobal;
