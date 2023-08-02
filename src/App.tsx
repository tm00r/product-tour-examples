import './App.css';
import 'intro.js/introjs.css';
import 'shepherd.js/dist/css/shepherd.css';
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import LogoSmall from './assets/logo-icon.svg';
import { IntroContent } from './components/intro/Content';
import { mainTabs } from './config/tabs';
import { useState } from 'react';
import { ShepherdContent } from './components/shepherd/Content';
import { ContentSwitch } from './components/ContentSwitch';
import { JoyrideContent } from './components/react-joyride/Content';

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
          <JoyrideContent id={mainTabs[0].key} />
          <IntroContent id={mainTabs[1].key} />
          <ShepherdContent id={mainTabs[2].key} />
        </ContentSwitch>
      </PageContainer>
    </ProLayout>
  );
}

export default App;
