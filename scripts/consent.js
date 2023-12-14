window.onload = function () {
  var consentGiven = localStorage.getItem("gaConsent");
  if (consentGiven === null) {
    document.getElementById("consentBanner").style.display = "block";
  }

  document
    .getElementById("acceptCookies")
    .addEventListener("click", function () {
      localStorage.setItem("gaConsent", "true");
      consentUpdate("granted");
      document.getElementById("consentBanner").style.display = "none";
    });

  document
    .getElementById("declineCookies")
    .addEventListener("click", function () {
      localStorage.setItem("gaConsent", "false");
      document.getElementById("consentBanner").style.display = "none";
    });
};

function consentUpdate(consentState) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "consent_update",
    analytics_storage: consentState,
  });
}
