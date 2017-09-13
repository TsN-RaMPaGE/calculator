const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What operation would you like to perform? \n1) Add\n2) Subtract \n', (action) => {
  rl.question('Enter numbers separated by a space\n', (numberString) => {

    let numbers = numberString.split(' ');

    let answer = 0;
    switch(action) {
      case '1':
        answer = numbers.reduce((total, num) => {
          return total + parseInt(num);
        }, 0);
        break;
      case '2':
        answer = numbers.slice(1).reduce((total, num) => {
          return total - parseInt(num);
        }, parseInt(numbers[0]));
        break;
    }

    console.log('The answer is: ' + answer);

    rl.close();
  });
});