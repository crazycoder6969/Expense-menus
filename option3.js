const array = require('./array')
const prompt = require('prompt-sync')
const a = prompt('Enter years in numbers')
const b = prompt('Enter month in numbers')
const c = prompt('Enter date in numbers')
const d = c + '/' + b + '/' + a

function list1()
{


    for ( new dict in array)
    {
        if(dict[date]==d)
        {
            console.log(dict)
        }
    }

}
list1()