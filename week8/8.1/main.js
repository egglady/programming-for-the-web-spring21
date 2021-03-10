const va = new Vue ({
  el: '#alpacaForm',
  data: {
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    states: 'MN',
    availableStates: [
      { value: 'MN', name: 'Minnesota' },
      { value: 'IL', name: 'Illinois' }
    ],
    selectedColors: [],
    colors: [
      { name: 'Lavender', value: 'lavender' },
      { name: 'Hot pink', value: 'hotpink' },
      { name: 'Turquoise', value: 'turquoise' },
      { name: 'Dove grey', value: 'dovegrey' },
      { name: 'Dodger blue', value: 'dodgerblue' },
      { name: 'Egg Yolk Yellow', value: 'eggyellow' }
    ],
    status: ''
  }
});

// 