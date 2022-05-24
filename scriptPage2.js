let audios2 = [
    {caminho:'audios/Averanje.mp3', legenda:'Avaranje'},
    {caminho:'audios/Monteiro.mp3', legenda:'Gabriel Monteiro'},
    {caminho:'audios/Party.mp3', legenda:'Modo Party'},
    {caminho:'audios/Putin.mp3', legenda:'Putin'},
    {caminho:'audios/pneu_queimado.mp3', legenda:'Pneu Queimado'},
    //{caminho:'audios/', legenda:''},
]

let legendas2 = document.querySelectorAll('.randola')
let botoes = document.querySelectorAll('.botao')
let audioTAG = document.querySelector('audio')

for(let i=0; i < 5; i++){
    legendas2[i].textContent = audios2[i].legenda
    botoes[i].setAttribute('idBTN', i)
}

botoes.forEach(botao =>{
    botao.addEventListener('click', () =>{
        let som2 = audios2[botao.getAttribute('idBTN')]
        audioTAG.setAttribute('src', som2.caminho)

        audioTAG.addEventListener('loadeddata', () =>{
            audioTAG.play()
        })
    })
})