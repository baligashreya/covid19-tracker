import React from 'react'

export default function SubCountry(props) {
    const { heading, number, color }=props;
    const classes=`${color} card-subtitle`
    return (
        <div className="col-md-5 text-center mt-3" >
            <p className={classes}>{heading}</p>
            <p className={color}>{number}</p>
        </div>
    )
}
