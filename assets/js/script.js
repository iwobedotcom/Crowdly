// Variables Declarations:
const menuItems = document.querySelectorAll(".menu-item");
const messageNotifications = document.querySelector("#message-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#search-messages");
const search = document.querySelector("#search");
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".theme");
const fontSizes = document.querySelectorAll(".choose-size span");
const root = document.querySelector(":root");
const colorScheme = document.querySelectorAll(".choose-color-scheme span");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

// Notification
function changeActiveItem() {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
}

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");

    if (item.id !== "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// Messages
function searchMessage() {
  const val = messageSearch.value.toLowerCase();
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) !== -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
}

messageSearch.addEventListener("keyup", searchMessage);

messageNotifications.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messageNotifications.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

function openThemeModal() {
  themeModal.style.display = "grid";
}

function closeThemeModal(e) {
  if (e.target.classList.contains("theme")) {
    themeModal.style.display = "none";
  }
}

themeModal.addEventListener("click", closeThemeModal);
theme.addEventListener("click", openThemeModal);

// Font Sizing
function removeSizeSelector() {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
}

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");

    switch (true) {
      case size.classList.contains("font-size-1"):
        fontSize = "10px";
        root.style.setProperty("--sticky-top-left", "5.4rem");
        root.style.setProperty("--sticky-top-right", "5.4rem");
        break;
      case size.classList.contains("font-size-2"):
        fontSize = "13px";
        root.style.setProperty("--sticky-top-left", "5.4rem");
        root.style.setProperty("--sticky-top-right", "-7rem");
        break;
      case size.classList.contains("font-size-3"):
        fontSize = "16px";
        root.style.setProperty("--sticky-top-left", "-2rem");
        root.style.setProperty("--sticky-top-right", "-17rem");
        break;
      case size.classList.contains("font-size-4"):
        fontSize = "19px";
        root.style.setProperty("--sticky-top-left", "-5rem");
        root.style.setProperty("--sticky-top-right", "-25rem");
        break;
      case size.classList.contains("font-size-5"):
        fontSize = "22px";
        root.style.setProperty("--sticky-top-left", "-12rem");
        root.style.setProperty("--sticky-top-right", "-35rem");
        break;

      default:
        break;
    }

    document.querySelector("html").style.fontSize = fontSize;
  });
});

// ColorScheme
function changeActiveClass() {
  colorScheme.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
}
colorScheme.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;
    changeActiveClass();
    switch (true) {
      case color.classList.contains("color-1"):
        primaryHue = 252;
        break;
      case color.classList.contains("color-2"):
        primaryHue = 52;
        break;
      case color.classList.contains("color-3"):
        primaryHue = 352;
        break;
      case color.classList.contains("color-4"):
        primaryHue = 152;
        break;
      case color.classList.contains("color-5"):
        primaryHue = 202;
        break;

      default:
        break;
    }

    color.classList.add("active");

    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

function changeBackground() {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
}

bg1.addEventListener("click", () => {
  bg1.classList.add("active");
  bg1.classList.remove("active");
  bg3.classList.remove("active");
  window.location.reload();
});

bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  bg2.classList.add("active");
  bg1.classList.remove("active");
  bg3.classList.remove("active");
  changeBackground();
});

bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  bg3.classList.add("active");
  bg1.classList.remove("active");
  bg2.classList.remove("active");
  changeBackground();
});
