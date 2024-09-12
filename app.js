const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "September Dress",
    price: 100,
    colors: [
      {
        code: "black",
        img: "./img/sweetcarolinedress.jpeg",
      },
      {
        code: "darkblue",
        img: "./img/scjump.jpeg",
      },
    ],
  },
  {
    id: 2,
    title: "October Dress",
    price: 115,
    colors: [
      {
        code: "lightgray",
        img: "./img/october_dress.png",
      },
      {
        code: "green",
        img: "./img/gracie2.jpeg",
      },
    ],
  },
  {
    id: 3,
    title: "November Dress",
    price: 110,
    colors: [
      {
        code: "lightgray",
        img: "./img/flossy1.jpeg",
      },
      {
        code: "green",
        img: "./img/flossy2.jpeg",
      },
    ],
  },
  {
    id: 4,
    title: "December Dress",
    price: 130,
    colors: [
      {
        code: "black",
        img: "./img/mad.jpeg",
      },
      {
        code: "blue",
        img: "./img/mad1.jpeg",
      },
    ],
  },
  {
    id: 5,
    title: "January Dress",
    price: 150,
    colors: [
      {
        code: "gray",
        img: "./img/jan.jpeg",
      },
      {
        code: "black",
        img: "./img/noir.jpeg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
