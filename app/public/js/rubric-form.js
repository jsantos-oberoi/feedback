const criteriaTabs = document.querySelectorAll("#criteria-tab-list > li");
criteriaTabs.forEach((tab, index) => {
    tab.onclick = () => {
        criteriaTabs.forEach((tab, i) => {
            if (i == index) {
                tab.classList.add("active");
            }
            else {
                tab.classList.remove("active");
            }
        });

        const criteriaWrappers = document.querySelectorAll(".criterion-wrapper");
        criteriaWrappers.forEach((wrapper, i) => {
            if (i == index) {
                wrapper.classList.remove("disabled");
            }
            else {
                wrapper.classList.add("disabled");
            }
        });
    }
});