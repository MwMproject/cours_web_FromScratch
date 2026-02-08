function quickSort(array) {
  // condition de base : si le tableau ne contient qu'un seul élément, il est déjà trié
  if (array.length === 1) {
    return array;
  }

  // choisir le pivot (ici, le dernier élément du tableau)
  const pivot = array[array.length - 1];
  // créer deux tableaux pour stocker les éléments inférieurs et supérieurs au pivot
  let arrLeft = [];
  let arrRight = [];

  // parcourir le tableau et répartir les éléments dans les tableaux gauche et droit en fonction de leur comparaison avec le pivot
  for (let i = 0; i < array.length - 1; i++) {
    // comparaison des éléments avec le pivot pour les répartir dans les tableaux gauche et droit
    array[i] < pivot ? arrLeft.push(array[i]) : arrRight.push(array[i]);
  }

  // récursivement trier les tableaux gauche et droit, puis les concaténer avec le pivot pour obtenir le tableau trié
  if (arrLeft.length > 0 && arrRight.length > 0) {
    // afficher les tableaux gauche, pivot et droit
    console.log(arrLeft, pivot, arrRight);
    // concaténer les tableaux gauche et droit avec le pivot pour obtenir le tableau trié
    return [...quickSort(arrLeft), pivot, ...quickSort(arrRight)];
  }
  // si l'un des tableaux est vide, retourner l'autre tableau trié avec le pivot
  else if (arrLeft.length > 0) {
    // afficher le tableau gauche
    console.log(arrLeft);
    // concaténer le tableau gauche trié avec le pivot pour obtenir le tableau trié
    return [...quickSort(arrLeft), pivot];
  }
  // si le tableau droit n'est pas vide, retourner le tableau droit trié avec le pivot
  else {
    // afficher le tableau droit
    console.log(arrRight);
    // concaténer le tableau droit trié avec le pivot pour obtenir le tableau trié
    return [pivot, ...quickSort(arrRight)];
  }
}
console.log(
  // appel de la fonction avec un tableau d'exemple
  quickSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ]),
);
