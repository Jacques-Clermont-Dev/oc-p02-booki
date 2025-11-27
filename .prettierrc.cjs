// Ce fichier configure Prettier pour ce projet.
// Format CJS utilisé pour permettre les commentaires.

module.exports = {
  // Utiliser des guillemets simples dans le code HTML/CSS/JS
  singleQuote: true,

  // Ne pas ajouter de point-virgule à la fin des lignes
  semi: false,

  // Ajouter une virgule terminale partout où possible (JS)
  // -> même si Booki ne contient pas encore de JS
  trailingComma: "all",

  // Largeur maximale avant retour à la ligne automatique
  printWidth: 100,
};
