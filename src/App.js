import './App.css';
import AppRoutes from './Routes';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#c6a815',
      },
      components: {
        Menu: {
          itemSelectedBg: '#c6a815',
          itemHoverBg: 'rgba(214, 179, 0, 0.4)',
          itemSelectedColor: '#2f463d',
          itemHoverColor: '#2f463d',
          subMenuItemBg: 'rgba(255, 255,255, 1)'
          // algorithm: true
        },
       
      }
    }}>
      <AppRoutes />
      </ConfigProvider>
  );
}

export default App;
