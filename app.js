    document.getElementById("pointButton").addEventListener("mousedown", pointManager);

    document.getElementById("upgrade1").addEventListener("mousedown", upgrade1);
    document.getElementById("upgrade2").addEventListener("mousedown", upgrade2);
    document.getElementById("upgrade3").addEventListener("mousedown", upgrade3);
    document.getElementById("upgrade4").addEventListener("mousedown", upgrade4);
    document.getElementById("upgrade5").addEventListener("mousedown", upgrade5);
    document.getElementById("upgrade6").addEventListener("mousedown", upgrade6);
    document.getElementById("upgrade7").addEventListener("mousedown", upgrade7);
    document.getElementById("upgrade8").addEventListener("mousedown", upgrade8);
    document.getElementById("upgrade9").addEventListener("mousedown", upgrade9);
    document.getElementById("upgrade10").addEventListener("mousedown", upgrade10);
    
    let pricesTexts = document.getElementsByClassName("cost");
    
    
    
    let points = 0;
    let multiplier = 1;  
    let prices = [16, 64, 144, 256, 400, 576, 784, 1024, 1296, 1600]; // Upgrade prices

    let clickAudio = new Audio("clicksound.ogg");
    let errorAudio = new Audio("errorsound.ogg");

    


    // Update texts to correct values on site load.
    window.onload = function() {
      updateCreditText();
      
    };



      // Add credit when user clicks button.
      function pointManager() {
        playClickSound();
        points += multiplier;
        updateCreditText();
        achManager();
      }


      // Click upgrade code
      function upgrade1() {
        if (points >= prices[0]) {
            points -= prices[0];
            multiplier += 4;
            prices[0] *= 1.15;
            updateCreditText();
            playClickSound();
        } else {
          notEnoughCredits();
        }
      }

      function upgrade2() {
        if (points >= prices[1]) {
            points -= prices[1];
            multiplier += 8;
            prices[1] *= 1.15;
            updateCreditText();
            playClickSound();
        } else {
          notEnoughCredits();
        }
      }

      function upgrade3() {
        if (points >= prices[2]) {
            points -= prices[2];
            multiplier += 12;
            prices[2] *= 1.15;
            updateCreditText();
            playClickSound();
        } else {
          notEnoughCredits();
        }
      }

      function upgrade4() {
        if (points >= prices[3]) {
            points -= prices[3];
            multiplier += 16;
            prices[3] *= 1.15;
            updateCreditText();
            playClickSound();
        } else {
          notEnoughCredits();
        }
      }

      function upgrade5() {
        if (points >= prices[4]) {
            points -= prices[4];
            multiplier += 20;
            prices[4] *= 1.15;
            updateCreditText();
            playClickSound();
        } else {
          notEnoughCredits();
        }
      }

      function upgrade6() {
        if (points >= prices[5]) {
            points -= prices[5];
            multiplier += 24;
            prices[5] *= 1.15;
            updateCreditText();
            playClickSound();
        } else {
          notEnoughCredits();
        }
      }

      function upgrade7() {
        if (points >= prices[6]) {
            points -= prices[6];
            multiplier += 28;
            prices[6] *= 1.15;
            updateCreditText();
            playClickSound();
        } else {
          notEnoughCredits();
        }
      }

      function upgrade8() {
        if (points >= prices[7]) {
            points -= prices[7];
            multiplier += 32;
            prices[7] *= 1.15;
            updateCreditText();
            playClickSound();
        } else {
          notEnoughCredits();
        }
      }

      function upgrade9() {
        if (points >= prices[8]) {
            points -= prices[8];
            multiplier += 36;
            prices[8] *= 1.15;
            updateCreditText();
            playClickSound();
        } else {
          notEnoughCredits();
        }
      }

      function upgrade10() {
        if (points >= prices[9]) {
            points -= prices[9];
            multiplier += 40;
            prices[9] *= 1.15;
            updateCreditText();
            playClickSound();
        } else {
          notEnoughCredits();
        }
      }

      // Sets html texts to correct values, very messy.
      function updateCreditText() {
        document.getElementById("pointText").innerHTML = "Credits: " + (Math.round(points * 100) / 100).toFixed(2) + "$" + "<br />";
        document.getElementById("multiplierText").innerHTML = "Credits per click: " + (Math.round(multiplier * 100) / 100).toFixed(2);
        pricesTexts[0].innerHTML = "Cost: " + prices[0].toFixed(2) + "$";
        pricesTexts[1].innerHTML = "Cost: " + prices[1].toFixed(2) + "$";
        pricesTexts[2].innerHTML = "Cost: " + prices[2].toFixed(2) + "$";
        pricesTexts[3].innerHTML = "Cost: " + prices[3].toFixed(2) + "$";
        pricesTexts[4].innerHTML = "Cost: " + prices[4].toFixed(2) + "$";
        pricesTexts[5].innerHTML = "Cost: " + prices[5].toFixed(2) + "$";
        pricesTexts[6].innerHTML = "Cost: " + prices[6].toFixed(2) + "$";
        pricesTexts[7].innerHTML = "Cost: " + prices[7].toFixed(2) + "$";
        pricesTexts[8].innerHTML = "Cost: " + prices[8].toFixed(2) + "$";
        pricesTexts[9].innerHTML = "Cost: " + prices[9].toFixed(2) + "$";
        updateAchTexts();
      }

      // Display not enough credits message.
      function notEnoughCredits() {
        errorAudio.currentTime = 0;
        errorAudio.play();
        $("#alarmmsg").finish();
        $("#alarmmsg").html("Not enough credits!").fadeIn(100).delay(1000).fadeOut();
      }

      function playClickSound() {
        clickAudio.currentTime = 0;
        clickAudio.play();
      }




