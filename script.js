gsap.from(".left-hero-top h1", {
  duration: 1,
  autoAlpha: 0,
  y: -100,
  scale: 0.5,
  ease: "linear",
});

gsap.from(".left-img h5", {
  duration: 1,
  autoAlpha: 0,
  y: 100,
  scale: 0.5,
  scrollTrigger: {
    trigger: ".left-img h5",
  },
});

gsap.from(".right-img h5", {
  duration: 1,
  autoAlpha: 0,
  y: 100,
  scale: 0.5,
  scrollTrigger: {
    trigger: ".right-img h5",
  },
});

gsap.from(".right-hero-bottom h1", {
  duration: 1,
  autoAlpha: 0,
  y: 100,
  scale: 0.5,
  scrollTrigger: {
    trigger: ".right-hero-bottom h1",
  },
});
