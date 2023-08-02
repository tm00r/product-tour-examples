import introJs, { Step } from 'intro.js';
import ReactDOMServer from 'react-dom/server';

const steps: Step[] = [
  {
    title: 'Intro.js example here!',
    intro:
      'Hello World! 👋 <br> This is <b><mark>Intro.js</mark></b> tour. <br>Intro.js is one of the popular tools for creating simple product tours through a whole web application',
  },
  {
    element: '.animal-1',
    title: 'This is Simba! He is not a lion... But he is a Simba! 🐱',
    intro: 'Intro.js looks pretty good, right? And animations are smooth out of the box!',
    position: 'bottom',
  },
  {
    element: '.animal-2',
    title: 'Simba again!',
    intro: ReactDOMServer.renderToStaticMarkup(
      <div>
        Intro can use HTML as well!
        <br />
        <img
          src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          width="255px"
        />
        <br />
        Isn't that cool? <b>Actually not that much...</b> 😅
        <br /> Because it doesn't support JSX. We will have to use{' '}
        <code>renderToStaticMarkup</code> method from{' '}
        <code>ReactDOMServer</code> as for Highcharts' tooltip.
      </div>
    ),
    position: 'bottom',
  },
  {
    element: '.animal-3',
    title: 'Simba is disappointed 😔',
    intro: ReactDOMServer.renderToStaticMarkup(
      <div>
        But it's actually <b>very simple tool</b> to use!
        Because it's very simple... Too simple I would say... <br />
        It's not so customizable as Shepherd. <br />
      </div>
    ),
    position: 'bottom',
  },
  {
    element: '.animal-4',
    intro: ReactDOMServer.renderToStaticMarkup(
      <div>
        Intro has @types/intro.js, so it's easy to use with TypeScript!
        For localization we will have to use <code>intl</code> object since all labels are type of "string".
      </div>
    ),
    position: 'left',
  },
  {
    element: '.animal-5',
    intro: ReactDOMServer.renderToStaticMarkup(
      <div>
        But... in some cases behave weirdly... <br />
      </div>
    ),
    position: 'left',
  },
];

export const introJSONExample = introJs().setOptions({
  tooltipClass: 'customTooltip',
  steps: steps,
  showProgress: true,
});

export const introInlineExample = introJs().setOptions({
  tooltipClass: 'customTooltip',
});
