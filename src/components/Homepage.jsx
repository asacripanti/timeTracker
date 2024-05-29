import React from "react";
import Profile from "./Profile"
import Timeblock from "./Timeblock";
import iconWork from "../assets/images/icon-work.svg";
import iconPlay from "../assets/images/icon-play.svg";
import iconStudy from "../assets/images/icon-study.svg";
import iconExercise from "../assets/images/icon-exercise.svg";
import iconSocial from "../assets/images/icon-social.svg";
import iconSelfCare from "../assets/images/icon-self-care.svg";

export default function Homepage(){
    const [displayView, setDisplayView] = React.useState("Last Week");
    const [dailyActive, setDailyActive] = React.useState("toggleBtn");
    const [weelklyActive, setWeeklyActive] = React.useState("toggleBtnActive");
    const [monthlyActive, setMonthlyActive] = React.useState("toggleBtn");

    const [workHours, setWorkHours] = React.useState("32");
    const [playHours, setPlayHours] = React.useState("10");
    const [studyHours, setStudyHours] = React.useState("4");
    const [exerciseHours, setExerciseHours] = React.useState("5");
    const [socialHours, setSocialHours] = React.useState("10");
    const [selfCareHours, setSelfCareHours] = React.useState("2");

    const [lastWorkHours, setLastWorkHours] = React.useState("36");
    const [lastPlayHours, setLastPlayHours] = React.useState("8");
    const [lastStudyHours, setLastStudyHours] = React.useState("7");
    const [lastExerciseHours, setLastExerciseHours] = React.useState("5");
    const [lastSocialHours, setLastSocialHours] = React.useState("10");
    const [lastSelfCareHours, setLastSelfCareHours] = React.useState("2");
    
    function dailyView(){
        setDisplayView(prevView => "Yesterday");
        setDailyActive(prevView => "toggleBtnActive");
        setWeeklyActive(prevView => "toggleBtn");
        setMonthlyActive(prevView => "toggleBtn");

        setWorkHours(prevView => "5");
        setPlayHours(prevView => "1");
        setStudyHours(prevView => "0");
        setExerciseHours(prevView => "1")
        setSocialHours(prevView => "1");
        setSelfCareHours(prevView => "0")

        setLastWorkHours(prevView => "7");
        setLastPlayHours(prevView => "2");
        setLastStudyHours(prevView => "1");
        setLastExerciseHours(prevView => "1");
        setLastSocialHours(prevView => "3");
        setLastSelfCareHours(prevView => "1");
    }
    function weeklyView(){
        setDisplayView(prevView => "Last Week");
        setWeeklyActive(prevView => "toggleBtnActive");
        setDailyActive(prevView => "toggleBtn");
        setMonthlyActive(prevView => "toggleBtn");

        setWorkHours(prevView => "7");
        setPlayHours(prevView => "8");
        setStudyHours(prevView => "4");
        setExerciseHours(prevView => "4")
        setSocialHours(prevView => "5");
        setSelfCareHours(prevView => "2")

        setLastWorkHours(prevView => "36");
        setLastPlayHours(prevView => "8");
        setLastStudyHours(prevView => "7");
        setLastExerciseHours(prevView => "5");
        setLastSocialHours(prevView => "5");
        setLastSelfCareHours(prevView => "2");
    }
    function monthlyView(){
        setDisplayView(prevView => "Last Month");
        setMonthlyActive(prevView => "toggleBtnActive");
        setDailyActive(prevView => "toggleBtn");
        setWeeklyActive(prevView => "toggleBtn");

        setWorkHours(prevView => "103");
        setPlayHours(prevView => "23");
        setStudyHours(prevView => "13");
        setExerciseHours(prevView => "11")
        setSocialHours(prevView => "21");
        setSelfCareHours(prevView => "7")

        setLastWorkHours(prevView => "128");
        setLastPlayHours(prevView => "29");
        setLastStudyHours(prevView => "19");
        setLastExerciseHours(prevView => "18");
        setLastSocialHours(prevView => "23");
        setLastSelfCareHours(prevView => "11");
    }
    return(
        <div className="homePageShell">
            <section className="profileSection">
                <Profile />
                <section className="toggleBtnSection">
                    <button id="toggleBtnDaily" className={dailyActive} onClick={dailyView}>Daily</button>
                    <button id="toggleBtnWeekly" className={weelklyActive} onClick={weeklyView}>Weekly</button>
                    <button id="toggleBtnMonthly" className={monthlyActive}  onClick={monthlyView}>Monthly</button>
                </section>
              
            </section>
            <section className="timeBlockSection">
                <Timeblock title="Work" hours={workHours} lastWeek={lastWorkHours} color="hsl(15, 100%, 70%)" img={iconWork} displayView={displayView}/>
                <Timeblock title="Play" hours={playHours} lastWeek={lastPlayHours} color="hsl(195, 74%, 62%)" img={iconPlay} displayView={displayView}/> 
                <Timeblock title="Study" hours={studyHours} lastWeek={lastStudyHours} color="hsl(348, 100%, 68%)" img={iconStudy} displayView={displayView}/>
                <Timeblock title="Exercise" hours={exerciseHours} lastWeek={lastExerciseHours} color="hsl(145, 58%, 55%)" img={iconExercise} displayView={displayView}/>
                <Timeblock title="Social" hours={socialHours} lastWeek={lastSocialHours} color="hsl(264, 64%, 52%)" img={iconSocial} displayView={displayView}/>
                <Timeblock title="Self Care" hours={selfCareHours} lastWeek={lastSelfCareHours} color="hsl(43, 84%, 65%)" img={iconSelfCare} displayView={displayView}/>
            </section>
        </div>
    )
}