import './styles/style.css';

const displayController = (() => {
  const generate = (() => {
    const header = () => {
      const h1 = document.createElement('h1');
      
      h1.id = 'title';
      h1.textContent = 'Magic 8 Ball';

      return h1;
    }

    const magic8BallContainer = () => {
      const magic8BallContainer = document.createElement('div');
      const h2 = document.createElement('h2');

      magic8BallContainer.id = 'magic-8-ball-container';
      h2.id = 'main-text';

      h2.textContent = 'Ask a question';

      magic8BallContainer.appendChild(h2);
      return magic8BallContainer;
    }

    const askBtn = () => {
      const askBtn = document.createElement('button');
      
      askBtn.id = 'ask-btn';
      askBtn.textContent = 'Ask';

      return askBtn;
    }

    return { header, magic8BallContainer, askBtn }
  })();

  const messages = (() => {
    const loadingMessage = () => {
      const h2 = document.querySelector('#main-text');
      h2.textContent = 'Hmm... let me think';
    }

    const answer = answer => {
      const h2 = document.querySelector('#main-text');
      h2.textContent = answer;
    }

    return { loadingMessage, answer }
  })();

  const initialRender = () => {
    const appContainer = document.createElement('div');
    const header = generate.header();
    const magic8BallContainer = generate.magic8BallContainer();
    const askBtn = generate.askBtn();

    appContainer.id = 'app-container';

    [header, magic8BallContainer, askBtn].forEach(el => appContainer.appendChild(el));
    return appContainer;
  }

  return { messages, initialRender }
})();

export default displayController;
