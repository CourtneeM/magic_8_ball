import magic8Ball from './magic_ball';
import displayController from './display_controller';

const initialRender = (() => {
  document.querySelector('body').appendChild(displayController.initialRender());
})();

const eventHandler = (() => {
  document.querySelector('#ask-btn').addEventListener('click', () => {
    displayController.messages.loadingMessage();
    setTimeout(() => {
      displayController.messages.answer(magic8Ball.shake());
    }, 3000)
  });
})();
