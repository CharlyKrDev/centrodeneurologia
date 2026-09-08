(() => {
  "use strict";

  const sendEvent = (eventName, params = {}) => {
    if (typeof window.gtag !== "function") return;

    window.gtag("event", eventName, {
      ...params,
      page_location: window.location.href,
      page_title: document.title,
    });
  };

  const getLinkLabel = (link) =>
    link.getAttribute("aria-label") ||
    link.textContent.trim().replace(/\s+/g, " ") ||
    link.href;

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href") || "";
    const label = getLinkLabel(link);

    if (href.includes("wa.me/")) {
      sendEvent("click_whatsapp", {
        link_text: label,
        link_url: link.href,
      });
      return;
    }

    if (href.startsWith("tel:")) {
      sendEvent("click_phone", {
        link_text: label,
        link_url: href,
      });
      return;
    }

    if (href.includes("instagram.com/")) {
      sendEvent("click_instagram", {
        link_text: label,
        link_url: link.href,
      });
      return;
    }

    if (href === "#ubicacion") {
      sendEvent("click_location", {
        link_text: label,
      });
    }
  });

  const studyEvents = new Map([
    ["Electroencefalograma (EEG)", "open_study_eeg"],
    ["Electromiografía (EMG)", "open_study_emg"],
    ["Potenciales Evocados", "open_study_potenciales"],
    ["Mapeo Cerebral", "open_study_mapeo"],
    ["Videonistagmografía", "open_study_vng"],
    ["Videoelectroencefalograma (Video-EEG)", "open_study_video_eeg"],
  ]);

  document
    .querySelectorAll("#neurofisiologia details")
    .forEach((detailsElement) => {
      detailsElement.addEventListener("toggle", () => {
        if (!detailsElement.open) return;

        const title = detailsElement
          .querySelector("h3")
          ?.textContent.trim()
          .replace(/\s+/g, " ");

        if (!title) return;

        const eventName = studyEvents.get(title);

        if (eventName) {
          sendEvent(eventName, {
            study_name: title,
          });
        }
      });
    });
})();