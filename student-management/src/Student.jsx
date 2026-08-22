import { useState } from "react";
function Student(props){
     const [attendance, setAttendance] = useState("Present");
    function markAttendance(){
        setAttendance("Absent");    
    }
    function markPresent(){
        setAttendance("Present");
    }
    return (
        <>
        <div>
            <h1>thi is from student component</h1>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.grade}</p>
            <p>Attendance: {attendance}</p>
            <button onClick={markAttendance} onDoubleClick={markPresent}>Mark Absent</button>
        </div>
        </>
    )
}
export default Student;