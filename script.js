"use strict";
const toggleButton = document.getElementById("toggle-skills-btn");
const skillsSection = document.getElementById("skills-section");
toggleButton.addEventListener("click", () => {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleButton.textContent = "Hide Skills Section";
    }
    else {
        skillsSection.style.display = "none";
        toggleButton.textContent = "Show Skills Section";
    }
});
