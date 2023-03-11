import Tooltip from "./tooltip";
import Dropdown from "./dropdowns";

const tooltipElement = document.querySelector(".tooltip");
const tooltip = new Tooltip(tooltipElement);
tooltip.init();

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
    const dropdownInstance = new Dropdown(dropdown);
    dropdownInstance.init();
});