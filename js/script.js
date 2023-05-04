
// let tmp = "";

// // function mudaCor() {
    
// //     let r = 0;
// //     let g = 0;
// //     let b = 0;

// //     //Math
// //     r = Math.ceil(Math.random() * 255);
// //     g = Math.ceil(Math.random() * 255);
// //     b = Math.ceil(Math.random() * 255);

// //     const elementos = [...document.getElementsByClassName("cabecalho")];
    
// //     elementos.forEach((el)=>{
// //         el.style.backgroundColor = `rgb(${r},${g},${b})`;
// //     })

// //     tmp = setTimeout(mudaCor, 5000);
// // }

// mudaBanner1()

// function mudaBanner1() {
    
//     let banner1 = "./img/banner-1440x300-1.jpg";
//     const elImg = document.querySelector(".cabecalho > img");
//     elImg.src = banner1;
//     setTimeout(mudaBanner2, 2000);
// }

// function mudaBanner2() {
    
//     let banner2 = "./img/banner-1440x300-2.jpg";
    
//     const elImg = document.querySelector(".cabecalho > img");
//     elImg.src = banner2;
    
//     setTimeout(mudaBanner3, 2000);
// }

// function mudaBanner3() {
    
//     let banner3 = "./img/banner-1440x300-3.jpg"

//     const elImg = document.querySelector(".cabecalho > img");
//     elImg.src = banner3;
//     setTimeout(mudaBanner1, 2000);
// }

function mudaBanner1() {
    
    let nr1 = Math.ceil(Math.random()*3);
    let nr2 = Math.ceil(Math.random()*3);

    let caminhoImg1 = `./img/banner-lateral-${nr1}.png`;
    let caminhoImg2 = `./img/banner-lateral-${nr2}.png`;

    //Recuperar a imagem do banner1
    const b1 = document.querySelector(".banner-1 img");
    const b2 = document.querySelector(".banner-2 img");
    b1.src = caminhoImg1;
    b2.src = caminhoImg2;
    setTimeout(mudaBanner1 , 1000);
}

mudaBanner1();


const botoes = document.querySelectorAll("button");

botoes[0].addEventListener("click", ()=>{
    const imgLampada = document.querySelector(".conteudo img");

    if(this.textContent == "LIGAR"){
        imgLampada.src = "./img/pic_bulbon.gif";
        this.textContent = "DESLIGAR";
    }else{
        imgLampada.src = "./img/pic_bulboff.gif";
        this.textContent = "LIGAR";
    }

});

// botoes.forEach((botao)=>{
//     const imgLampada = document.querySelector(".conteudo img");
//     if(botao.textContent == "LIGAR"){
        
//         botao.addEventListener("click", ()=>{
//             imgLampada.src = "./img/pic_bulbon.gif";
//             botao.textContent = "DESLIGAR";
//         });

//     }else if(botao.textContent == "DESLIGAR"){
        
//         botao.addEventListener("click", ()=>{
//             imgLampada.src = "./img/pic_bulboff.gif";
//             botao.textContent = "LIGAR";
//         });
//     }
// });



// function acender() {
    
//     const btn = document.querySelector(".botao");

//     if(btn.textContent == "LIGAR"){
//         imgLampada.src = "./img/pic_bulbon.gif";
//         btn.textContent = "DESLIGAR";
//     }else{
//         imgLampada.src = "./img/pic_bulboff.gif";
//         btn.textContent = "LIGAR";
//     }
// }
