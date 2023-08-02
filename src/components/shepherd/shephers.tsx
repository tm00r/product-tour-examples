import Shepherd from 'shepherd.js';

export const shepherdExample = new Shepherd.Tour({
  useModalOverlay: true,
  defaultStepOptions: {
    classes: 'shadow-md bg-purple-dark',
    scrollTo: true,
  },
});

const buttons = [
  {
    classes: 'ant-btn ant-btn-primary',
    text: 'Exit',
    type: 'cancel',
    action: shepherdExample.cancel,
  },
  {
    classes: 'shepherd-button-primary',
    text: 'Back',
    type: 'back',
    action: shepherdExample.back,
  },
  {
    classes: 'shepherd-button-primary',
    text: 'Next',
    type: 'next',
    action: shepherdExample.next,
  },
];

const defaultStepConfig = {
  buttons,
  cancelIcon: {
    enabled: true,
  },
  beforeShowPromise: function () {
    return new Promise(function (resolve) {
      setTimeout(function () {
        window.scrollTo(0, 0);
        resolve();
      }, 500);
    });
  },
  scrollTo: false,
  when: {
    show: () => {
      console.log('show step');
    },
    hide: () => {
      console.log('hide step');
    },
  },
};

shepherdExample.addSteps([
  {
    id: 'intro',
    title: 'Welcome to React-Shepherd!',
    text: [
      'React-Shepherd is a JavaScript library for guiding users through your React app.',
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    ...defaultStepConfig,

  },
  {
    id: 'meme-1',
    attachTo: {
      element: '.meme-1',
      on: 'bottom',
    },
    title: 'Shepherd: Step 1',
    text: [
      'Shepherd is another one popular JS lib for guiding users through your app.',
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    ...defaultStepConfig,
  },
  {
    id: 'meme-2',
    attachTo: {
      element: '.meme-2',
      on: 'bottom',
    },
    title: 'Shepherd: Step 2',
    text: [
      'Shepherd uses Floating UI to highlight the elements on the page. It is very flexible and customizable. <br> But...',
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    ...defaultStepConfig,
  },
  {
    id: 'meme-3',
    attachTo: {
      element: '.meme-3',
      on: 'left',
    },
    title: 'Shepherd: Step 3',
    text: [
      'Well... Shepherd is actually purely typed',
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    ...defaultStepConfig,
  },

]);
