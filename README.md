# RPG JS

### Étape 1

- Créer une class `Player` (représentant un joueur), avec les propriétés `name` et `character`.
- Récupérer depuis le html les inputs avec les id `name-input-1` et `name-input-2`.
- Créer deux variables globales `player1` et `player2` étant chacun assignés à la valeur `null`.
- Ajouter un écouteur d'évenement `keydown` sur chacun des inputs.
- Lors de l'appui sur la touche `Enter` (en étant en focus sur un input), identifier quel input a été validé, récupérer la valeur de l'input, puis créer une instance de la class `Player` avec pour valeur de la propriété `name` la valeur de l'input et assigner cette instance à la variable `player1` ou `player2` en fonction de quel input a été validé.
- Vérifier avec un `console.log` que `player1` est assigné à une instance de `Player` ayant pour `name` la valeur du premier input, et `player2` assigné à une instance de `Player` ayant pour `name` la valeur du deuxième input.

### Étape 2

- Empécher la possibilité de valider un input si la valeur de celui-ci est vide.
- Supprimer le contenu de la `div` qui contient l'input validé.
- Dans cette même `div`, insérer une balise `p` avec pour contenu le nom du joueur validé.
- Créer via js une balise `select`.
- Insérer cette balise dans la `div` ayant pour `id`: `select-container-${id}`, et retirer la class `hidden` de cette `div`.

### Étape 3

- Créer un array `characters` contenant 3 objets représentant chacun des personnages (ex: `{ label: "Mage", id: "mage" }`).
- Lors de le création de la balise `select`, insérer pour chacun des `characters` une balise `option` dans la balise `select`.
- Ajouter également un écouteur d'évenement sur la balise `select` (évenement `change`).
- Lorsque la valeur du `select` change, faire un `console.log` de la valeur de celui-ci.

### Étape 4

- Créer une class `Character` avec les propriétés suivantes: `hp`, `atk`, `int`, `spd`, `agi` et `color`. La propriété `hp` aura une valeur par défaut valant `100`. Les autres seront dépendantes du `constructor`.
- Cette class aura également une méthode `attack` qui renverra la valeur correspondant à l'`atk` divisée par 2, puis multipliée par la `spd`, le tout divisée par `100`. Á cette même valeur on viendra ajouter la `int` divisée par `10`.
- Pour finir elle aura aussi une méthode `dodge`. Cette méthode générera un nbr aléatoire entre `1` et `100`, si le nbr généré est inférieur à `agi` alors la méthode renverra `true` sinon elle renverra `false`.

### Étape 5

- Créer les class `Mage`, `Rogue` et `Warrior`. Ces 3 class héritent de la class `Character`.
- Les stats de chacun des personnage seront définies dans le `constructor` de celles-ci.
- Le `Mage` aura les stats suivantes: `atk`:`16`, `int`:`150`, `spd`:`50`, `agi`:`50`, `color`:`"#1d72aa"`
- Le `Rogue` aura les stats suivantes: `atk`:`44`, `int`:`20`, `spd`:`80`, `agi`:`60`, `color`:`"#00947e"`
- Le `Warrior` aura les stats suivantes: `atk`:`130`, `int`:`10`, `spd`:`30`, `agi`:`40`, `color`:`"#947600"`
- Lors du changement de valeur du `select`; en fonction de la valeur sélectionnée, attribuer à la propriété `character` (de `player1` ou `player2`) une instance de la class `Mage`, `Rogue` ou `Warrior`.
- Changer la couleur de texte du `select` en fonction du personnage sélectionné.

### Étape 6

- Lors de la sélection d'un personnage, récupérer la `div` ayant pour `id`: `stats-${id}`.
- Récupérer les stats du personnage sélectionné par le joueur.
- Créer une balise `ul` et pour chaque stat créer une balise `li`. Dans chaque `li` le contenu sous la forme suivante sera inséré: `<span>${statName}</span> <span>==></span> <span>${statValue}</span>`.
- Insérer chaque `li` dans le `ul`.
- Insérer le `ul` dans la `div` récupérée plus haut. Retirer la class `hidden` de la `div`.

### Étape 7

Lorsque les 2 joueurs ont selectionné leur personnage:

- Récupérer la `div` ayant pour `id`: `fight-btn`.
- Retirer la class `hidden` de cet élément.
- Ajouter un écouteur d'évenement `click` sur le `button` contenu dans cette `div`.

Lors du click sur ce `button`:

- Désactiver tous les `select` en leur ajoutant la class `disabled`.
- Ensuite retirer la class `hidden` de la `div` avec l'`id`: `turn-btn`.
- Puis déterminer quel joueur va attaquer en premier (aléatoire) et modifier le text du bouton `turn-btn` en conséquence.
- Finir par supprimer la `div` avec l'`id`: `fight-btn`.

### Étape 8

Á chaque click sur le `turn-btn`:

- Récupérer le joueur qui attaque. Récupérer le joueur qui se défend.
- Récupérer la valeur de `dodge` du `character` du joueur.
- Récupérer la valeur `attack` du `character` du joueur.
- Déterminer si il y a esquive.
- Faire la déduction de point de vie du defenseur en fonction des dommages de l'attaquant.
- Mettre à jour les stats
- Créer les textes représentant le combat.
- Injecter ces textes dans des `li` qui seront eux même injectés dans le `ul` ayant l'`id`: `fight-log`.

### Étape 9

- Gérer le `restart`.
