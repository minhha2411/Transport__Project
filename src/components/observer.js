


var observer = function(){
var inside = document.querySelectorAll(".inside");

observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation =
        "animate 800ms 0.5s cubic-bezier(1,0,0.5,1) forwards";
    } else {
      entry.target.style.animation = "none";
    }
  });
});

inside.forEach((anim) => {
  observer.observe(anim);
});

}
export default observer;


