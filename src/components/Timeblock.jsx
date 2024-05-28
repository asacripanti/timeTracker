import React from "react";


export default function Timeblock(props){
    return(
        <div className="timeBlockShell" style={{backgroundColor: props.color}}>
            <img className="timeBlockImg" src={props.img} alt="" />
            <div className="timeBlockContent" >
                <section className="timeBlockTitleSection">
                    <h2 className="timeBlockTitle">{props.title}</h2>
                    <button className="timeBlockBtn">...</button>
                </section>
                
                <section className="timeBlockInputSection">
                    <span className="timeBlockInput">{props.hours}</span>
                    <span className="timeBlockHoursText">hrs</span>
                </section>
                <span className="timeBlockLastWeekHours">{props.displayView} - {props.lastWeek}hrs</span>
            </div>
        </div>
    )
}