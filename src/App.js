import './App.css';
import TryGlassesApp from './Components/TryGlassesApp/TryGlassesApp';

function App() {
  return (
    <div
      className='App'
      style={{
        background: 'url(./image/background.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <header className='app-header text-white text-center py-5'>
        <p className='mb-0 fs-4'>TRY GLASSES APP ONLINE</p>
      </header>
      <TryGlassesApp />
    </div>
  );
}

export default App;
