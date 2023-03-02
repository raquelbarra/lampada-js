// Desenvolvido por Raquel Barra - 01/03/2023 - projeto de estudo

let corLampada = document.querySelector('#cor-lampada');
let lampada = document.querySelector('#lampada');
let interruptor = document.querySelector('#interruptor');
let selecaoLampadaAmarela = document.querySelector('.opcao-amarela');
let selecaolampadaVerde = document.querySelector('.opcao-verde');
let selecaolampadaLaranja = document.querySelector('.opcao-laranja');
let selecaolampadaAzul = document.querySelector('.opcao-azul');

// Botão de ligar/ desligar lâmpada

click(interruptor, ()=>{
    verificaEstadoLampada = interruptor.classList.contains("fa-toggle-off");
    if(verificaEstadoLampada){
        atualizarEstadoLampada('acender');
    } else {
        atualizarEstadoLampada('apagar');
    }
})

// Configuração seleção de cor da lâmpada

click(selecaoLampadaAmarela, ()=>{
    atualizarCorSelecionada('amarelo');
    atualizaCorDaLampada('amarelo');
})

click(selecaolampadaVerde, ()=>{
    atualizarCorSelecionada('verde');
    atualizaCorDaLampada('verde');
})

click(selecaolampadaLaranja, ()=>{
    atualizarCorSelecionada('laranja');
    atualizaCorDaLampada('laranja');
})

click(selecaolampadaAzul, ()=>{
    atualizarCorSelecionada('azul');
    atualizaCorDaLampada('azul');
})

// Processamento de informações

function atualizarEstadoLampada(acao){
    if(acao == 'acender'){
        interruptor.classList.remove('fa-toggle-off');
        interruptor.classList.add('fa-toggle-on');
        lampada.classList.remove('far');
        lampada.classList.add('fas');
    } else if(acao == 'apagar') {
        interruptor.classList.remove('fa-toggle-on');
        interruptor.classList.add('fa-toggle-off');
        lampada.classList.remove('fas');
        lampada.classList.add('far');
    }
}

function atualizarCorSelecionada(cor){
    if(cor == 'amarelo'){
        let verificaSeEstaSelecionado = selecaoLampadaAmarela.classList.contains("selecionado");
        if(!verificaSeEstaSelecionado) selecaoLampadaAmarela.classList.add('selecionado');

        selecaolampadaVerde.classList.remove('selecionado');
        selecaolampadaLaranja.classList.remove('selecionado');
        selecaolampadaAzul.classList.remove('selecionado');
    }

    else if(cor == 'verde'){
        let verificaSeEstaSelecionado = selecaolampadaVerde.classList.contains("selecionado");
        if(!verificaSeEstaSelecionado) selecaolampadaVerde.classList.add('selecionado');

        selecaoLampadaAmarela.classList.remove('selecionado');
        selecaolampadaLaranja.classList.remove('selecionado');
        selecaolampadaAzul.classList.remove('selecionado');
    }
    
    else if(cor == 'laranja'){
        let verificaSeEstaSelecionado = selecaolampadaLaranja.classList.contains("selecionado");
        if(!verificaSeEstaSelecionado) selecaolampadaLaranja.classList.add('selecionado');

        selecaoLampadaAmarela.classList.remove('selecionado');
        selecaolampadaVerde.classList.remove('selecionado');
        selecaolampadaAzul.classList.remove('selecionado');
    }

    else if(cor == 'azul'){
        let verificaSeEstaSelecionado = selecaolampadaAzul.classList.contains("selecionado");
        if(!verificaSeEstaSelecionado) selecaolampadaAzul.classList.add('selecionado');

        selecaoLampadaAmarela.classList.remove('selecionado');
        selecaolampadaVerde.classList.remove('selecionado');
        selecaolampadaLaranja.classList.remove('selecionado');
    }
}

function atualizaCorDaLampada(cor){
    switch (cor) {

        case 'amarelo':
            corLampada.className = '';
            corLampada.classList.add('txt-amarelo');
            break;
        
        case 'verde':
            corLampada.className = '';
            corLampada.classList.add('txt-verde');
            break;

        case 'laranja':
            corLampada.className = '';
            corLampada.classList.add('txt-laranja');
            break;

        case 'azul':
            corLampada.className = '';
            corLampada.classList.add('txt-azul');
            break;

    }
}

// Função auxiliar

function click(ele, callback){
    ele.addEventListener('click', function (e) {
        e.preventDefault();
        callback();
    })
}