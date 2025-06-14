window.onload = () => {
  document.body.classList.remove("container");

  const wrapper = document.querySelector(".wrapper");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const flowers = document.querySelector(".flowers");

  // Ensure flowers are hidden initially (just in case)
  flowers.classList.remove("show");

  openBtn.addEventListener("click", () => {
    wrapper.classList.add("open");
    flowers.classList.add("show");
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
  });

  closeBtn.addEventListener("click", () => {
    wrapper.classList.remove("open");
    flowers.classList.remove("show");
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
  });
};
