
let typed = new Typed('.typed-text', {
  strings: [
    "MARILAO, JUSTIN TROY R.",
    "FAJARDO, LOUISE KAYE A.",
    "MAHINAY, JOANNE KAYE F.",
    "HILARIO, ANDREW G.",
    "CORPUZ, BITHIAH PELAIAH T",
    "RIVERA, HANNAH JOY A.",
    "CORALES, MARK REINELL S.",
    "LUMABAN, LEMNUEL S.",
    "MEDINA, JOSHUA MERWIN V.",
    "LUMAQUE, JHERICOH JANQUILL N.",
    "CRUZ, ACE VON ALFRED L.",
    "AYAP, KATHLEEN SHAYNE"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  showCursor: false,
  loop: true
});


$(document).ready( function() {
  $("#oop").load("components/oop.html");
  $("#gallery").load("components/gallery.html");
  $("#team").load("components/team.html");
  $("#oop-requirement-models").load("components/oop-requirement-models.html");
});
