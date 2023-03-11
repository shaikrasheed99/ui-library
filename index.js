import Tooltip from "./tooltip";
import Dropdown from "./dropdowns";
import Tabs from "./tabs";
import Snackbar from "./snackbar";

const tooltipElement = document.querySelector(".tooltip");
const tooltip = new Tooltip(tooltipElement);
tooltip.init();

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
    const dropdownInstance = new Dropdown(dropdown);
    dropdownInstance.init();
});

const tabsElement = document.querySelector(".tabs");
const tabs = new Tabs(tabsElement);
tabs.init();

const snackbar = new Snackbar();
snackbar.init();
const snackbarButton = document.querySelector(".snackbar-button");
snackbarButton.addEventListener("click", () => {
    snackbar.show("you clicked me!!")
});