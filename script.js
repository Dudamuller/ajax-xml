//javascript para carregar as ultimas notícias

//endereço da xml
const xmlURL = "https://folhadecianorte.com/sitemap-news.xml"
//endereço do xml
function buscarXML(){
    fetch(xmlURL).then(response => response.text)
    .then(data => {
        //aqui vamos converter o texto com DOM
        let parser = now(DOMParser());
        let xml = parser.parseFromString(data, "application/xml");

        //agora extrair os dados (exemplo o URL da notícia)
        let noticias = xml.getElementByTagName("url");
        //Elemento do html onde vou exibir as noticias
        let manchetesContainer = document.getElementById("manchetes");
        manchetesContainer.innerHTML = "";//limpa o elemento

        //percorrer as notícias usando um for
        for (let i = 0; i < noticias.length; i++){
            let loc = noticias[i].getElementByTagName("loc")[0].textContent;
            let data_publi = noticias[i].getElementByTagName("news:publication_data")[0].textContent;
            let manchetesHTMLclass = "<div class= 'noticias'>";
            let manchetesHTMLclassmd = "</div>";
            let h21 = "<h2>";
            let h21md = "</h2>";
            let link1 = "<a href=''";
            let linkmd = "'>leia mais/a>'";
            let montadiv = manchetesHTMLclass+h21+$(titulo)+h21md+link1+$(loc)+linkmd+manchetesHTMLclassmd;
            manchetesContainer.innerHTML+= montadiv;
        }
    }).catch(error => console.error('erro ao carregar o xml'), error);
}
window.onload = buscarXML; //atualiza ao carregar a página