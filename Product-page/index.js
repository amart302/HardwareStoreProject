// document.querySelector(".carousel-vniz").addEventListener("click", () => {
//   console.log(3423);
//   const div = document.querySelector("#carousel");
//   div.scrollTop = div.scrollHeight;
// });

document.querySelector(".carousel-vniz").addEventListener("click", () => {
  const div = document.querySelector(".caro");
  div.scrollTop = div.scrollHeight;
  document.querySelector(".carousel-vniz").classList.add("none");
  document.querySelector(".carousel-vverh").classList.remove("none");
});

document.querySelector(".carousel-vverh").addEventListener("click", () => {
  const div = document.querySelector(".caro");
  div.scrollTop = -div.scrollHeight;
  document.querySelector(".carousel-vniz").classList.remove("none");
  document.querySelector(".carousel-vverh").classList.add("none");
});

const b5_table = document.querySelector(".b5-cont-table");

// console.log(b5_table.querySelectorAll("tr"));

for (let i = 0; i < b5_table.querySelectorAll("tr").length; i++) {
  if ((i + 1) % 2 === 1) {
    b5_table.querySelectorAll("tr")[i].style.backgroundColor = "#F4F8FB";
  }
}

document.querySelectorAll(".b-7-7-card-deystviya-like").forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.querySelector(".like").classList.toggle("liked");

    if (elem.querySelector(".like").classList.contains("liked")) {
      elem.querySelector(".likes").textContent =
        Number(elem.querySelector(".likes").textContent) + 1;
    } else {
      elem.querySelector(".likes").textContent =
        Number(elem.querySelector(".likes").textContent) - 1;
    }
  });
});

const products = [
  {
    new: true,
    imgSrc: "img/Cards-Content/cardImg1.svg",
    productTitle: "Игровой компьютер Black Jesus, 2023",
    reviews: 0,
    productPrice: 64450,
    productCurrency: "руб.",
  },

  {
    new: false,
    imgSrc: "img/Cards-Content/cardImg3.svg",
    productTitle: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
    reviews: 0,
    productPrice: 12450,
    productCurrency: "руб.",
  },
  {
    new: false,
    imgSrc: "img/Cards-Content/cardImg4.svg",
    productTitle: "Процессор intel core i5, 2.34 Ghz. ",
    reviews: 0,
    productPrice: 5600,
    productCurrency: "руб.",
  },
  {
    new: false,
    imgSrc: "img/Cards-Content/cardImg2.svg",
    productTitle: "Материнская плата, Gigabyte 8450M H",
    reviews: 0,
    productPrice: 6499,
    productCurrency: "руб.",
  },
  {
    new: false,
    imgSrc: "img/Cards-Content/cardImg5.svg",
    productTitle:
      "Игровая клавиатура, Oclick 5000, LED-Подсветка, не скользящий материал",
    reviews: 0,
    productPrice: 3500,
    productCurrency: "руб.",
  },
  {
    new: false,
    imgSrc: "img/Cards-Content/cardImg6.svg",
    productTitle: "Видеокарта, GEFORCE GTX 1060, 8 ГБ",
    reviews: 0,
    productPrice: 9500,
    productCurrency: "руб.",
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
                                      <img src=""  alt="" />
                                      <img src="img/Cards-Content/vector.svg" style="position: absolute;" />
                                  </div></div>
                              <img class="cardImg" src="${products[i].imgSrc}" alt="" />
                              <div class="productCardMain">
                                  <p class="productTitle">${products[i].productTitle}</p>
                                  <span class="productReviews">Отзывов: ${products[i].reviews}</span>
                              </div>
                              <div class="productCardFooter">
                                  <span class="productPrice">${products[i].productPrice}</span>
                                  <span class="productCurrency">${products[i].productCurrency}</span>
                                  <button class="buyBtn">КУПИТЬ</button>
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

document.querySelector(".b4-product-img-img").src = JSON.parse(
  localStorage.getItem("productInfo")
)[0].img;

document.querySelector(".b1-title").textContent = JSON.parse(
  localStorage.getItem("productInfo")
)[0].title;

document.querySelector(".b7-3-new_price-span").textContent = JSON.parse(
  localStorage.getItem("productInfo")
)[0].price;

document.querySelector(".b7-3-star_price-s").textContent =
  Number(JSON.parse(localStorage.getItem("productInfo"))[0].price) + 1000;

// document.querySelector(".b6-cont").textContent =


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

