/* Runs on every page load, including instant navigation */
document$.subscribe(function () {
  initFilters();
  initCards();
});

function initFilters() {
  document.querySelectorAll(".mui-filters").forEach(function (bar) {
    var grid = document.querySelector(bar.dataset.target || ".mui-grid");
    if (!grid) return;
    var chips = bar.querySelectorAll("[data-filter]");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) {
          c.classList.remove("is-active");
          c.setAttribute("aria-pressed", "false");
        });
        chip.classList.add("is-active");
        chip.setAttribute("aria-pressed", "true");
        var want = chip.dataset.filter;
        grid.querySelectorAll(".mui-card").forEach(function (card) {
          var show = want === "all" || card.dataset.category === want;
          card.classList.toggle("is-hidden", !show);
        });
      });
    });
  });
}

function getDialog() {
  var dlg = document.querySelector("dialog.mui-dialog");
  if (dlg) return dlg;
  dlg = document.createElement("dialog");
  dlg.className = "mui-dialog";
  dlg.innerHTML =
    '<button class="mui-dialog-close" aria-label="Close">&#10005;</button>' +
    '<div class="mui-dialog-content md-typeset"></div>';
  document.body.appendChild(dlg);
  dlg.querySelector(".mui-dialog-close")
     .addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (e) {
    if (e.target === dlg) dlg.close();   // backdrop click
  });
  return dlg;
}

function initCards() {
  document.querySelectorAll(".mui-card").forEach(function (card) {
    var detail = card.querySelector(".mui-card-detail");
    if (!detail) return;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    function open() {
      var dlg = getDialog();
      dlg.querySelector(".mui-dialog-content").innerHTML = detail.innerHTML;
      dlg.showModal();
    }
    card.addEventListener("click", function (e) {
      if (e.target.closest("a")) return;  // let real links through
      open();
    });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
    });
  });
}
