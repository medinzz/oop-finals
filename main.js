
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

// button to scroll top
document.querySelector("#scrollToTop").addEventListener("click", function () {
  window.scrollTo(0, 0);
});
window.addEventListener("scroll", function() {
  let btn = document.getElementById('scrollToTop');
  if ( window.pageYOffset > 100 ) {
    btn.classList.remove("d-none");
  } else {
    
    btn.classList.add("d-none");
  }
});


// load external HTMLs
$(document).ready( function() {
  $("#oop").load("components/oop.html");
  $("#gallery").load("components/gallery.html");
  $("#team").load("components/team.html");
  $("#oop-requirement-models").load("components/oop-requirement-models.html");
});
