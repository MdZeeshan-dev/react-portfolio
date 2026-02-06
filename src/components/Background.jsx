import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Background() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,        // 👈 IMPORTANT
      }}
    >
      <Particles
        init={particlesInit}
        options={{
          fullScreen: false, // 👈 VERY IMPORTANT
          background: {
            color: "#0f172a",
          },
          particles: {
            number: {
              value: 80,
            },
            color: {
              value: "#38bdf8",
            },
            links: {
              enable: true,
              color: "#38bdf8",
              distance: 150,
            },
            move: {
              enable: true,
              speed: 1,
            },
            size: {
              value: 2,
            },
          },
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

export default Background;
