var lineDrawing = anime({
  targets: '#lineDrawing #GLUG path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  delay: function(el, i) { return i * 250 },
  // direction: 'alternate',
  loop: 1
});