export const options = {
  fullScreen: {
    enable: true,
    // zIndex: 0,
  },
  particles: {
    number: {
      value: 10,
      density: {
        enable: false,
        value_area: 800,
      },
    },
    color: {
      value: '#858585',
    },
    shape: {
      type: 'star',
      options: {
        sides: 5,
      },
    },
    opacity: {
      value: 0.8,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: false,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    rotate: {
      value: 0,
      random: true,
      direction: 'clockwise',
      animation: {
        enable: true,
        speed: 5,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 600,
      color: '#858585',
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: ['grab'],
      },
      onclick: {
        enable: false,
        mode: 'bubble',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
};
