const products = [
  {
    _id: "fc1efc1cc0f941e684c8c9d02b9d2d60",
    title: "Susu Murni Dairy Pure, 3800 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 4.23,
    is_new: false,
  },
  {
    _id: "cd2e08c78c7b49b0bc95dabeb352a9f1",
    title: "Susu Murni Fairlife, 1500 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 3.11,
    is_new: false,
  },
  {
    _id: "b818adacefbe4e448780b654ddf3ee2b",
    title: "Susu Rendah Lemak Cokelat Nestle Nesquik, 16 pcs",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 11.54,
    is_new: false,
  },
  {
    _id: "a36004f7c1c543049ff675b1be347e67",
    title: "Susu Bebas Lemak dengan Bahan Pilihan Moo-Moo, 900 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 0.92,
    is_new: false,
  },
  {
    _id: "e07636d328e1459c9334436c998f6f0d",
    title: "Susu Bebas Lemak dengan Bahan Pilihan Moo-Moo, 3800 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 2.3,
    is_new: false,
  },
  {
    _id: "20e0d0566980452cb09fc1d19966444b",
    title: "Susu Kelapa Tanpa Pemanis Silk, 1800 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 2.99,
    is_new: false,
  },
  {
    _id: "e1387613d09744878df8a987a7ce9811",
    title: "Susu Bebas Lemak Fairlife, 1500 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 3.13,
    is_new: false,
  },
  {
    _id: "1a8fc751a843463d8f61e2d3d0ec0bfe",
    title: "Susu Rendah Lemak Cokelat Omega-3 DHA Horizon Organic, 12 pcs",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 11.94,
    is_new: false,
  },
  {
    _id: "3c0039db422144e4aa14d27702ba81ea",
    title: "Minuman Cokelat Yoo-hoo, 3 pcs",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 1,
    is_new: false,
  },
  {
    _id: "f74a8ce269d34215a41d765a1db48cc3",
    title: "Susu Rendah Lemak 2% dengan Bahan Pilihan Moo-Moo, 1800 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 1.33,
    is_new: false,
  },
  {
    _id: "02f9cce8a626403b9800990d8aff5d00",
    title: "Susu Murni Borden, 3800 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 3.53,
    is_new: false,
  },
  {
    _id: "af00bee89b6446e5ae3c7f93c19f1716",
    title: "Susu Kelapa Caravelle Chaudoc, 400 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 1.96,
    is_new: false,
  },
  {
    _id: "2713b8febf9340619413974f04fb08bb",
    title: "Susu Murni Horizon Organic, 1800 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 3.88,
    is_new: false,
  },
  {
    _id: "cae3a896634f432c840d589d9cc6f271",
    title: "Susu Rendah Lemak Stroberi Nesquik, 250 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 0.92,
    is_new: false,
  },
  {
    _id: "aee0c8c10878474388024e855568c799",
    title: "Susu Rendah Lemak Vanila Nesquik, 400 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 1.34,
    is_new: false,
  },
  {
    _id: "efdb42e44c5a4f5092455976685e87b2",
    title: "Susu Rendah Lemak 1% dengan Bahan Pilihan Moo-Moo, 3800 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 2.24,
    is_new: false,
  },
  {
    _id: "603f865dace64b278e8694ae3b74fefc",
    title: "Susu Kelapa Organik Polar Premium, 400 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 2.94,
    is_new: false,
  },
  {
    _id: "46d114d5532f40c4bba8abce14f6e700",
    title: "Susu Cokelat Borden Dutch, 480 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 1.56,
    is_new: false,
  },
  {
    _id: "3630a717471640a9a8f3d60d552b06bf",
    title: "Susu Cokelat Borden Dutch, 1800 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 2.7,
    is_new: false,
  },
  {
    _id: "e649d4d82a2843ecaaf6a07edfc78cac",
    title: "Susu Organik Bebas Lemak Instan Saco, 100 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 2.48,
    is_new: false,
  },
  {
    _id: "6270ceca1ed84b149519d9fa4e947725",
    title: "Susu Rendah Lemak 2% Hill Country Fare, 3800 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 2.32,
    is_new: false,
  },
  {
    _id: "3fdae25e992140979d1581d3a6229855",
    title: "Susu Rendah Lemak Vanila Omega-3 DHA Horizon Organic, 6 pcs",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 6.36,
    is_new: false,
  },
  {
    _id: "a343989e82444b3aaa692a133e233266",
    title: "Susu Rendah Lemak 2% Omega-3 DHA Horizon Organic, 1800 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 4.34,
    is_new: false,
  },
  {
    _id: "7dd564ebad0b448f908f2378c65ffdc0",
    title: "Susu Cokelat Moo-Moo, 1800 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 2.7,
    is_new: false,
  },
  {
    _id: "cbe8eeeeee394c8cb407c8fdedfc08e6",
    title: "Susu Kelapa A Taste of Thai Lite, 400 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 2.29,
    is_new: false,
  },
  {
    _id: "3a966ce4bf4b40b1b2e651af312bb09b",
    title: "Susu Kambing Meyenberg, 1800 ml",
    image: "https://cdn-icons-png.flaticon.com/512/684/684614.png",
    price: 7.8,
    is_new: false,
  },
  {
    _id: "ec62fa14fd7f4559830e18dfb7b2a477",
    title: "Mentega Khas Irlandia dengan Minyak Kanola Kerrygold, 200 gr",
    image: "https://static.thenounproject.com/png/3961115-200.png",
    price: 2.8,
    is_new: false,
  },
  {
    _id: "f1153a4aae6e4ac7b605895fbccaa22e",
    title: "Mentega Tawar Khas Eropa Danish Creamery, 250 gr",
    image: "https://static.thenounproject.com/png/3961115-200.png",
    price: 2.97,
    is_new: false,
  },
  {
    _id: "fdb27628418d4a488830fde569c01b07",
    title: "Mentega yang Dimurnikan Ghee Kelapo, 380 gr",
    image: "https://static.thenounproject.com/png/3961115-200.png",
    price: 8.82,
    is_new: false,
  },
  {
    _id: "6f562f69f8b946a3b606f0aa8e4d103f",
    title: "Mentega Rendah Sodium dengan Minyak Kanola Land O Lakes, 450 gr",
    image: "https://static.thenounproject.com/png/3961115-200.png",
    price: 3.87,
    is_new: false,
  },
  {
    _id: "56e44f93e78b4e1ea0058ee6a5ea52c5",
    title: "Susu Kental Manis Organik California Farms, 400 ml",
    image: "https://static.thenounproject.com/png/3961115-200.png",
    price: 3.49,
    is_new: false,
  },
  {
    _id: "24baadad47ff4c7aa8574f4175e0b81c",
    title: "Susu Murni Lactaid, 2800 ml",
    image: "https://static.thenounproject.com/png/3961115-200.png",
    price: 5.47,
    is_new: false,
  },
];

const cardsContainer = document.querySelector(".cards");

function addCard({ product }) {
  const cardTemplate = document.querySelector("#card").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__title").textContent = product["title"];
  cardElement.querySelector(".card__price").textContent =
    "$" + product["price"];
  cardElement.querySelector(".card__image").src = product["image"];
  cardsContainer.append(cardElement);
}

products.map((product) => {
  addCard({ product });
});
