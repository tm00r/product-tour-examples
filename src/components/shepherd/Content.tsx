import { ProCard } from '@ant-design/pro-components';
import { Button, Col, Row, Image, Space } from 'antd';
import { FC } from 'react';
import { shepherdExample } from './shephers';

const gallery = Object.values(
  import.meta.glob('../assets/images/shepherd/*.{png,jpg,jpeg,PNG,JPEG}', {
    eager: true,
    as: 'url',
  })
);

export const ShepherdContent: FC<{id: string}> = () => {
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
            <Button key="1" onClick={() => shepherdExample.start()}>
              Shepherd.js
            </Button>
          </Space>
        }
      >
        <Row wrap gutter={[10, 10]}>
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
