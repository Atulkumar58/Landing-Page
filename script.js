function zoomHelmet() {
      const helmet = document.getElementById('helmet');
      helmet.classList.add('zoom-in');
      setTimeout(() => {
        helmet.classList.remove('zoom-in');
      }, 1000); // Duration of the zoom animation
    }