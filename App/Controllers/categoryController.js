let api = 'http://localhost:3000/categories';

// Lấy thẻ chứa ngoài giao diện
const categoryListEl = document.getElementById('category-list');

if (categoryListEl) {
    fetch(api)
        .then(response => response.json())
        .then(function(data) {
            categoryListEl.innerHTML = ''; // Xóa nội dung cũ nếu có

            data.forEach(category => {
                const categoryItem = document.createElement('div');
                // categoryItem.classList.add('category-item');
                
                categoryItem.innerHTML = `
                    <h3>${category.name}</h3>
                `;

                categoryListEl.appendChild(categoryItem);
            });
            
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
}

 

  


// // Chạy hàm khi trang web đã tải xong
// document.addEventListener('DOMContentLoaded', loadCategories);