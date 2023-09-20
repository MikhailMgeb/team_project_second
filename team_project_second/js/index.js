document.addEventListener('DOMContentLoaded', () => {
  window.application = {
    blocks: {},
    screens: {},
    renderScreen: function(screenName) {
      window.application.screens[screenName]();
    },
    renderBlock: function (blockName, container, textContent) {
      window.application.blocks[blockName](container, textContent);
    },
    timers: []
  }
  console.log(window.application)
  window.application.renderBlock = window.application.renderBlock;
  window.application.blocks['mainButton'] = renderMainButton;
  window.application.blocks['playLobbyButton'] = renderPlayLobbyButton;
  window.application.blocks['input'] = renderInput;
  window.application.blocks['player-list'] = playerList;
  window.application.blocks['playHallButton'] = renderPlayHallButton;
  window.application.blocks['playPersonageRockButton'] = renderPlayPersonageRockButton;
  window.application.blocks['playPersonageScissorsButton'] = renderPlayPersonageScissorsButton;
  window.application.blocks['playPersonagePaperButton'] = renderPlayPersonagePaperButton;
  window.application.blocks['playLogotipButton'] = renderPlayLogotipButton;
  window.application.blocks['mainImage'] = renderMainImage;
  window.application.blocks['loserImage'] = renderLoserImage;
  window.application.blocks['continueButton'] = renderContinueButton;
  window.application.blocks['returnLobbyButton'] = renderReturnLobbyButton;
  window.application.blocks['winImage'] = renderWinImage;

  window.application.screens['autorizationScreen'] = renderAutorizationScreen;
  window.application.screens['renderLobbyScreen'] = renderLobbyScreen;
  window.application.screens['renderWaitingScreen'] = renderWaitingScreen;
  window.application.screens['renderPlayScreen'] = renderPlayScreen;
  window.application.screens['renderPlayLoserScreen'] = renderPlayLoserScreen;
  window.application.screens['renderPlayWinScreen'] = renderPlayWinScreen;

  window.application.renderScreen('autorizationScreen');
})