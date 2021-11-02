import React from "react";

const covid_case = ({title, new_case, new_death, total_death}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>ผู้ติดเชื้อใหม่ : {new_case}</p>
            <p>ผู้เสียชีวิตวันนี้ : {new_death}</p>
            <p>ผู้เสียชีวิตรวม : {total_death}</p>
        </div>
    );
}

export default covid_case;