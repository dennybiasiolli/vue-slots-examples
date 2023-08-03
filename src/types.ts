export enum CrustStyle {
  PAN = 'pan',
  CRISPY = 'crispy'
}

export const crustStyleMap = {
  [CrustStyle.PAN]: {
    key: CrustStyle.PAN,
    name: 'Pan crust thicker and fluffer',
    size: '15px'
  },
  [CrustStyle.CRISPY]: {
    key: CrustStyle.CRISPY,
    name: 'Thin and crispy',
    size: '10px'
  }
}

export enum CrustComposition {
  WHITE = 'white',
  WHOLE = 'whole',
  GLUTEN_FREE = 'gluten_free'
}

export const crustCompositionMap = {
  [CrustComposition.WHITE]: {
    key: CrustComposition.WHITE,
    name: 'White flour',
    color: '#dd9d26'
  },
  [CrustComposition.WHOLE]: {
    key: CrustComposition.WHOLE,
    name: 'Whole wheat flour',
    color: '#996d1c'
  },
  [CrustComposition.GLUTEN_FREE]: {
    key: CrustComposition.GLUTEN_FREE,
    name: 'Gluten-free flour',
    color: '#d1a847'
  }
}

export enum Sauce {
  TOMATO = 'tomato',
  PESTO = 'pesto',
  OIL = 'oil',
  GARLIC = 'garlic'
}

export const sauceMap = {
  [Sauce.TOMATO]: {
    key: Sauce.TOMATO,
    name: 'Tomato sauce',
    color: '#d13524'
  },
  [Sauce.PESTO]: {
    key: Sauce.PESTO,
    name: 'Pesto',
    color: '#3f5425'
  },
  [Sauce.OIL]: {
    key: Sauce.OIL,
    name: 'Olive oil',
    color: '#e0d043'
  },
  [Sauce.GARLIC]: {
    key: Sauce.GARLIC,
    name: 'Olive oil and garlic',
    color: '#baad3a'
  }
}

export enum Topping {
  MOZZARELLA = 'mozzarella',
  BASIL = 'basil',
  PEPPERONI = 'pepperoni',
  ONIONS = 'onions',
  OLIVES = 'olives',
  EGG = 'egg',
  ZUCCHINI = 'zucchini',
  CHERRY_TOMATOES = 'cherry-tomatoes'
}

export const toppingMap = {
  [Topping.MOZZARELLA]: {
    key: Topping.MOZZARELLA,
    name: 'Mozzarella'
  },
  [Topping.BASIL]: {
    key: Topping.BASIL,
    name: 'Basil'
  },
  [Topping.PEPPERONI]: {
    key: Topping.PEPPERONI,
    name: 'Pepperoni'
  },
  [Topping.ONIONS]: {
    key: Topping.ONIONS,
    name: 'Onions'
  },
  [Topping.OLIVES]: {
    key: Topping.OLIVES,
    name: 'Olives'
  },
  [Topping.EGG]: {
    key: Topping.EGG,
    name: 'Egg'
  },
  [Topping.ZUCCHINI]: {
    key: Topping.ZUCCHINI,
    name: 'Zucchini'
  },
  [Topping.CHERRY_TOMATOES]: {
    key: Topping.CHERRY_TOMATOES,
    name: 'Cherry tomatoes'
  }
}
