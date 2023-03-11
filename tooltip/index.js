import "./styles.css";

export default class Tooltip {
    constructor(element) {
        this.element = element;
        this.message = element.getAttribute("data-message");
    }

    init = () => {
        const tooltip = document.createElement("div");
        tooltip.classList.add("tip");
        tooltip.textContent = this.message;
        this.element.appendChild(tooltip);

        this.element.addEventListener("mouseenter", () => {
            tooltip.classList.add("active");
        });

        this.element.addEventListener("mouseleave", () => {
            tooltip.classList.remove("active");
        });
    }
};