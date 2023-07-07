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

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endercoDeImagem = $('#endereco-Imagem-Nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${endercoDeImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay">
                <a href="${endercoDeImagem}" target="_blank" title="ver imagem em tamanho real">
                    Ver Imagem em Tamanho Real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(5000);
        $('#endereco-Imagem-Nova').val('');
    })
})