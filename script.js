document.addEventListener("DOMContentLoaded", function () {
  const parent = document.getElementById("main");
  const article = parent.querySelector("[data-article]");
  // States
  const rateUs = parent.querySelector("[data-rateUs]");
  const thanks = parent.querySelector("[data-thanks]");

  // Scale
  const scale = parent.querySelectorAll("[data-scale]");
  const scaleSpan = parent.querySelectorAll("[data-span]");
  const scaleReport = parent.querySelector("[data-selecionReport]");

  // Submit
  const submit = parent.querySelector("[data-submit]");
  let issubmit = false;
  let scaleSpanClicked = false;

  //Disable the submit
  submit.disabled = true;

  const addEffect = function (e) {
    const target = e.target;
    const anchor = target.closest("a");
    target.classList.add("clicked");
    if (anchor) {
      anchor.style.color = "var(--crl-Primary-dark)";
    }
  };

  const removeEffect = function (currentSpan) {
    scaleSpan.forEach((span) => {
      if (span !== currentSpan) {
        span.classList.remove("clicked");
        const anchor = scale;
        anchor.forEach((a) => (a.style.color = "var(--crl-White)"));
      }
    });
  };

  const lastTarget = function (e) {
    const lastButtonText = e.target.textContent;
    scaleReport.textContent = lastButtonText;
  };

  const handleSwichPage = function () {
    if (issubmit) {
      article.classList.add("unset");
      rateUs.classList.add("hide");
      thanks.classList.remove("hide");

      // Remove after 5 seconds
      setTimeout(() => {
        article.classList.remove("unset");
        rateUs.classList.remove("hide");
        thanks.classList.add("hide");
      }, 5000);
    }
  };

  scaleSpan.forEach((span) => {
    span.addEventListener("click", function (e) {
      e.preventDefault();
      removeEffect(span);
      addEffect(e);
      lastTarget(e);

      //set the flag and enable the submit
      scaleSpanClicked = true;
      submit.disabled = false;
    });
  });

  submit.addEventListener("click", function (e) {
    e.preventDefault();
    if (scaleSpanClicked) {
      issubmit = true;
      handleSwichPage();
    }
  });
});
