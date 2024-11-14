const mebels = [
  {
    id: 0,
    chairName: "Meryl Lounge Chair",
    mainImg: "./image/png/chair-img.png",
    price: 49.99,
    imgs: [
      "../image/svg/heroimg1.svg",
      "../image/svg/heroimg2.svg",
      "./image/svg/heroimg3.svg",
      "../image/svg/heroimg4.svg",
      "./image/svg/heroimg5.svg",
    ],
  },
  {
    id: 1,
    chairName: " Chair Blue ",
    mainImg: "../image/png/chair-main-blue.jpg",
    price: 349.99,
    imgs: [
      "./image/png/chair-blue1.jpg",
      "../image/png/chair-blue2.jpg",
      "../image/png/chair-blue3.jpg",
      "../image/png/chair-blue4.jpg",
      "../image/png/chair-blue5.jpg",
    ],
  },
  {
    id: 2,
    chairName: "Meryl Black Chair",
    mainImg: "./image/png/black-main-chair.jpg",
    price: 179.99,
    imgs: [
      "../image/png/chair-black1.jpg",
      "../image/png/chair-black2.jpg",
      "../image/png/chair-black3.jpg",
      "../image/png/chair-black4.jpg",
      "../image/png/chair-black5.jpg",
    ],
  },
  {
    id: 3,
    chairName: "Brown Classic  Chair",
    mainImg: "./image/png/chair-main-brown.jpg",
    price: 200.99,
    imgs: [
      "../image/png/chair-brown1.jpg",
      "../image/png/chair-brown2.jpg",
      "../image/png/chair-brown3.jpg",
      "../image/png/chair-brown4.jpg",
      "../image/png/chair-brown5.jpg",
    ],
  },
  {
    id: 4,
    chairName: "Meryl Red Chair",
    mainImg: "./image/png/chair-main-red.jpg",
    price: 149.99,
    imgs: [
      "../image/png/chair-red1.jpg",
      "../image/png/chair-red2.jpg",
      "../image/png/chair-red3.jpg",
      "../image/png/chair-red4.jpg",
      "../image/png/chair-red5.jpg",
    ],
  },
];

let products_id = 0;
let countValue = 0;

function writeMainData(Id) {
  hero.innerHTML = `
    <div class="container hero__container">
            <div class="hero-top">
                <i class="fa-solid fa-arrow-left"></i>
                <p><b>0${mebels[Id].id}</b>/05</p>
            </div>
            <div class="hero__midle">
                <p>Chair <b>/${mebels[Id].chairName}</b></p>
                <div >
                    <i class="fa-solid fa-chevron-left prevPro"></i>
                    <i class="fa-solid fa-chevron-right nextPro"></i>
                </div>
            </div>

            <!-- hero intro -->
             <div class="hero__intro">
                <div class="hero__desc">
                    <h1 class="title">
                    ${mebels[Id].chairName}
                    </h1>
                    <div class="hero__desc-price">
                        <p class="price">$${mebels[Id].price}</p>
                        <img src="./image/svg/Stars.svg" alt="rating">
                    </div>
                    <div class="hero__text">The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.
                    </div>
                    <div class="chair__colors">
                        <div   class="dot"></div>
                        <div   class="dot"></div>
                        <div   class="dot"></div>
                        <div   class="dot"></div>
                    </div>
                    <div class="hero__desc-btns">
                        <div class="count__btns">
                            <button onclick="minus()" >-</button>
                            <p class="count">${countValue}</p>
                            <button onclick="plus()">+</button>
                        </div>
                        <button class="add__btn">Add to Cart</button>
                    </div>
                    <p>Free 3-5 day shipping  •  Tool-free assembly  •  30-day trial</p>
                </div>

                <img class="mainImg" src="${mebels[Id].mainImg}" alt="">
             </div>

             <!-- hero bottom -->
              <div class="hero__bottom">
                <div class="hero__socials">
                    <p><i class="fa-regular fa-heart"></i>Add to Wishlist</p>
                    <div class="socials">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-pinterest-p"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>

                <div class="hero__bottom-img">
                    <div><img class="bottom-img"  src="${mebels[Id].imgs[0]}" alt=""></div>
                    <div><img class="bottom-img"  src="${mebels[Id].imgs[1]}" alt=""></div>
                    <div><img class="bottom-img"  src="${mebels[Id].imgs[2]}" alt=""></div>
                    <div><img class="bottom-img"  src="${mebels[Id].imgs[3]}" alt=""></div>
                    <div><img class="bottom-img"  src="${mebels[Id].imgs[4]}" alt=""></div>
                  
                </div>
              </div>
        </div>


`;
}

writeMainData(0);

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("nextPro")) {
    products_id < 4 ? (products_id += 1) : (products_id = 0);
  } else if (e.target.classList.contains("prevPro")) {
    products_id > 0 ? (products_id -= 1) : (products_id = 4);
  }
  writeMainData(products_id);
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("bottom-img")) {
    document
      .querySelector(".mainImg")
      .setAttribute("src", e.target.getAttribute("src"));
  }
});

function plus() {
  const countElement = document.querySelector(".count");
  countValue += 1;
  countElement.textContent = countValue;
}

function minus() {
  const countElement = document.querySelector(".count");
  if (countValue > 0) {
    countValue -= 1;
    countElement.textContent = countValue;
  }
}
