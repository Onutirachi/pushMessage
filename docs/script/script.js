function loadCodes() {
    const codeBoxes = document.querySelectorAll(".code-box");

    codeBoxes.forEach((codeBox) => {
        const file = codeBox.getAttribute("file");
        const language = codeBox.getAttribute("language");

        fetch(file)
            .then((res) => res.text())
            .then((code) => {
                const highlightedCode = hljs.highlight(code, { language: language }).value;
                codeBox.innerHTML = `<pre><code>${highlightedCode}</code></pre>`;
            })
            .catch((e) => console.error(e));
    });
}

function loadParameter() {
    const paramtersContainer = document.querySelectorAll(".parameters-container");
    paramtersContainer.forEach((container) => {
        const file = container.getAttribute("file");
        fetch(file)
            .then((res) => res.text())
            .then((file) => {
                const fileText = JSON.parse(file);

                Object.keys(fileText).forEach((key) => {
                    const parametes = document.createElement("div");
                    parametes.classList.add("parameters");
                    parametes.innerHTML += `
                        <h3>${key}</h3>
                    `;
                    Object.keys(fileText[key]).forEach((subKey) => {
                        parametes.innerHTML += `
                            <h4>${subKey}</h4>
                            <p>${fileText[key][subKey]}</p>
                        `;
                    });
                    container.appendChild(parametes);
                });
            });
    });
}

loadCodes();
loadParameter();

message.push("Click on logo to open menu", { title: "Menu", icon: "info", closeMode: "button" });
