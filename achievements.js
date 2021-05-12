let achievements = {
    ach1: 0,
    ach2: 0,
    ach3: 0,
    ach4: 0,
    ach5: 0,
    ach6: 0,
    ach7: 0,
    ach8: 0,
    ach9: 0,
    achi: 0
}

let achTexts = document.getElementsByClassName("achievement");
let achievementAudio = new Audio("achsound.ogg");

// Marks achievements as done.
function achManager() {
    
    if(points >= 50 && achievements.ach1 == 0) {
        achievements.ach1 = 1;
        achievementUnlocked()
    }
    if(points >= 500 && achievements.ach2 == 0) {
        achievements.ach2 = 1;
        achievementUnlocked()
    }
    if(points >= 5000 && achievements.ach3 == 0) {
        achievements.ach3 = 1; 
        achievementUnlocked()
    }
    if(points >= 50000 && achievements.ach4 == 0) {
        achievements.ach4 = 1;  
    }
    if(points >= 500000 && achievements.ach5 == 0) {
        achievements.ach5 = 1;
        achievementUnlocked()
    }

    // Autoclick achievements
    if(autoclicks >= 10 && achievements.ach6 == 0) {
        achievements.ach6 = 1;
        achievementUnlocked()
    }
    if(autoclicks >= 100 && achievements.ach7 == 0) {
        achievements.ach7 = 1;
        achievementUnlocked()
    }
    if(autoclicks >= 1000 && achievements.ach8 == 0) {
        achievements.ach8 = 1;
        achievementUnlocked()
    }
    if(autoclicks >= 10000 && achievements.ach9 == 0) {
        achievements.ach9 = 1;
        achievementUnlocked()
    }
    if(autoclicks >= 100000 && achievements.achi == 0) {
        achievements.achi = 1;
        achievementUnlocked()
    }

    updateAchTexts();
}

// Checks if achievement has been done and updates texts.
function updateAchTexts() {
    if (achievements.ach1 == 1) {
        achTexts[0].innerHTML = "Get 50 points" + "<br />" + "Achievement done. ✅";
    } else {
        achTexts[0].innerHTML = "Get 50 points" + "<br />" + formatter.format(points) + "/50 ❌";
    }
    if (achievements.ach2 == 1) {
        achTexts[1].innerHTML = "Get 500 points" + "<br />" + "Achievement done. ✅";
    } else {
        achTexts[1].innerHTML = "Get 500 points" + "<br />" + formatter.format(points) + "/500 ❌";
    }
    if (achievements.ach3 == 1) {
        achTexts[2].innerHTML = "Get 5000 points" + "<br />" + "Achievement done. ✅";
    } else {
        achTexts[2].innerHTML = "Get 5000 points" + "<br />" + formatter.format(points) + "/5000 ❌";
    }
    if (achievements.ach4 == 1) {
        achTexts[3].innerHTML = "Get 50,000 points" + "<br />" + "Achievement done. ✅";
    } else {
        achTexts[3].innerHTML = "Get 50,000 points" + "<br />" + formatter.format(points) + "/50,000 ❌";
    }
    if (achievements.ach5 == 1) {
        achTexts[4].innerHTML = "Get 500,000 points" + "<br />" + "Achievement done. ✅";
    } else {
        achTexts[4].innerHTML = "Get 500,000 points" + "<br />" + formatter.format(points) + "/500,000 ❌";
    }

    // Autoclick achievements
    if (achievements.ach6 == 1) {
        achTexts[5].innerHTML = "Get 10 autoclicks" + "<br />" + "Achievement done. ✅";
    } else {
        achTexts[5].innerHTML = "Get 10 autoclicks" + "<br />" + formatter.format(autoclicks) + "/10 ❌";
    }
    if (achievements.ach7 == 1) {
        achTexts[6].innerHTML = "Get 100 autoclicks" + "<br />" + "Achievement done. ✅";
    } else {
        achTexts[6].innerHTML = "Get 100 autoclicks" + "<br />" + formatter.format(autoclicks) + "/100 ❌";
    }
    if (achievements.ach8 == 1) {
        achTexts[7].innerHTML = "Get 1,000 autoclicks" + "<br />" + "Achievement done. ✅";
    } else {
        achTexts[7].innerHTML = "Get 1,000 autoclicks" + "<br />" + formatter.format(autoclicks) + "/1000 ❌";
    }
    if (achievements.ach9 == 1) {
        achTexts[8].innerHTML = "Get 10,000 autoclicks" + "<br />" + "Achievement done. ✅";
    } else {
        achTexts[8].innerHTML = "Get 10,000 autoclicks" + "<br />" + formatter.format(autoclicks) + "/10,000 ❌";
    }
    if (achievements.achi == 1) {
        achTexts[9].innerHTML = "Get 100,000 autoclicks" + "<br />" + "Achievement done. ✅";
    } else {
        achTexts[9].innerHTML = "Get 100,000 autoclicks" + "<br />" + formatter.format(autoclicks) + "/100,000 ❌";
    }
}

// Checks if achievement is done with autoclicks.
let checkAch = window.setInterval(function(){
    achManager();
  }, 100);



function achievementUnlocked() {
    achievementAudio.play();
    $("#alarmmsg").finish();
    $("#alarmmsg").css("color", "#00BFFF");
    $("#alarmmsg").html("🎉 Achievement completed! 🎉").fadeIn(100).delay(1000).fadeOut();
}