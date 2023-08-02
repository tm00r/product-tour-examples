import { Space, Typography } from 'antd';
import { Props as JoyrideProps, Step } from 'react-joyride';
import { ReactComponent as JoyrideSVG } from '../../assets/joyride.svg';

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
        <JoyrideSVG />
      </Space>
    ),
    ...defaultStepConfig,
  },
  {
    title: '',
    target: '.meme-1',
    placement: 'right',
    content: (
      <Space direction="vertical" size="large">
        <Text>This is first meme</Text>
        <JoyrideSVG />
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
        <Text>Lol 2</Text>
        <JoyrideSVG />
      </Space>
    ),
    ...defaultStepConfig,
  },
];

export const joyrideConfig: JoyrideProps = {
  steps,
  continuous: true,
};
