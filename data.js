let player = {
    points: points,
    multiplier: multiplier,
    prices: prices,
    achievements: achievements,
    clickspersecond: autoclicks
}

function saveData() {
    player.points = points;
    player.multiplier = multiplier;
    player.prices = prices;
    player.achievements = achievements;
    player.clickspersecond = autoclicks;
    localStorage["player"] = JSON.stringify(player);

    $("#alarmmsg").finish();
    $("#alarmmsg").css("color", "#4CBB17");
    $("#alarmmsg").html("💾 Saved succesfully. 💾").fadeIn(100).delay(1000).fadeOut();
    
    console.log(player);
  }

  function loadData() {
    player = JSON.parse(localStorage["player"]);
    points = player.points;
    multiplier = player.multiplier;
    prices = player.prices;
    achievements = player.achievements;
    autoclicks = player.clickspersecond;
    updateCreditText();
  }

  function clearData() {
    localStorage.clear();
  }
