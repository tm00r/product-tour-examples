import { Space, Typography } from 'antd';
import { Props as JoyrideProps, Step } from 'react-joyride';
import { ReactComponent as JoyrideSVG } from '../../assets/joyride-icon.svg';
import { ReactComponent as TSLogo } from '../../assets/typescript.svg';

const Text = Typography;

const defaultStepConfig: Partial<Step> = {
  showProgress: true,
  showSkipButton: true,
};

const steps: Step[] = [
  {
    title: 'Welcome to the React Joyride demo!',
    target: '.ant-btn',
    placement: 'center',
    content: (
      <Space direction="vertical" size="large">
        <Text>
          Let's have a ride through <strong>Joyride</strong> features
        </Text>
      </Space>
    ),
    ...defaultStepConfig,
  },
  {
    title: 'Wide JSX support',
    target: '.meme-1',
    placement: 'right',
    content: (
      <Space direction="vertical" size="large">
        <Text>
          As you may have already noticed, <br />
          <strong>React Joyride supports JSX</strong>
        </Text>
        <JoyrideSVG />
        <iframe
          src="https://my.spline.design/test-d673c3f303fb4d528624ab945f6642cb/"
          width="300px"
          height="300px"
        ></iframe>
      </Space>
    ),
    ...defaultStepConfig,
  },
  {
    title: 'Welcome to the React Joyride demo!',
    target: '.meme-2',
    placement: 'left-end',
    content: (
      <Space direction="vertical" size="large">
        <Text>
          This lib has good <TSLogo /> support, <br />
          But... there are some <strong>not-so-friendly</strong> points of the implementation inside.
        </Text>
      </Space>
    ),
    ...defaultStepConfig,
  },
  {
    title: 'Welcome to the React Joyride demo!',
    target: '.meme-3',
    placement: 'left-end',
    locale: {
      back: 'Zpátečku',
      close: 'Ukončit',
      last: 'Na závěr',
      next: 'Kupředu',
      skip: 'Přeskočit',
    },
    content: (
      <Space direction="vertical" size="large">
        <Text>
          Also it has a lot of <strong>customization</strong> options And it
          supports <strong>localization</strong> for actions!
        </Text>
      </Space>
    ),
    ...defaultStepConfig,
  },
  {
    title: 'Welcome to the React Joyride demo!',
    target: '.meme-4',
    placement: 'right-end',
    locale: {
      back: 'Zpátečku',
      close: 'Ukončit',
      last: 'Na závěr',
      next: 'Kupředu',
      skip: 'Přeskočit',
    },
    content: (
      <Space direction="vertical" size="large">
        <Text>
          And it's not so difficult to work with it.
        </Text>
      </Space>
    ),
    ...defaultStepConfig,
  },
];

export const joyrideConfig: JoyrideProps = {
  steps,
  continuous: true,
};
