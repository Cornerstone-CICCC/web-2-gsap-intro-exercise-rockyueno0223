// PUT YOUR CODE HERE
const redWidth = document.querySelector('.red').offsetWidth;
const greenHeight = document.querySelector('.green').offsetHeight;
const blueWidth = document.querySelector('.blue').offsetWidth;
const yellowHeight = document.querySelector('.yellow').offsetHeight;

let timeline = gsap.timeline({repeat: -1})

timeline
  .from('.red', { x: -200, y: -200, duration: 0.5, delay: 0.5, })
  .from('.green', { x: 200, y: -200, duration: 0.5,  })
  .from('.blue', { x: 200, y: 200, duration: 0.5 })
  .from('.yellow', { x: -200, y: 200, duration: 0.5,  })
  .to('.red', { x: '100vw', left: -200, borderRadius: '50%', backgroundColor: 'green', duration: 0.5,  })
  .to('.green', { y: '100vh', top: -200, borderRadius: '50%', backgroundColor: 'blue', duration: 0.5,  }, '<')
  .to('.blue', {  x: '-100vw', right: -200, borderRadius: '50%', backgroundColor: 'yellow', duration: 0.5,  }, '<')
  .to('.yellow', { y: `-100vh`, bottom: -200, borderRadius: '50%', backgroundColor: 'red', duration: 0.5, }, '<')
  .to('.red', { left : 0, duration: 0.5})
  .to('.green', { x: 200, duration: 0.5, }, '<')
  .to('.blue', { left: 200, duration: 0.5, }, '<')
  .to('.yellow', { x: -200, duration: 0.5, }, '<')
