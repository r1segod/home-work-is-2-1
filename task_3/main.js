
let product = {
  name: "Smartphone",
  price: 500,
  inStock: true,
  brand: "Samsung",
  specifications: {
    screenSize: "6 inches",
    camera: "12 MP",
    memory: "128 GB"
  },
  discount: {
    percentage: 10,
    expirationDate: "2023-12-31"
  }
};

let customer = {
  name: "John",
  budget: 600
};

if (customer.budget < product.price) {
  console.log("У вас недостаточно средств для покупки этого товара.");
} else {
  console.log(`Вы можете приобрести ${product.name} по цене ${product.price} долларов.`);

  console.log("Технические характеристики:");
  for (let key in product.specifications) {
    console.log(`${key}: ${product.specifications[key]}`);
  }

  if (product.discount) {
    console.log(`Скидка ${product.discount.percentage}% до ${product.discount.expirationDate}`);
    let discountedPrice = product.price - (product.price * product.discount.percentage / 100);
    console.log(`Цена со скидкой: ${discountedPrice} долларов.`);
  }
}
