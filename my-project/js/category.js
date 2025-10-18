const tabs = document.querySelectorAll(".category-tab");
const tabsContainer = document.querySelector(".category-tabs");

function moveBlueBar(activeTab) {
  const left = activeTab.offsetLeft;
  const width = activeTab.offsetWidth;
  tabsContainer.style.setProperty("--bar-left", `${left}px`);
  tabsContainer.style.setProperty("--bar-width", `${width}px`);
}

// Po kliknutí na tag
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    moveBlueBar(tab);
  });
});

// Inicializace při načtení stránky
const active = document.querySelector(".category-tab.active");
if (active) moveBlueBar(active);
