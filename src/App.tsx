import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import TopPage from './pages/TopPage';

const App: FC = () => {
  return (
    <RecoilRoot>
      <TopPage />
    </RecoilRoot>
  );
};

export default App;
