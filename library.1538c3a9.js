!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequiree4c3;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var d={id:e,exports:{}};return t[e]=d,o.call(d.exports,d,d.exports),d.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequiree4c3=o),o("bkLr0"),o("ihtdk"),o("hBZCD"),o("duIyV"),function(){var e={openModalBtn:document.querySelectorAll("[data-open-modal__window]"),closeModalBtn:document.querySelector("[data-close-modal__window]"),modal:document.querySelector("[data-modal__window]")},t=!1;function n(){e.modal.classList.toggle("is-open-modal"),document.body.classList.toggle("js-modal-is-hidden"),t?document.body.removeEventListener("keydown",o):document.body.addEventListener("keydown",o),t=!t}function o(e){"Escape"===e.code?n():none}e.openModalBtn.forEach((function(e){return e.addEventListener("click",n)})),e.closeModalBtn.addEventListener("click",n),e.modal.addEventListener("click",(function(e){if(e.target!=e.currentTarget)return;n()}))}();var d=o("ihtdk"),i=o("kZ2no"),r=o("duIyV");function a(e){d.refs.cardsContainer.innerHTML="";var t=(0,i.getFromStorage)(e);t&&t.length>0?((0,r.renderCollection)(t),d.refs.noFilmsMessage.classList.add("visually-hidden")):d.refs.noFilmsMessage.classList.remove("visually-hidden")}function s(e){e.setAttribute("disabled",""),e.classList.add("button-active")}function c(e){e.removeAttribute("disabled"),e.classList.remove("button-active")}d.refs.watchedButton.addEventListener("click",(function(){a("watch"),s(d.refs.watchedButton),c(d.refs.queueButton),d.refs.isWatchTabActive=!0})),d.refs.queueButton.addEventListener("click",(function(){a("queue"),c(d.refs.watchedButton),s(d.refs.queueButton),d.refs.isWatchTabActive=!1})),a("watch"),o("8M703"),o("bLsyj"),o("gethq"),o("6eObF")}();
//# sourceMappingURL=library.1538c3a9.js.map