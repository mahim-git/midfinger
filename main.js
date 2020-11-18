function createIcon(){
    const icon = document.createElement(`div`)
    icon.classList.add('mid');
    icon.innerHTML = "&#x1f595;"
    icon.style.left = Math.random() * 100 + "vw";
    setTimeout(() => {
        icon.remove();
    }, 5000);


    document.body.appendChild(icon);
    
};
setInterval(() => {
        createIcon();
    }, 200);

    