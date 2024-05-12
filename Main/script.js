///////////////////////////////////////////////////NumberOpen
function OpenListenNumbers() {
  let arrowSet = document.getElementById("Arrow-Set-Number");
  let listOpen = document.getElementById("Number-List");

  arrowSet.classList.toggle("active");

  if (listOpen.clientHeight !== 0) {
    listOpen.style.height = "0";
  } else {
    listOpen.style.height = "120px";
  }
}
///////////////////////////////////////////////////NumberOpen

///////////////////////////////////////////////////////////////////////JavaScript Slider
// const slideWrappers = document.querySelectorAll(".slide-wrapper");
// const dots = document.querySelectorAll(".dot");

// let currentSlideIndex = 0;

// function showSlide(index) {
//   slideWrappers.forEach((wrapper) => wrapper.classList.remove("active"));
//   slideWrappers[index].classList.add("active");
//   dots.forEach((dot) => dot.classList.remove("active"));
//   dots[index].classList.add("active");
//   currentSlideIndex = index;
// }

// dots.forEach((dot, index) => {
//   dot.addEventListener("click", () => {
//     showSlide(index);
//   });
// });

// showSlide(currentSlideIndex);

// setInterval(() => {
//   currentSlideIndex = (currentSlideIndex + 1) % slideWrappers.length;
//   showSlide(currentSlideIndex);
// }, 3000);

////////////////////////////////////////////////////////////////////////////JavaScript Slider

///////////////////////////////////////////////////Cards-System-JS
const products = [
  {
    id: 1,
    new: true,
    imgSrc: "img/Cards-Content/cardImg1.svg",
    productTitle: "Игровой компьютер Black Jesus, 2023",
    reviews: 0,
    productPrice: 64450,
    productCurrency: "руб.",
    basket: false,
  },
  {
    id: 2,
    new: false,
    imgSrc: "img/Cards-Content/cardImg2.svg",
    productTitle: "Материнская плата, Gigabyte 8450M H",
    reviews: 0,
    productPrice: 6499,
    productCurrency: "руб.",
    basket: false,
  },
  {
    id: 3,
    new: false,
    imgSrc: "img/Cards-Content/cardImg3.svg",
    productTitle: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
    reviews: 0,
    productPrice: 12450,
    productCurrency: "руб.",
    basket: false,
  },
  {
    id: 4,
    new: false,
    imgSrc: "img/Cards-Content/cardImg4.svg",
    productTitle: "Процессор intel core i5, 2.34 Ghz. ",
    reviews: 0,
    productPrice: 5600,
    productCurrency: "руб.",
    basket: false,
  },
  {
    id: 5,
    new: false,
    imgSrc: "img/Cards-Content/cardImg5.svg",
    productTitle:
      "Игровая клавиатура, Oclick 5000, LED-Подсветка, не скользящий материал",
    reviews: 0,
    productPrice: 3500,
    productCurrency: "руб.",
    basket: false,
  },
  {
    id: 6,
    new: false,
    imgSrc: "img/Cards-Content/cardImg6.svg",
    productTitle: "Видеокарта, GEFORCE GTX 1060, 8 ГБ",
    reviews: 0,
    productPrice: 9500,
    productCurrency: "руб.",
    basket: false,
  },
  //Второй столб
  {
    id: 7,
    new: false,
    imgSrc: "img/Cards-Content/cardImg5.svg",
    productTitle:
      "Игровая клавиатура, Oclick 5000, LED-Подсветка, не скользящий материал",
    reviews: 0,
    productPrice: 3500,
    productCurrency: "руб.",
    basket: false,
  },

  {
    id: 9,
    new: false,
    imgSrc: "img/Cards-Content/cardImg6.svg",
    productTitle: "Видеокарта, GEFORCE GTX 1060, 8 ГБ",
    reviews: 0,
    productPrice: 9500,
    productCurrency: "руб.",
    basket: false,
  },
  {
    id: 8,
    new: false,
    imgSrc: "img/Cards-Content/cardImg2.svg",
    productTitle: "Материнская плата, Gigabyte 8450M H",
    reviews: 0,
    productPrice: 6499,
    productCurrency: "руб.",
    basket: false,
  },
  {
    id: 10,
    new: true,
    imgSrc: "img/Cards-Content/cardImg1.svg",
    productTitle: "Игровой компьютер Black Jesus, 2023",
    reviews: 0,
    productPrice: 64450,
    productCurrency: "руб.",
    basket: false,
  },
  {
    id: 11,
    new: false,
    imgSrc: "img/Cards-Content/cardImg3.svg",
    productTitle: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
    reviews: 0,
    productPrice: 12450,
    productCurrency: "руб.",
    basket: false,
  },

  {
    id: 12,
    new: false,
    imgSrc: "img/Cards-Content/cardImg4.svg",
    productTitle: "Процессор intel core i5, 2.34 Ghz. ",
    reviews: 0,
    productPrice: 5600,
    productCurrency: "руб.",
    basket: false,
  },
];

