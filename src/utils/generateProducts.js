const colors = ["Черный", "Красный", "Белый", "Синий", "Бежевый", "Коричневый"];
const categories = ["Одежда", "Обувь", "Аксессуары", "Спорт", "Электроника", "Игрушки", "Дом", "Сад", "Косметика", "Бижутерия"];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomFloat = (min, max, decimals = 1) => parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
const getRandomElement = (array) => array[getRandomInt(0, array.length - 1)];

const generateProducts = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `product-${i + 1}`,
    name: `Продукт ${i + 1}`,
    description: `Описание для продукта ${i + 1}. Содержит несколько случайных слов.`,
    color: getRandomElement(colors),
    category: getRandomElement(categories),
    price: getRandomInt(10, 9999),
    rating: getRandomFloat(0, 5),
    imageUrl: `https://via.placeholder.com/150?text=Product+${i + 1}`,
  }));
};

export default generateProducts;
