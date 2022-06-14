import { Outlet } from 'react-router-dom';
import { Header, Footer } from './modules';

export default function App() {
  return (
    <div className="App flex flex-col h-screen text-brand-blue">
      <Header />
      <div className="App-body px-8 pb-[70px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
