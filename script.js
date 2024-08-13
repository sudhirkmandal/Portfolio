function loaderAnimation() {
  var tl = gsap.timeline();
 
  tl.from("#nav img, #nav a", {
    y: -70,
    opacity: 0,
    stagger: {
      amount: 0.2,
      delay: 0.3,
    },
  });
  tl.from("#page1 img,#page1 h5", {
    scale: 0,
  });
  tl.from("#one", {
    x: -300,
    opacity: 0,
  });
  tl.from("#two", {
    x: 300,
    opacity: 0,
  });
  tl.from("#page1 p", {
    opacity: 0,
    stagger: 0.2,
  });
}

loaderAnimation();

function page2Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "top 40%",
      end: "top 0",
      scrub: 2,
    },
  });

  tl.to("#main", {
    backgroundColor: "#3F2CAA",
  });

  tl.from("#page2-left h1, #page2-left h5", {
    opacity: 0,
    stagger: 0.2,
  });

  tl.from(
    "#page2-left .elem p",
    {
      y: 100,
      stagger: 0.2,
      duration: 1,
    },
    "a"
  );

  tl.from(
    "#page2-right img",
    {
      scale: 0,
      duration: 1,
    },
    "a"
  );
}
page2Animation();

function page3Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      start: "top 40%",
      end: "top 0",
    },
  });

  tl.from("#page3 h1", {
    y: 100,
    opacity: 0,
  });
  tl.from("#page3-box", {
    scale: 0,
    duration: 1,
  });
}
page3Animation();

function page4Animation() {
  gsap.from("#inner-image1", {
    scale: 0,
    opacity: 0,
    scrollTrigger: {
      trigger: ".inner-image",
      scroller: "body",
      start: "top 100%",
      end: "top 0",
      scrub: true,
    },
  });

  gsap.from("#inner-image2", {
    scale: 0,
    opacity: 0,

    scrollTrigger: {
      trigger: "#inner1",
      scroller: "body",
      start: "top 100%",
      end: "top 0",
      scrub: true,
    },
  });

  gsap.from("#inner-image3", {
    scale: 0,
    opacity: 0,

    scrollTrigger: {
      trigger: "#inner2",
      scroller: "body",
      start: "top 100%",
      end: "top 0",
      scrub: true,
    },
  });

  gsap.from("#inner-image4", {
    scale: 0,
    opacity: 0,

    scrollTrigger: {
      trigger: "#inner3",
      scroller: "body",
      start: "top 100%",
      end: "top 0",
      scrub: true,
    },
  });

  gsap.from("#inner-image5", {
    scale: 0,
    opacity: 0,

    scrollTrigger: {
      trigger: "#inner4",
      scroller: "body",
      start: "top 100%",
      end: "top 0",
      scrub: true,
    },
  });
}

page4Animation();

Shery.mouseFollower();

Shery.makeMagnet("#nav img, #nav a, #page5 h1, #page1 h5, #page2 img, .image", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
