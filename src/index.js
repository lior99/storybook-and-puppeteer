import './components/MyComp.js';

const init = () => {
  const webComp = document.createElement('my-counter-comp');
  document.querySelector('body').appendChild(webComp);
};

export default init();
