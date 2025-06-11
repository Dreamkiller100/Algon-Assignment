/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Example transaction:
    {
      id: 1,
      timestamp: 1656076800000,
      price: 10,
      category: 'Food',
      itemName: 'Pizza',
    }
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  for (const transaction of transactions) {
    const { category, price } = transaction;
    if (categoryMap[category]) {
      categoryMap[category] += price;
    } else {
      categoryMap[category] = price;
    }
  }

  const result = [];
  for (const category in categoryMap) {
    result.push({
      category: category,
      totalSpent: categoryMap[category]
    });
  }

  return result;
}


const transactions = [
  { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, timestamp: 1656076805000, price: 20, category: 'Food', itemName: 'Burger' },
  { id: 3, timestamp: 1656076810000, price: 15, category: 'Clothing', itemName: 'Shirt' },
  { id: 4, timestamp: 1656076815000, price: 5, category: 'Clothing', itemName: 'Socks' },
  { id: 5, timestamp: 1656076820000, price: 30, category: 'Electronics', itemName: 'Headphones' }
];

console.log(calculateTotalSpentByCategory(transactions));


