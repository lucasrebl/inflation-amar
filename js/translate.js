document.addEventListener("keydown", function (event) {
    // Vérifier si la touche enfoncée est la touche "Entrée"
    if (event.key === "Enter") {
        console.log("Touche Entrée enfoncée");

        // Récupérer l'élément iframe
        var iframeElement = document.querySelector('iframe.skiptranslate');

        // Vérifier si l'élément est actuellement visible ou non
        var currentDisplay = iframeElement.style.display;
        console.log("Display actuel :", currentDisplay);

        // Toggle les styles en fonction de l'état actuel de l'élément
        if (currentDisplay === "none") {
            console.log("L'élément est actuellement caché. Le rend visible.");

            // Si l'élément est actuellement caché, le rendre visible
            iframeElement.style.visibility = "visible";
            iframeElement.style.boxSizing = "content-box";
            iframeElement.style.width = "1322px";
            iframeElement.style.height = "274px";
            iframeElement.style.left = "0px";
            iframeElement.style.top = "62.2px";
            iframeElement.style.display = ""; // Retirer la propriété display

            console.log("Styles appliqués pour rendre l'élément visible.");
        } else {
            console.log("L'élément est actuellement visible. Le cache.");

            // Si l'élément est actuellement visible, le cacher
            iframeElement.style.visibility = "hidden";
            iframeElement.style.boxSizing = "";
            iframeElement.style.width = "";
            iframeElement.style.height = "";
            iframeElement.style.left = "";
            iframeElement.style.top = "";
            iframeElement.style.display = "none";

            console.log("Styles appliqués pour cacher l'élément.");
        }
    }
});