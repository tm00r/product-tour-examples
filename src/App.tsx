import 'intro.js/introjs.css';
import 'shepherd.js/dist/css/shepherd.css';
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import LogoSmall from './assets/logo-icon.svg';
import { IntroContent } from './components/intro/Content';
import { mainTabs } from './config/tabs';
import { useState } from 'react';
import { ShepherdContent } from './components/shepherd/Content';
import { ContentSwitch } from './components/ContentSwitch';

function App() {
  const [activeTab, setActiveTab] = useState(mainTabs[0].key);

  return (
    <ProLayout
      logo={LogoSmall}
      theme="dark"
      title="Enmon"
      headerTitleRender={false}
      layout="side"
    >
      <PageContainer
        fixedHeader
        tabList={mainTabs}
        onTabChange={setActiveTab}
        header={{
          title: 'Interactive application tours comparison',
        }}
      >
        <ContentSwitch activeId={activeTab} >
          <ShepherdContent id={mainTabs[0].key} />
          <IntroContent id={mainTabs[1].key} />
          <IntroContent id={mainTabs[1].key} />
        </ContentSwitch>
      </PageContainer>
    </ProLayout>
  );
}

export default App;
