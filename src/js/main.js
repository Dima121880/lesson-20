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
const startIntervalBtn = document.querySelector("#start-interval");
const stopIntervalBtn = document.querySelector("#stop-interval");
const startTimeoutBtn = document.querySelector("#start-timeout");
const stopTimeoutBtn = document.querySelector("#stop-timeout");

const slide = document.querySelectorAll(".slide");
const prevSlideBtn = document.querySelector("#prev");
const nextSlideBtn = document.querySelector("#next");
const syncJsFns = () => {
  const logInfo = () => {
    console.log("logInfo");
  };

  function logInfoFn() {
    console.log("logInfoFn");
  }

  const syncFn = () => {
    console.log("function start");
    for (let i = 0; i < 1000; i++) {
      console.log(i);
    }
    console.log("function end");
  };

  const asyncFn = () => {
    console.log("async function start");

    setTimeout(() => {
      console.log("setTimeout");

      // modal.classList.remove("active");
    }, 2000);

    console.log("async function after setTimeout");
  };

  // syncFn();
  // asyncFn();

  // setInterval(logInfo, 2000)
  let intervalId = null,
    timeoutId = null;

  startIntervalBtn.addEventListener("click", () => {
    intervalId = setInterval(logInfo, 2000);
  });

  stopIntervalBtn.addEventListener("click", () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }

    console.log("clear interval");
  });

  startTimeoutBtn.addEventListener("click", () => {
    timeoutId = setTimeout(logInfo, 5000);
    console.log("timeoutId", timeoutId);
  });

  stopTimeoutBtn.addEventListener("click", () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    console.log("clear timeout");
  });
};

const slideFn = () => {
  let currentSlide = 1;
  // slides[currentSlide].classList.add("active");

  const showSlides = () => {
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  };

  const goToPrevSlide = () => {
    if (currentSlide === 0) {
      // prevSlideBtn.style.pointerEvents = "none";
      // prevSlideBtn.disabled = true;
      currentSlide = slides.length - 1;
    } else {
      // prevSlideBtn.style.pointerEvents = "initial";
      // prevSlideBtn.disabled = false;
      currentSlide--;
    }

    // console.log(currentSlide);
    showSlides();
  };

  const goToNextSlide = () => {
    if (currentSlide === slides.length - 1) {
      // nextSlideBtn.style.pointerEvents = "none";
      // nextSlideBtn.disabled = true;
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    // console.log(currentSlide);
    showSlides();
  };

  // prevSlideBtn.addEventListener("click", goToPrevSlide);
  nextSlideBtn.addEventListener("click", goToNextSlide);

  showSlides();
};
