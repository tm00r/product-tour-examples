import { ProCard } from '@ant-design/pro-components';
import { Button, Col, Row, Image, Space } from 'antd';
import { FC } from 'react';
import { introJSONExample, introInlineExample } from './intro';

const gallery = Object.values(
  import.meta.glob('../assets/images/intro/*.{png,jpg,jpeg,PNG,JPEG}', {
    eager: true,
    as: 'url',
  })
);

export const IntroContent: FC<{ id: string }> = () => {
  return (
    <>
      <ProCard
        direction="column"
        gutter={[0, 16]}
        style={{
          height: '80vh',
          maxWidth: 1200,
        }}
        extra={
          <Space>
            <Button key="1" onClick={() => introJSONExample.start()}>
              Intro.js with JSON config
            </Button>
            <Button key="2" onClick={() => introInlineExample.start()}>
              Intro.js with inline config
            </Button>
          </Space>
        }
      >
        <Row wrap gutter={[10, 10]}>
          {gallery.map((image: string) => {
            const imageName = image
              .replace('.jpg', '')
              .replace('/src/assets/images/intro/', '');
            return (
              <Col key={imageName}>
                <Image
                  className={`animal-${imageName}`}
                  data-intro={`Animal-${imageName}-intro`}
                  data-title={`Animal-${imageName}-title`}
                  data-step={imageName}
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
