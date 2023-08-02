import { FC, useState } from 'react';
import { ProCard } from '@ant-design/pro-components';
import { Button, Col, Row, Image, Space } from 'antd';
import Joyride from 'react-joyride';
import { joyrideConfig } from './joyride';

const gallery = Object.values(
  import.meta.glob('../../assets/images/shepherd/*.{png,jpg,jpeg,PNG,JPEG}', {
    eager: true,
    as: 'url',
  })
);

export const JoyrideContent: FC<{ id: string }> = () => {
  const [isRunning, setIsRunning] = useState(false);
  return (
    <>
      <Joyride
        {...joyrideConfig}
        run={isRunning}
        callback={(data) => {
          if (data.action === 'reset' || data.action === 'close') setIsRunning(false);
        }}
      />
      <ProCard
        direction="column"
        gutter={[0, 16]}
        style={{
          height: '80vh',
          maxWidth: 1200,
        }}
        extra={
          <Space>
            <Button key="1" onClick={() => setIsRunning(true)}>
              React Joyride
            </Button>
          </Space>
        }
      >
        <Row wrap gutter={[10, 10]} justify="center">
          {gallery.map((image: string) => {
            const imageName = image
              .replace('.jpg', '')
              .replace('/src/assets/images/shepherd/', '');
            return (
              <Col key={imageName}>
                <Image
                  className={`meme-${imageName}`}
                  src={`${image}`}
                  width={250}
                />
              </Col>
            );
          })}
        </Row>
      </ProCard>
    </>
  );
};
