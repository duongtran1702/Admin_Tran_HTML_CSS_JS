class Item {
    constructor(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    pay() {
        return this.quantity * this.price;
    }
}
class CartProduct {
    constructor() {
        this.cart = [];
    }
    show() {
        this.totalPay();

        if (this.cart.length === 0) {
            document.getElementById('cart-empty').style.display = 'flex';
            document.getElementById('product-in-cart').style.display = 'none';
            return;
        }
        document.getElementById('cart-empty').style.display = 'none';
        document.getElementById('product-in-cart').style.display = 'flex';

        let cart = document.getElementById('product-in-cart');
        cart.innerHTML = '';
        this.cart.forEach((item, index) => {
            let productArea = document.createElement('div');
            productArea.className = 'product-area';

            let name = document.createElement('div');
            name.className = 'name';
            name.innerText = item.name;

            let price = document.createElement('div');
            price.className = 'price';
            price.innerText = `${item.price} x${item.quantity}`;

            productArea.appendChild(name);
            productArea.appendChild(price);

            let buttonArea = document.createElement('div');
            buttonArea.className = 'button-area';

            let btnDecrease = document.createElement('button');
            btnDecrease.innerText = `-`;
            btnDecrease.addEventListener('click', () => this.change(index, -1));

            let span = document.createElement('span');
            span.innerText = `${item.quantity}`;

            let btnIncrease = document.createElement('button');
            btnIncrease.innerText = '+';
            btnIncrease.addEventListener('click', () => this.change(index, 1));

            let btnClose = document.createElement('button');
            btnClose.className = 'close';
            btnClose.innerText = 'x';
            btnClose.addEventListener('click', () => this.clear(index));

            buttonArea.appendChild(btnDecrease);
            buttonArea.appendChild(span);
            buttonArea.appendChild(btnIncrease);
            buttonArea.appendChild(btnClose);

            let product = document.createElement('div');
            product.className = 'item';

            product.appendChild(productArea);
            product.appendChild(buttonArea);

            cart.appendChild(product);
        });
    }
    totalPay() {
        let total = this.cart.reduce((total, item) => total + item.pay(), 0);
        const totalEl = document.getElementById('total-price');

        const duration = 200; // 0.3s
        const startTime = performance.now();

        function animate(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(progress * total);
            totalEl.innerText = `Tổng: ${current.toLocaleString('vi')}vnd`;
            if (progress < 1) requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);

        return total;
    }

    change(index, input) {
        this.cart[index].quantity += input;
        if (this.cart[index].quantity === 0) {
            this.clear(index);
        }
        this.show();
    }

    clear(index) {
        this.cart.splice(index, 1);
        this.show();
    }
}
let myCart = new CartProduct();
myCart.show();
let pay = document.getElementById('btn-pay');
pay.addEventListener('click', () => {
    if (window.confirm(' Xác nhận mua hàng?') === false) return;
    alert(
        `Cảm ơn đã mua hàng.\nTổng giá trị bạn cần thanh toán là: ${myCart
            .totalPay()
            .toLocaleString('vi')}vnd`
    );
    myCart.cart.length = 0;
    myCart.show();
});

class Product {
    constructor(image, title, price) {
        this.image = image;
        this.title = title;
        this.price = price;
    }
}
class ManagerShop {
    constructor() {
        this.warehouse = [
            new Product(
                'https://i.pinimg.com/474x/a9/a9/53/a9a9530aba0735f7494dfc087aa06555.jpg',
                'Anime 1',
                16000
            ),
            new Product(
                'https://i.pinimg.com/236x/40/3b/fd/403bfd94f120823bf9ce791e05bf3a4b.jpg',
                'Anime 2',
                16000
            ),
            new Product(
                'https://i.pinimg.com/474x/e3/82/91/e382919a0554acb2bc63a87efef45820.jpg',
                'Anime 3',
                16000
            ),
            new Product(
                'https://i.pinimg.com/236x/53/fc/cb/53fccb7107c13971267fa0fa062a3444.jpg',
                'Anime 4',
                16000
            ),
            new Product(
                'https://i.pinimg.com/474x/35/7c/6e/357c6eb1e4b67a0cf24864c75f56e6b3.jpg',
                'Anime 5',
                16000
            ),
            new Product(
                'https://i.pinimg.com/474x/e5/14/65/e514654eaa2bc89e509f3ae5ee6cdd50.jpg',
                'Anime 6',
                16000
            ),
            new Product(
                'https://i.pinimg.com/236x/9b/cb/5e/9bcb5e91e1855c868cc572056d60b03b.jpg',
                'Anime 7',
                16000
            ),
            new Product(
                'https://i.pinimg.com/474x/34/70/d8/3470d868525c85889748845cb9be39e7.jpg',
                'Anime 8',
                16000
            ),
            new Product(
                'https://i.pinimg.com/236x/e6/9f/89/e69f89817a0e55065bddf8109a560a9e.jpg',
                'Anime 9',
                16000
            ),
            new Product(
                'https://i.pinimg.com/236x/d6/a4/e5/d6a4e5cc4aad97d017711a1f7d736145.jpg',
                'Anime 10',
                16000
            ),
        ];
    }
    render(array) {
        let galleryProduct = document.getElementById('gallery-product');

        array.forEach((product, index) => {
            let productCard = document.createElement('div');
            productCard.className = 'product-card';

            let image = document.createElement('img');
            image.src = product.image;
            image.className = 'product-image';

            let productTitle = document.createElement('div');
            productTitle.className = 'product-title';
            productTitle.innerText = product.title;

            let productPrice = document.createElement('div');
            productPrice.className = 'product-price';
            productPrice.innerText = `${product.price.toLocaleString(
                'vi'
            )} vnd`;

            let buttonAdd = document.createElement('button');
            buttonAdd.className = 'add-to-cart-btn';
            buttonAdd.innerText = `Thêm vào giỏ hàng`;
            buttonAdd.addEventListener('click', () => this.add(product));

            productCard.appendChild(image);
            productCard.appendChild(productTitle);
            productCard.appendChild(productPrice);
            productCard.appendChild(buttonAdd);

            galleryProduct.appendChild(productCard);
        });
    }

    add(input) {
        let index = myCart.cart.findIndex((find) => find.name === input.title);
        if (index === -1)
            myCart.cart.push(new Item(input.title, 1, input.price));
        else {
            myCart.cart[index].quantity += 1;
        }
        myCart.show();
    }
}
const shop = new ManagerShop();
shop.render(shop.warehouse);
