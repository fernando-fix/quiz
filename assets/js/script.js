let opcao = document.querySelectorAll(".option")

opcao.forEach(item=>{
    let dataItem = item.getAttribute('data-item')
    item.addEventListener('click',()=>{
        console.log(dataItem);
    });
})