const gallery = document.querySelector("[data-gallery]");
if (gallery) {
  const items = [...gallery.querySelectorAll(".gallery-item")];
  const filters = [...document.querySelectorAll("[data-gallery-filter]")];
  const count = document.querySelector("[data-gallery-count]");
  const dialog = document.querySelector("[data-lightbox]");
  const image = dialog?.querySelector("[data-lightbox-image]");
  const caption = dialog?.querySelector("[data-lightbox-caption]");
  const counter = dialog?.querySelector("[data-lightbox-counter]");
  const closeButton = dialog?.querySelector("[data-lightbox-close]");
  const previousButton = dialog?.querySelector("[data-lightbox-prev]");
  const nextButton = dialog?.querySelector("[data-lightbox-next]");
  let visibleItems = items;
  let currentIndex = 0;
  let lastTrigger = null;

  function updateCount() {
    if (count) count.textContent = `${visibleItems.length} photograph${visibleItems.length === 1 ? "" : "s"}`;
  }

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.galleryFilter;
      filters.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      items.forEach((item) => {
        item.hidden = category !== "all" && item.dataset.category !== category;
      });
      visibleItems = items.filter((item) => !item.hidden);
      updateCount();
    });
  });

  function showImage(index) {
    if (!visibleItems.length || !dialog || !image) return;
    currentIndex = (index + visibleItems.length) % visibleItems.length;
    const item = visibleItems[currentIndex];
    image.src = item.dataset.full;
    image.alt = item.querySelector("img")?.alt || "";
    if (caption) caption.textContent = item.dataset.caption || "";
    if (counter) counter.textContent = `${currentIndex + 1} / ${visibleItems.length}`;
  }

  function openLightbox(item) {
    if (!dialog) return;
    lastTrigger = item;
    currentIndex = visibleItems.indexOf(item);
    showImage(currentIndex);
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  items.forEach((item) => item.addEventListener("click", () => openLightbox(item)));
  previousButton?.addEventListener("click", () => showImage(currentIndex - 1));
  nextButton?.addEventListener("click", () => showImage(currentIndex + 1));
  closeButton?.addEventListener("click", () => dialog.close());
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog?.addEventListener("close", () => lastTrigger?.focus());
  dialog?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") showImage(currentIndex - 1);
    if (event.key === "ArrowRight") showImage(currentIndex + 1);
  });

  let touchStart = null;
  dialog?.addEventListener("touchstart", (event) => { touchStart = event.changedTouches[0].clientX; }, { passive: true });
  dialog?.addEventListener("touchend", (event) => {
    if (touchStart === null) return;
    const delta = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(delta) > 50) showImage(currentIndex + (delta < 0 ? 1 : -1));
    touchStart = null;
  }, { passive: true });

  updateCount();
}
