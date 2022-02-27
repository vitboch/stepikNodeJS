const data = require('./users.json')
const { stringify: stringifyUser, capitalize } = require('./users')

data.forEach(user => {
    const formattedUserStr = stringifyUser(user)
    console.log(formattedUserStr)
})