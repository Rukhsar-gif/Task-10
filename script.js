"use strict";

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {

    const question =
        item.querySelector(".faq-question");

    question.addEventListener("click", function () {

        const isActive =
            item.classList.contains("active");

        item.classList.toggle("active");

        question.setAttribute(
            "aria-expanded",
            String(!isActive)
        );

    });

});