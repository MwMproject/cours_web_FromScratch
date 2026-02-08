function bubbleSort(array) {
  // boucle pour parcourir le tableau
  for (let i = 0; i < array.length - 1; i++) {
    // boucle pour comparer les éléments adjacents
    for (let j = 0; j < array.length - 1 - i; j++) {
      // comparaison des éléments adjacents
      if (array[j] > array[j + 1]) {
        // échange des valeurs si la valeur de gauche est plus grande que celle de droite
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        console.log(array);
      }
    }
  }
  console.log(array);
}

// appel de la fonction avec un tableau d'exemple
bubbleSort([451, 2, 65, 4, 7, 98, 2, 3, 1]);
