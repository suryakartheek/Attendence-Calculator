document.getElementById('calculateBtn').addEventListener('click', function() {
    const totalClasses = parseInt(document.getElementById('totalClasses').value);
    const attendedClasses = parseInt(document.getElementById('attendedClasses').value);

    if (isNaN(totalClasses) || isNaN(attendedClasses) || totalClasses <= 0) {
        alert("Please enter valid numbers for total and attended classes.");
        return;
    }

    const currentAttendance = (attendedClasses / totalClasses) * 100;
    document.getElementById('currentAttendance').innerText = `Current Attendance: ${currentAttendance.toFixed(2)}%`;

    const requiredAttendance = 0.75; // 75%
    
    // Calculate the minimum number of attended classes needed to exceed 75%
    let classesNeededFor75Percent = Math.ceil(requiredAttendance * (totalClasses + 1)); // +1 for the next class
    let additionalClassesNeeded = classesNeededFor75Percent - attendedClasses;

    // If the current attendance is already above 75%, no additional classes are needed
    if (currentAttendance > 75) {
        document.getElementById('classesNeeded').innerText = "You already meet the attendance requirement!";
    } else if (additionalClassesNeeded <= 0) {
        document.getElementById('classesNeeded').innerText = "You are already at 75% or more attendance!";
    } else {
        // Calculate how many future classes need to be attended to exceed 75%
        let futureClasses = 0;
        while ((attendedClasses + futureClasses) / (totalClasses + futureClasses) <= requiredAttendance) {
            futureClasses++;
        }
        document.getElementById('classesNeeded').innerText = `Classes Needed to Exceed 75%: ${futureClasses}`;
    }
});
