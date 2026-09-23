let api ="http://localhost:3000/products";
fetch(api)
    .then(Response=>Response.json())
    .then(function(data){
        let container = document.querySelector('#productContainer');

        data.forEach(products => {
            let col = document.createElement('div');
            col.className = "col"

            let card = document.createElement('div');
            card.className = "card h-100 shadow-sm";

            let cardBody = document.createElement('div');
            cardBody.className = "card-body text-center";

            let h5 = document.createElement('h5');
            h5.className = "card-title text-break-anywhere"
            h5.textContent = products.name
            cardBody.appendChild(h5);

            let btn = document.createElement('a');
            btn.className = "btn btn-sm btn-info w-100 mt-2";
            btn.href = "#";
            btn.textContent = "Xem chi tiet";
            cardBody.appendChild(btn);
            
            card.appendChild(cardBody);
            col.appendChild(card);
            container.appendChild(col);
        });
        return console.log(data);
    })
    .catch(error => console.error('Error;', error));