function generateRubricForm (data) {
    if (!data) {
        let data = {
            criteria: [{
                bandLabels: ["1 - 2", "3 - 4", "5 - 6", "7 - 8"],
                label: "criterion a",
                objectives: 4,
                bands: 4
            },{
                bandLabels: ["1 - 2", "3 - 4", "5 - 6", "7 - 8"],
                label: "criterion b",
                objectives: 4,
                bands: 4
            },{
                bandLabels: ["1 - 2", "3 - 4", "5 - 6", "7 - 8"],
                label: "criterion c",
                objectives: 4,
                bands: 4
            },{
                bandLabels: ["1 - 2", "3 - 4", "5 - 6", "7 - 8"],
                label: "criterion d",
                objectives: 4,
                bands: 4
            }]
        };
    }

    data.criteria.forEach((criterion, i) => {
        const criterionWrapper = document.createElement("div");
        criterionWrapper.classList.add("criterion-wrapper");

        const criterionLabelLabel = document.createElement("label");
        criterionLabelLabel.for = `criterion-${i}-label`;
        criterionLabelLabel.innerText = "criterion label";
        
        const criterionLabelTextarea = document.createElement("textarea");
    });
    
}