function createProductCards() {
  for (let i = 0; i < products.length; i++) {
    const productCard = document.createElement("div");
    productCard.className = "productCard";
    productCard.id = "productCard" + i;
    productCard.innerHTML = `<div id="productCardHeader${i}" class="productCardHeader">
                                  <div id="newBlock${i}" class="newBlock">Новинка</div>
                                  <div class="cardHeadIcons">
                                      <img src="./img/"  alt="" />
                                      <img src="img/Cards-Content/vector.svg" class="flyToHeart" style="position: absolute;" />
                                  </div></div>
                              <img class="cardImg" src="${products[i].imgSrc}" alt="" />
                              <div class="productCardMain">
                                  <p class="productTitle">${products[i].productTitle}</p>
                                  <span class="productReviews">Отзывов: ${products[i].reviews}</span>
                              </div>
                              <div class="productCardFooter">
                                  <span class="productPrice">${products[i].productPrice}</span>
                                  <span class="productCurrency">${products[i].productCurrency}</span>
                                  <button class="buyBtn" id="buyBtn${i}">КУПИТЬ</button>
                              </div>`;
    document.querySelector(".conteiner").appendChild(productCard);

    const productCardHeader = document.getElementById(`productCardHeader${i}`);
    const newBlock = document.getElementById(`newBlock${i}`);
    if (products[i].new) {
      newBlock.style.opacity = "1";
    }
  }
}

createProductCards();

const basketProducts = [];

function createBasketCard(btnId){
    if(!products[btnId].basket){
      // const separator = document.createElement("div");
      // separator.className = "separator";
      const basketCard = document.createElement("div");
      basketCard.className = "basketCard";
      for(let i = 0; i < basketProducts.length; i++){basketCard.id = `basketCard${i}`;}
      basketCard.innerHTML = `<img src="${products[btnId].imgSrc}" class="basketCardImg">
                              <span>${products[btnId].productTitle}</span>
                              <div class="quantityParentBlock">
                                <div class="minusBlock"><img src="./img/minusImg.svg"></div>
                                <div class="quantityBlock"><span id="quantity">1</span></div>
                                <div class="plusBlock"><img src="./img/plusImg.svg"></div>
                              </div>
                              <div class="priceBlock">
                                <span class="price">${products[btnId].productPrice}</span>
                                <span class="currency">${products[btnId].productCurrency}</span>
                              </div>
                              <div class="deleteBlock">
                                <img id="" class="deleteBaskedCard" src="./img/deleteImg.svg" alt="">
                              </div>`;

      // document.getElementById("basketMain").appendChild(separator);
      document.getElementById("basketMain").appendChild(basketCard);
  }
}

const allBuyBtns = document.querySelectorAll(".buyBtn");

allBuyBtns.forEach(btn => {
  btn.addEventListener("click", (event) => {
    event.stopPropagation();
    const btnId = btn.id.substring(6, 8);
    if(!products[btnId].basket){
      basketProducts.push(products[btnId]);
      createBasketCard(btnId);
      products[btnId].basket = true;
    }
  })
});
///////////////////////////////////////////////////Cards-System-JS

////////////////////////////////////////////////////Teleport-Product-Page
// function OpenTheProduct(){
// // window.location.href = '../Product-page/index.html'
//   console.log();
// }

let allProductCards = document.querySelectorAll(".productCard");

// document.querySelector(".buyBtn").addEventListener("click", () => {
//   console.log(document.querySelector(".buyBtn").closest(".productCard"));
// });

allProductCards.forEach((elem) => {
  elem.addEventListener("click", () => {
    localStorage.setItem(
      "productInfo",
      JSON.stringify([
        {
          title: elem.closest(".productCard").querySelector(".productTitle")
            .textContent,
          img: elem.closest(".productCard").querySelector(".cardImg").src,
          price: elem.closest(".productCard").querySelector(".productPrice")
            .textContent,
        },
      ])
    );

    window.location.href = "../Product-page/index.html";
  });
});

////////////////////////////////////////////////////Teleport-Product-Page

///////////////////////////////////////////////////NEW-SLIDER

const radioButtons = document.querySelectorAll(
  '.Slider-Content-Div-Right input[type="radio"]'
);
let currentSlideIndex = 0;
document.querySelectorAll(".slider-btnn").forEach((elem, index) => {
  elem.addEventListener("click", () => {
    currentSlideIndex = index;
    elem.checked = true;
  });
});
function switchSlide() {
  radioButtons[currentSlideIndex].checked = true;
  currentSlideIndex = (currentSlideIndex + 1) % radioButtons.length;
}
setInterval(switchSlide, 2500);
switchSlide();

///////////////////////////////////////////////////NEW-SLIDER
