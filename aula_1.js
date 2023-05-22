$(document).ready(function() {/*{
    console.log(document.querySelector('header button'));  
    console.log($('#botao-cancelar'));

    document.querySelector('header button').addEventListener('click', function(){
    })*/
        
    $('header button').click(function() {
        $('form').slideDown();
        
        //alert("Expandir Foemulário") 
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const endercoDeImagem = $('enderecoImagem').val();
        const novoItem = $('<li></li>');
        $(`img src"${endercoDeImagem}"/>`).appendTO(novoItem);
        <img src="./images/foto1.jpg" alt="pintura de um gato"/>
        $(`
        <div class="overlay">
            <a href="./images/foto1.jpg" title="ver imagem em tamanho real" target="_blank">
                Ver Imagem em Tamanho Real
            </a>
        </div>
        `)
    })



})