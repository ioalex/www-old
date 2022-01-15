/* eslint-disable no-console, no-alert */

import Clipboard from "clipboard";

const useObject = (a) => new Clipboard(a);

// Clipboard event handler
document.addEventListener("DOMContentLoaded", () => {
  try {
    useObject(".copy-clipboard-button");
  } catch (e) {
    alert("Clipboard event listener unavaiable, please manually copy!");
    console.log(e);
  }
});
