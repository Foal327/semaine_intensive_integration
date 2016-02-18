var raisons1_3Reveal = {
  delay    : 200,
  distance : '90px',
  easing   : 'ease-in-out',
  origin   : "left",
  scale    : 1.1
};
var raisons2_4Reveal = {
  delay    : 200,
  distance : '90px',
  easing   : 'ease-in-out',
  origin   : "right",
  scale    : 1.1
};
var raisons5Reveal = {
  delay    : 200,
  distance : '90px',
  easing   : 'ease-in-out',
  origin   : "bottom",
  scale    : 1.1
};


window.sr = ScrollReveal({reset : true});
sr.reveal( '.raisons1, .raisons3', raisons1_3Reveal);
sr.reveal( '.raisons2, .raisons4', raisons2_4Reveal);
sr.reveal( '.raisons5', raisons5Reveal);


