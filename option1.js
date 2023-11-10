
const array = require('./array')
const prompt = require('prompt-sync')
const am = require('./app')
function addexpense()
{
    const a= prompt('Enter amount')
    const b= prompt('Enter category')
    const q = prompt('Enter years in numbers')
    const w = prompt('Enter month in numbers')
    const e = prompt('Enter date in numbers')
    const c = q + '/' + w + '/' + e
    const d = prompt('Enter description')
    if (amount!=0)
    {
        const amtoday=0
        for(const dict of array)
        {
            if(dict[date]==c)
            {
                amtoday  = amtoday + dict[amount]
            }
            if( amtoday > am.amount)
            {
                array.pop()
                console.log('Expense has exceeded daily limit')
            }



        }

    }
    array.push({name:a,category:b,date:c,description:d})

}
addexpense()

