    document.getElementById("pointButton").addEventListener("mousedown", pointManager);


    
    let pricesTexts = document.getElementsByClassName("cost");
    
    
    // main variables
    let points = 0;
    let multiplier = 1; 
    let autoclicks = 0;

    let prices = {
      price1: 10,
      price2: 50,
      price3: 100,
      price4: 500,
      price5: 1000,
      price6: 2000,
      price7: 5000,
      price8: 10000,
      price9: 100000,
      price10: 500000
    }; // Upgrade prices

    // audio variables
    let clickAudio = new Audio("clicksound.ogg");
    let errorAudio = new Audio("errorsound.ogg");
    
    


    // Update texts to correct values on site load.
    window.onload = function() {
      updateCreditText();
      loadData();
    };

    // Formats values to currency.
    var formatter = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    });
    

    // Autosaves every 10 seconds.
    let intervalId = window.setInterval(function(){
      saveData();
    }, 10000);

    // automatic clicker
    let automaticClicks = window.setInterval(function(){
      points += (autoclicks / 100);
      updateCreditText();
    }, 10);
    

      // Add credit when user clicks button.
      function pointManager() {
        playClickSound();
        points += multiplier;
        updateCreditText();
        achManager();
      }

      // Sets html texts to correct values, very messy.
      function updateCreditText() {
        document.getElementById("pointText").innerHTML = "Money: " + formatter.format(points) + "<br />";
        document.getElementById("multiplierText").innerHTML = "per click: " + formatter.format(multiplier);
        document.getElementById("cpsText").innerHTML = "Automatic: " + formatter.format(autoclicks);
        pricesTexts[0].innerHTML = "Cost: " + formatter.format(prices.price1);
        pricesTexts[1].innerHTML = "Cost: " + formatter.format(prices.price2);
        pricesTexts[2].innerHTML = "Cost: " + formatter.format(prices.price3);
        pricesTexts[3].innerHTML = "Cost: " + formatter.format(prices.price4);
        pricesTexts[4].innerHTML = "Cost: " + formatter.format(prices.price5);
        pricesTexts[5].innerHTML = "Cost: " + formatter.format(prices.price6);
        pricesTexts[6].innerHTML = "Cost: " + formatter.format(prices.price7);
        pricesTexts[7].innerHTML = "Cost: " + formatter.format(prices.price8);
        pricesTexts[8].innerHTML = "Cost: " + formatter.format(prices.price9);
        pricesTexts[9].innerHTML = "Cost: " + formatter.format(prices.price10);
        updateAchTexts();
      }

      // Display not enough credits message.
      function notEnoughCredits() {
        errorAudio.currentTime = 0;
        errorAudio.play();
        $("#alarmmsg").finish();
        $("#alarmmsg").css("color", "#ff0000");
        $("#alarmmsg").html("❌ Not enough credits! ❌").fadeIn(100).delay(1000).fadeOut();

      }

      // Audio manager lmao
      function playClickSound() {
        clickAudio.currentTime = 0;
        clickAudio.play();
      }




