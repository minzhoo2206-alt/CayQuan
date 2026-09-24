let api = "http://localhost:3000/products";
fetch(api)
    .then(Response => Response.json())
    .then(function(data){

        let ul = document.querySelector("ul");
        data.forEach(product =>  {
            let li = document.createElement('li');
            li.textContent = product.name + "- $" + product.price;
            ul.appendChild(li);
            
        });
        return console.log(data);
       
        

    })
    .catch(error => console.error('Error:', error));
       
          


    
 