let achievements = {
    ach1: 0,
    ach2: 0,
    ach3: 0,
    ach4: 0,
    ach5: 0,
}

let achTexts = document.getElementsByClassName("achievement");

// Marks achievements as done.
function achManager() {
    
    if(points >= 50 && achievements.ach1 == 0) {
        achievements.ach1 = 1;
    }
    if(points >= 500 && achievements.ach2 == 0) {
        achievements.ach2 = 1;
    }
    if(points >= 5000 && achievements.ach3 == 0) {
        achievements.ach3 = 1; 
    }
    if(points >= 50000 && achievements.ach4 == 0) {
        achievements.ach4 = 1;  
    }
    if(points >= 500000 && achievements.ach5 == 0) {
        achievements.ach5 = 1;
    }

    updateAchTexts();
}

// Checks if achievement has been done and updates texts.
function updateAchTexts() {
    if (achievements.ach1 == 1) {
        achTexts[0].innerHTML = "Get 50 points" + "<br />" + "Achievement done. ✅";
    } else {
        achTexts[0].innerHTML = "Get 50 points" + "<br />" + points.toFixed(2) + "/50 ❌";
    }
    if (achievements.ach2 == 1) {
        achTexts[1].innerHTML = "Get 500 points" + "<br />" + "Achievement done. ✅";
    } else {
        achTexts[1].innerHTML = "Get 500 points" + "<br />" + points.toFixed(2) + "/500 ❌";
    }
    if (achievements.ach3 == 1) {
        achTexts[2].innerHTML = "Get 5000 points" + "<br />" + "Achievement done. ✅";
    } else {
        achTexts[2].innerHTML = "Get 5000 points" + "<br />" + points.toFixed(2) + "/5000 ❌";
    }
    if (achievements.ach4 == 1) {
        achTexts[3].innerHTML = "Get 50,000 points" + "<br />" + "Achievement done. ✅";
    } else {
        achTexts[3].innerHTML = "Get 50,000 points" + "<br />" + points.toFixed(2) + "/50,000 ❌";
    }
    if (achievements.ach5 == 1) {
        achTexts[4].innerHTML = "Get 500,000 points" + "<br />" + "Achievement done. ✅";
    } else {
        achTexts[4].innerHTML = "Get 500,000 points" + "<br />" + points.toFixed(2) + "/500,000 ❌";
    }
}