    document.getElementById("pointButton").addEventListener("click", pointManager);

    document.getElementById("upgrade1").addEventListener("click", upgrade1);
    document.getElementById("upgrade2").addEventListener("click", upgrade2);
    document.getElementById("upgrade3").addEventListener("click", upgrade3);
    document.getElementById("upgrade4").addEventListener("click", upgrade4);
    document.getElementById("upgrade5").addEventListener("click", upgrade5);
    
    var pricesTexts = document.getElementsByClassName("cost");

    var points = 0;
    var multiplier = 1;  

    var prices = [10, 100, 200, 500, 1000];




      function pointManager() {
        points += multiplier;
        updateCreditText();
      }


      function upgrade1() {
        if (points >= prices[0]) {
            points -= prices[0];
            multiplier += 10;
            prices[0] += 10;
            updateCreditText();
        } else {
          notEnoughCredits();
        }
      }

      function upgrade2() {
        if (points >= prices[1]) {
            points -= prices[1];
            multiplier += 50;
            prices[1] += 10;
            updateCreditText();
        } else {
          notEnoughCredits();
        }
      }

      function upgrade3() {
        if (points >= prices[2]) {
            points -= prices[2];
            multiplier += 100;
            prices[2] += 10;
            updateCreditText();
        } else {
          notEnoughCredits();
        }
      }

      function upgrade4() {
        if (points >= prices[3]) {
            points -= prices[3];
            multiplier += 175;
            prices[3] += 10;
            updateCreditText();
        } else {
          notEnoughCredits();
        }
      }

      function upgrade5() {
        if (points >= prices[4]) {
            points -= prices[4];
            multiplier += 200;
            prices[4] += 10;
            updateCreditText();
        } else {
          notEnoughCredits();
        }
      }


      function updateCreditText() {
        document.getElementById("pointText").innerHTML = "Credits: " + points;
        document.getElementById("multiplierText").innerHTML = "Multiplier: " + multiplier;
        pricesTexts[0].innerHTML = "Cost: " + prices[0] + "$";
        pricesTexts[1].innerHTML = "Cost: " + prices[1] + "$";
        pricesTexts[2].innerHTML = "Cost: " + prices[2] + "$";
        pricesTexts[3].innerHTML = "Cost: " + prices[3] + "$";
        pricesTexts[4].innerHTML = "Cost: " + prices[4] + "$";
      }

      function notEnoughCredits() {
        $("#alarmmsg").finish();
        $("#alarmmsg").html("Not enough credits!").fadeIn(100).delay(1000).fadeOut();
      }

  
