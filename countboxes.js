function animateCountdown(elementId, endNumber) {
    const element = document.getElementById(elementId);
    let startNumber = 0;
    const duration = 1; // Duration of the animation in milliseconds
    const stepTime = Math.abs(Math.floor(duration / endNumber));
    
    function update() {
      if (startNumber < endNumber) {
        startNumber++;
        element.textContent = startNumber;
        setTimeout(update, stepTime);
      }
    }
    
    update();
  }

  // Start countdown animations
  animateCountdown('countdown1',22485);
  animateCountdown('countdown2', 23678);
  animateCountdown('countdown3', 23768);
  animateCountdown('countdown4', 21220);