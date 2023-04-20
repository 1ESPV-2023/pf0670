
let tmp = "";

function mudaCor() {
    
    let r = 0;
    let g = 0;
    let b = 0;

    //Math
    r = Math.ceil(Math.random() * 255);
    g = Math.ceil(Math.random() * 255);
    b = Math.ceil(Math.random() * 255);

    const elementos = [...document.getElementsByClassName("cabecalho")];
    
    elementos.forEach((el)=>{
        el.style.backgroundColor = `rgb(${r},${g},${b})`;
    })

    tmp = setTimeout(mudaCor, 5000);
}
    
mudaCor()