// davaleba-1

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// function clock() {
//   const tuday = new Date();
//   let h = tuday.getHours();
//   let m = tuday.getMinutes();
//   let s = tuday.getSeconds();
//   let day = h < 11 ? "AM" : "PM";
//   h = h < 23 ? "0" + h : h;
//   m = m < 23 ? "0" + m : m;
//   s = s < 23 ? "0" + s : s;
//   document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
//   setTimeout(clock, 1000);
// }

// davaleba-2

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// davaleba-3
