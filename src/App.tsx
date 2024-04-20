


import './App.less'

import { Tabs } from '@xlion/component';

import GlobalStyle from './pages/GlobalStyle';



function App() {


  const onChange = (val) => {
    console.log(val, '---val')
  }

  return (
    <Tabs
      defaultActiveKey="1"
      onChange={onChange}
      className='tabContainer'
      items={[
        {
          label: `全局样式定制`,
          key: '1',
          children: <GlobalStyle />,
        },
        {
          label: `组件样式定制`,
          key: '2',
          children: `Content of Tab Pane 2`,
        },
        {
          label: `预览主题`,
          key: '3',
          children: `Content of Tab Pane 3`,
        },
      ]}
    />

  )
}

export default App
