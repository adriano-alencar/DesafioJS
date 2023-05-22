window.onload = function(){


    let listaProdutos /*1*/ = [
        {descricao:'Mamão Papaia', preco:2.20},
        {descricao:'Melancia', preco:3.20},
        {descricao:'Abacate', preco:4.20},
        {descricao:'Laranja', preco:1.80},
    ]
   
    const produtos /*3*/ = document.querySelector("#produtos");
    // const Total = document.querySelector("#mostraTotalCompra");




(()=>{
    for( let pro /*2*/ of listaProdutos/*1*/ ){
        const filhoLi = document.createElement('li');

        for(listaP in pro /*2*/){
            if(listaP =='preco'){
                produtos/*3*/.appendChild(filhoLi).setAttribute('date-preco', pro/*2*/[listaP])
                
            }else{produtos/*3*/.appendChild(filhoLi).textContent = `${pro/*2*/[listaP]}`

            }
            
        }

    }

} )()

const ulListaCompras = document.querySelectorAll("#produtos li");
const cestaCliente = document.querySelector('#cestaDoCliente');

    ulListaCompras.forEach(fruta => {
        fruta.addEventListener('click', () => {

             alert('Item clicado:', fruta.textContent);




            //-------------------------------------
                     
              

              
                var titulo = document.createElement('li');

                
                document.cestaCliente.appendChild('li').textContent = listaProdutos.value
            
                elemento_pai.appendChild('#cestaDoCliente');
                        
         //-----------------
         
   


    });
  });     
        
      
}







































