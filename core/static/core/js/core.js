const countriesReachedNum = document.querySelector(".countries-reached-num");
const forestsRestoredNum = document.querySelector(".forests-restored-num");
const projectsCompletedNum = document.querySelector(".projects-completed-num");

const animateCount = function (el, target, speed = 50) {
  let current = 0;

  const interval = setInterval(() => {
    current++;
    el.textContent = current.toLocaleString();

    if (current >= target) {
      clearInterval(interval);
    }
  }, speed);
};

animateCount(countriesReachedNum, 78);
animateCount(forestsRestoredNum, 90);
animateCount(projectsCompletedNum, 60);

export default animateCount;
