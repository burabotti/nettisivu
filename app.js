    document.getElementById("pointButton").addEventListener("mousedown", pointManager);

    document.getElementById("upgrade1").addEventListener("mousedown", upgrade1);
    document.getElementById("upgrade2").addEventListener("mousedown", upgrade2);
    document.getElementById("upgrade3").addEventListener("mousedown", upgrade3);
    document.getElementById("upgrade4").addEventListener("mousedown", upgrade4);
    document.getElementById("upgrade5").addEventListener("mousedown", upgrade5);
    
    let pricesTexts = document.getElementsByClassName("cost");

    let points = 0;
    let multiplier = 1;  
    let prices = [10, 100, 200, 500, 1000]; // Upgrade prices

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
      }


      // Click upgrade code
      function upgrade1() {
        if (points >= prices[0]) {
            points -= prices[0];
            multiplier += 10;
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
            multiplier += 50;
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
            multiplier += 100;
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
            multiplier += 175;
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
            multiplier += 200;
            prices[4] *= 1.15;
            updateCreditText();
            playClickSound();
        } else {
          notEnoughCredits();
        }
      }


      function updateCreditText() {
        document.getElementById("pointText").innerHTML = "Credits: " + (Math.round(points * 100) / 100).toFixed(2) + "$";
        document.getElementById("multiplierText").innerHTML = "Credits per click: " + (Math.round(multiplier * 100) / 100).toFixed(2);
        pricesTexts[0].innerHTML = "Cost: " + (Math.round(prices[0] * 100) / 100).toFixed(2); + "$";
        pricesTexts[1].innerHTML = "Cost: " + (Math.round(prices[1] * 100) / 100).toFixed(2); + "$";
        pricesTexts[2].innerHTML = "Cost: " + (Math.round(prices[2] * 100) / 100).toFixed(2); + "$";
        pricesTexts[3].innerHTML = "Cost: " + (Math.round(prices[3] * 100) / 100).toFixed(2); + "$";
        pricesTexts[4].innerHTML = "Cost: " + (Math.round(prices[4] * 100) / 100).toFixed(2); + "$";
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

      let volume = document.querySelector("#volume-control");
      volume.addEventListener("change", function(e) {
      errorAudio.volume = e.currentTarget.value / 100;
})