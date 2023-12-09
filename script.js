const inputProduto = document.querySelector(".produto");
const btn = document.querySelector(".btn");
const ul = document.querySelector("ul");


function adicionarItem(){

    let produto = inputProduto.value.trim();
    
    if (produto === "") {
        alert("digite um item");
     } 
     
     else{
         
    produto = produto.charAt(0).toUpperCase() + produto.slice(1).toLowerCase();
    let list = document.createElement("li");
    list.innerText = produto;
    list.style.paddingBottom = "5px";
    
   
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "5px";
    deleteButton.addEventListener("click", () => {
       ul.removeChild(list);
       atualizarItensLocalStorage();
    });

    list.appendChild(deleteButton);
    ul.appendChild(list);
    inputProduto.value = "";
    adicionarItemAoLocalStorage(produto);
}

};

inputProduto.focus();

function adicionarItemAoLocalStorage(item){
    let itemLista = JSON.parse(localStorage.getItem("itemLista") || "[]");
    itemLista.push(item);
    localStorage.setItem("itemLista", JSON.stringify(itemLista) );
}

function carregarItensLocalStorage(){

    const itemLista = JSON.parse(localStorage.getItem("itemLista") || "[]");
    itemLista.forEach((item) => {
       let list = document.createElement("li"); 
       list.innerText = item;
       list.style.paddingBottom = "5px";

       let deleteButton = document.createElement("button");
    deleteButton.textContent = "Apagar";
    deleteButton.style.marginLeft = "5px";
    deleteButton.addEventListener("click", () => {
      ul.removeChild(list);
      atualizarItensLocalStorage(); // Atualiza o armazenamento local após a exclusão
    });
    list.appendChild(deleteButton);
    ul.appendChild(list);
    });
}

carregarItensLocalStorage();


inputProduto.addEventListener("keydown", (event) => {
if(event.key === "Enter"){
    adicionarItem();
}
});

btn.addEventListener("click", adicionarItem);

function atualizarItensLocalStorage() {
    let itemLista = [];
    ul.querySelectorAll("li").forEach((item) => {
      itemLista.push(item.innerText);
    });

    localStorage.setItem("itemLista", JSON.stringify(itemLista));
  };


  