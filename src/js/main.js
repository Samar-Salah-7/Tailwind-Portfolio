const images = document.querySelectorAll(".img-carousel");
const indecators = document.querySelectorAll(".indecator");

let defaultIndex = 0;

images.forEach((img, i) => {
  if (!img.classList.contains("hidden")) {
    defaultIndex = i;
  }
});

images[defaultIndex].classList.remove("hidden");
indecators[defaultIndex].classList.remove("opacity-50");

indecators.forEach((ind) => {
  ind.addEventListener("click", () => {
    const index = ind.dataset.index;
    // console.log(index);

    images.forEach((img) => img.classList.add("hidden"));
    indecators.forEach((i) => i.classList.add("opacity-50"));
    images[index].classList.remove("hidden");
    indecators[index].classList.remove("opacity-50");
  });
});
