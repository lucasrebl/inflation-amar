document.addEventListener('DOMContentLoaded', (event) => {
    const menuButton = document.getElementsByClassName('mobile')[0];
    const burgerIcon = document.getElementsByClassName('burgermenu')[0].getElementsByTagName('img')[0];
    const headerContent = document.getElementsByClassName('headercontent')[0];
    const imgOpen = '/images/burgerbar.png';
    const imgClosed = '/images/x.png';

    menuButton.addEventListener('click', () => {
        if (burgerIcon.src.includes(imgClosed)) {
            console.log("image est ouverte ");
            burgerIcon.src = imgOpen;
            headerContent.classList.remove('show');
            headerContent.classList.add('hide');
            setTimeout(() => {
                headerContent.style.display = 'none'; // Cache l'élément après l'animation
            }, 500); // Durée de l'animation en millisecondes
        } else {
            console.log("image est fermée ");
            burgerIcon.src = imgClosed;
            headerContent.style.display = 'flex'; // Affiche l'élément pour que l'animation fonctionne
            headerContent.classList.remove('hide');
            headerContent.classList.add('show');
        }
    });
});
