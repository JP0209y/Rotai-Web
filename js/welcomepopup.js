window.addEventListener("load", function () {
  setTimeout(() => {
    const e = document.getElementById("welcomeModal"),
      o = new bootstrap.Modal(e);
    (o.show(),
      setTimeout(() => {
        o.hide();
      }, 1e4));
  }, 2e3);
});
