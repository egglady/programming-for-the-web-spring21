var cal = new Vue ({
  el: '#calcApp',
  data: {
    firstNum: null,
    secondNum: null,
    operation: 'add',
    total: null
  },
  methods: {
    calculate: (num1, num2) => {
      // switch is similar to an if statement but with specific strings/values to check against
      switch (cal.operation) {
        case 'add':
          cal.total = num1 + num2;
          // they will concatenate unless
          break;
        case 'subtract':
          cal.total = num1 - num2;
          break;
        case 'multiply':
          cal.total = num1 * num2;
          break;
        case 'divide':
          cal.total = num1 / num2;
          break;

        default:
          window.alert('unexpected');
          break;
      }
      cal.firstNum = cal.secondNum = null;
    }
  }
})