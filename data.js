let player = {
    points: points,
    multiplier: multiplier,
    prices: prices,
    achievements: achievements
}

function saveData() {
    player.points = points;
    player.multiplier = multiplier;
    player.prices = prices;
    player.achievements = achievements;
    localStorage["player"] = JSON.stringify(player);
    
    console.log("Saved points: " + player.points + "\n Credits per click: " + player.multiplier + "\n Upgrade prices: " + player.prices);
  }

  function loadData() {
    player = JSON.parse(localStorage["player"]);
    points = player.points;
    multiplier = player.multiplier;
    prices = player.prices;
    achievements = player.achievements;
    updateCreditText();
  }

  function clearData() {
    localStorage.clear();
  }
