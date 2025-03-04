function showProduct(id) {
    var products = document.querySelectorAll('.product-detail');
    products.forEach(product => product.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}