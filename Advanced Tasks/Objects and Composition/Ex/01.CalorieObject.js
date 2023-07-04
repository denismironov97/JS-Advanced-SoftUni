function calorieObj(dataArr) {
  const foods = {};
  for (let index = 0; index < dataArr.length; index += 2) {
    const foodType = dataArr[index];
    const calories = Number(dataArr[index + 1]);

    if (foods[foodType] == null) {
      foods[foodType] = calories;
    } else {
      foods[foodType] = foods[foodType] + calories;
    }
  }

  console.log(foods);
}

calorieObj(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
