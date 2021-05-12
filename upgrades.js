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



function upgrade1() {
    if (points >= prices.price1) {
        points -= prices.price1;
        multiplier += 4;
        autoclicks += 0.25;
        prices.price1 *= 1.15;
        updateCreditText();
        playClickSound();
    } else {
      notEnoughCredits();
    }
  }

  function upgrade2() {
    if (points >= prices.price2) {
        points -= prices.price2;
        multiplier += 8;
        autoclicks += 0.50;
        prices.price2 *= 1.15;
        updateCreditText();
        playClickSound();
    } else {
      notEnoughCredits();
    }
  }

  function upgrade3() {
    if (points >= prices.price3) {
        points -= prices.price3;
        multiplier += 12;
        autoclicks += 0.50;
        prices.price3 *= 1.15;
        updateCreditText();
        playClickSound();
    } else {
      notEnoughCredits();
    }
  }

  function upgrade4() {
    if (points >= prices.price4) {
        points -= prices.price4;
        multiplier += 16;
        autoclicks += 0.75;
        prices.price43 *= 1.15;
        updateCreditText();
        playClickSound();
    } else {
      notEnoughCredits();
    }
  }

  function upgrade5() {
    if (points >= prices.price5) {
        points -= prices.price5;
        multiplier += 20;
        autoclicks += 1;
        prices.price5 *= 1.15;
        updateCreditText();
        playClickSound();
    } else {
      notEnoughCredits();
    }
  }

  function upgrade6() {
    if (points >= prices.price6) {
        points -= prices.price6;
        multiplier += 24;
        autoclicks += 1.50;
        prices.price6 *= 1.15;
        updateCreditText();
        playClickSound();
    } else {
      notEnoughCredits();
    }
  }

  function upgrade7() {
    if (points >= prices.price7) {
        points -= prices.price7;
        multiplier += 28;
        autoclicks += 2;
        prices.price7 *= 1.15;
        updateCreditText();
        playClickSound();
    } else {
      notEnoughCredits();
    }
  }

  function upgrade8() {
    if (points >= prices.price8) {
        points -= prices.price8;
        multiplier += 32;
        autoclicks += 2.50;
        prices.price8 *= 1.15;
        updateCreditText();
        playClickSound();
    } else {
      notEnoughCredits();
    }
  }

  function upgrade9() {
    if (points >= prices.price9) {
        points -= prices.price9;
        multiplier += 36;
        autoclicks += 3.25;
        prices.price9 *= 1.15;
        updateCreditText();
        playClickSound();
    } else {
      notEnoughCredits();
    }
  }

  function upgrade10() {
    if (points >= prices.price10) {
        points -= prices.price10;
        multiplier += 40;
        autoclicks += 3.75;
        prices.price10 *= 1.15;
        updateCreditText();
        playClickSound();
    } else {
      notEnoughCredits();
    }
  }