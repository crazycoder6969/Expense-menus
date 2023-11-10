const prompt = require('prompt-sync')
const array = require('./array')
console.log('MENU FOR EXPENSES')
console.log('Press 1 to add an expense field')
console.log('Press 2 to list expenses')
console.log('Press 3 to list expenses at given date')
console.log('Press 4 to enter daily limit')
console.log('Press 5 to delete expense')
console.log('Press 6 to exit')
const amount =0
const n=1
module.export(amount)

while (n==1)
{
    const opt = prompt('Enter option')
    if (opt==6)
    {
        n=0
    }
    ifelse (opt==1)
    {
        require('./option1')

    }
    ifelse (opt==2)
    {
        require('./option2')


    }
    ifelse (opt==3)
    {
        require('./option3')

    }
    ifelse (opt==4)
    {
        amount = prompt('Enter daily limit')
    }
    ifelse (opt==5)
    {
        array.pop()
    }



}
