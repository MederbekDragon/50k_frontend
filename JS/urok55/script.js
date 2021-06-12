(function () {
	'use strict';
	class cardProduct {
        
        constructor(tooltips, tooltipsClass,  img, title, originPrice, oldPrice, innerBlock){
            this.tooltips = tooltips;
            this.tooltipsClass = tooltipsClass;
            this.img = img;
            this.title = title;
            this.originPrice = originPrice;
            this.oldPrice = oldPrice;
            this.innerBlock = document.querySelector(innerBlock);
            this.valuta = 85;
            this.originPrice = this.convetToUSD(this.originPrice);
            this.oldPrice = this.convetToUSD(this.oldPrice);
        }

        convetToUSD(price){
            const result = price / this.valuta;
            return result.toFixed(1);
        }

        render() {
            const div = document.createElement("div");
            div.classList.add("list__item");
            div.innerHTML = `
                            <div class="item__img">
                                <div class="tooltips ${this.tooltipsClass}">
                                    <span>${this.tooltips}</span>
                                </div>

                                <img src=${this.img} alt="">

                                <div class="arrows">
                                    <span><i class="fas fa-arrows-alt"></i> Quick view</span>
                                </div>
                            </div>
                            <div class="item__title">
                                <a href="?search=#" class="ttl">${this.title}</a>

                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <span>6 Review(s)</span>
                                </div>

                                <div class="price">
                                    <span class="currency">$</span>
                                    <span class="oprice">${this.originPrice}</span>
                                    <del>$ ${this.oldPrice}</del>
                                </div>
                            </div>

                            <div class="item__hide">
                                <div class="item__icon">
                                    <a class="icon__hidden add_cart" href="#"><i class="fas fa-shopping-bag"></i></a>
                                </div>

                                <div class="item__icon">
                                    <a class="icon__hidden" href="#"><i class="fas fa-balance-scale"></i></a>
                                </div>

                                <div class="item__icon">
                                    <a class="icon__hidden" href="#"><i class="fas fa-heart"></i></a>
                                </div>
                            </div>
            `;

            this.innerBlock.append(div);

        }
    }

    // tooltips, img, title, originPrice, oldPrice, innerBlock
    new cardProduct(
        'NEW',
        'orange',
        'img/content/img61.jpg',
        'Animal Print Sweatshirt 1',
        1230,
        2500,
        '.main__list'
    ).render();

    new cardProduct(
        'Sale',
        'green',
        'img/content/img50.jpg',
        'Animal Print Sweatshirt 2',
        1230,
        2500,
        '.main__list'
    ).render();

    new cardProduct(
        '-25',
        'orange',
        'img/content/img63.jpg',
        'Animal Print Sweatshirt 3',
        1230,
        2500,
        '.main__list'
    ).render();

    new cardProduct(
        'NEW',
        'orange',
        'img/content/img63.jpg',
        'Animal Print Sweatshirt 4',
        1230,
        2500,
        '.main__list'
    ).render();
    
    new cardProduct(
        'NEW',
        'green',
        'img/content/img63.jpg',
        'Animal Print Sweatshirt 5',
        1230,
        2500,
        '.main__list'
    ).render();



    class Thenable {
    	constructor(num) {
			this.num = num;
		}

		then(resolve, reject) {
			// alert(resolve);
			// выполнить resolve со значением this.num * 2 через 1000мс
			setTimeout(() => resolve(this.num * 2), 5000); // (*)
		}

    };

    async function f() {
		// код будет ждать 1 секунду,
		// после чего значение result станет равным 2
		let result = await new Thenable(5);
		alert(result);
    }

	f();

	// https://learn.javascript.ru/async-await

}());