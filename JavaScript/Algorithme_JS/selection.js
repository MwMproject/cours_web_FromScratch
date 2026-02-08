function selectionSort(array) {
  // boucle pour parcourir le tableau
  for (let i = 0; i < array.length - 1; i++) {
    // trouver l'index du plus petit élément dans la partie non triée du tableau
    let minIndex = i;
    // boucle pour parcourir la partie non triée du tableau
    for (let j = i + 1; j < array.length; j++) {
      // comparaison des éléments pour trouver le plus petit
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    // échanger le plus petit élément trouvé avec le premier élément de la partie non triée
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  console.log(array);
}

// appel de la fonction avec un tableau d'exemple
selectionSort([451, 2, 65, 4, 7, 98, 2, 3, 1]);
