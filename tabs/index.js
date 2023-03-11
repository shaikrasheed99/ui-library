import "./styles.css";

export default class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll(".trigger");
    }

    init = () => {
        this.tabs.forEach((tab) => {
            tab.addEventListener("click", (event) => {
                this.toggleTab(event);
                this.toggleContent(event);
            });
        });
    };

    toggleTab = (event) => {
        this.tabs.forEach((tab) => {
            tab.classList.remove("active");
        });

        event.target.classList.add("active");
    };
    
    toggleContent = (event) => {
        const contents = this.container.querySelectorAll(".content");
        contents.forEach((content) => {
            content.classList.remove("active");
        });

        const contentId = event.target.getAttribute("data-target");
        const content = this.container.querySelector(contentId);
        content.classList.add("active");
    };
};