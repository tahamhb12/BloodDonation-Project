import { loadSlim } from "tsparticles-slim";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";

export function ParticleComponent() {
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles initialized:", engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles loaded:", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "white",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 0,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#880808",
          },

          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 5, max: 10 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}