let api ="http://localhost:3000/products";
fetch(api)
    .then(Response=>Response.json())
    .then(function(data){
        let container = document.querySelector('#productContainer');

        data.forEach(products => {
            let card = document.createElement('div');
            card.className = "card m-2";
            card.style.with = "18rem";

            let cardBody = document.createElement('div');
            cardBody.className = "card-body";

            let h5 = document.createElement('h5');
            h5.className = "card-title"
            h5.textContent = products.name
            cardBody.appendChild(h5);

            let btn = document.createElement('a');
            btn.className = "btn btn-primary";
            btn.href = "#";
            btn.textContent = "Xem chi tiet";
            cardBody.appendChild(btn);
            
            card.appendChild(cardBody);
            container.appendChild(card);
        });
        return console.log(data);
    })
    .catch(error => console.error('Error;', error));