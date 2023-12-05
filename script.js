function foge(){
    let botaoNao = document.getElementById("nao");
    
    let larguraJanela = 400;
    let alturaJanela = 850;

    let maxX = larguraJanela - botaoNao.offsetWidth;
    let maxY = alturaJanela - botaoNao.offsetHeight;

    let aleatorioX = Math.floor(Math.random()* (maxX - 200));
    let aleatorioY = Math.floor(Math.random()* (maxY- 100));

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";

    //console.log(aleatorioX)
    //console.log(aleatorioY)
}

