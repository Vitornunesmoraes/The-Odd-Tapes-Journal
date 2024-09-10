function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Desculpe! Não achamos nenhum instrumento com essa busca!</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada elemento do array 'dados'
        for (let dado of dados) {
         titulo = dado.titulo.toLowerCase()
         descricao = dado.descricao.toLowerCase()
         tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {


            // Concatena HTML para criar um novo elemento de resultado
         resultados += `
          <div class="item-resultado">
           <h2>${dado.titulo}</h2>
           <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Mais informações</a>
         </div>
      `;
      
       }

       



     
      
     }


    if (!resultados) {
        resultados = "<p>Desculpe! Não achamos nenhum instrumento com essa busca!</p>"


    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }


