import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Wallet_Model from './Components/Wallet_Model/Wallet_Model';
import Particles from 'react-tsparticles';
import { useCallback } from 'react';
import { loadFull } from "tsparticles";
import { Toaster } from 'react-hot-toast';
import Stake_History from './Components/Stake_History/Stake_History';



function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  return (
    <>

      <div className="App z-0">
        <div className="overflow-hidden bg-gray-100 relative z-0 text-white-100 font-spartan">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: false,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "rgb(154, 74, 211)",
              distance: 120,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1200,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
       <Toaster />
          <Header />
          <Landing_Page />
          <Stake_History/>


        </div>

      </div>
    </>
  );
}

export default App;
