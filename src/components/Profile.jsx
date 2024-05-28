import React from "react";
import profilePic from "../assets/images/profilePic.jpeg";

export default function Profile(){
    return(
       
                <section className="profileInfo">
                    <div className="profilePicShell">
                        <img className="profilePicture" src={profilePic} alt="" />
                    </div>
                    <span className="profileReportFor">Report for</span>
                    <h2 className="profileName">Alejandro</h2>
                    <h2 className="profileName">Sacripanti</h2>
                </section>
      
    )
}