import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import zhCN from '@xlion/component/dist/locale/zh_CN';
import { ConfigProvider } from '@xlion/component';
import '@xlion/component/dist/index.less';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import './index.less'


dayjs.locale('zh-cn');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
)
