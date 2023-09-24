function setToken(result) {
  let tokenUser = result.token;
  window.application.token = tokenUser;

  const params = {
    token: window.application.token,
  };

  request(
    `https://skypro-rock-scissors-paper.herokuapp.com/player-status`,
    params,
    playerStatus
  );
}

const playerStatus = function (result) {
  if (result["player-status"].status === "game") {
    window.application.id = result["player-status"].game.id
    window.application.renderScreen("renderPlayScreen");
    return;
  }

  const valuesResult = Object.values(result);
  const valuesStatus = valuesResult[1];
  const valuesGame = valuesResult[2];

  if (valuesResult[2]) {
    const game = Object.values(valuesGame);
    const gameId = game.join();
    window.application.id = gameId;
  }

  const status = Object.values(valuesStatus);
  const statusLobby = status.join();
  window.application.status = statusLobby;
};

function setPlayerList(data) {
  document.querySelector(".wrapper-list").innerHTML = "";

  for (let i = 0; i < data.list.length; i++) {
    window.application.renderBlock(
      "player-list",
      document.querySelector(".wrapper-list"),
      data.list[i].login
    );
  }
}

function setStart(result) {
  const valuesResult = Object.values(result);
  const valuesGame = valuesResult[1];
  const valuesId = valuesGame.game;
  const gameId = valuesId.id;
  window.application.id = gameId;
}

function SetGameStatus(result) {
  const valuesResult = Object.values(result);
  //   console.log(result);

  const valuesStatus = valuesResult[1];
  //   console.log(valuesStatus);

  const valuesStatusGame = Object.entries(valuesStatus);
  //   console.log(valuesStatusGame);

  const statusLobby = valuesStatusGame[0][1];
  //   console.log(statusLobby);

  window.application.status = statusLobby;

  if (window.application.status === "waiting-for-your-move") {
    window.application.renderScreen("renderPlayScreen");
  }

  if (window.application.status === "lose") {
    window.application.renderScreen("renderPlayLoserScreen");
  }

  if (window.application.status === "win") {
    window.application.renderScreen("renderPlayWinScreen");
  }
}

function SetPlay(result) {
  const valuesResult = Object.values(result);
  console.log(result);
  const valuesStatus = valuesResult[1];
  console.log(valuesStatus);
  const valuesStatusGame = Object.entries(valuesStatus);
  console.log(valuesStatusGame);
  const statusLobby = valuesStatusGame[0][1];
  console.log(statusLobby);
  window.application.status = statusLobby;
}
