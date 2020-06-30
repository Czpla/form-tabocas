let address = require('address')

console.log(address.ip())
console.log(address.ipv6())

address.mac(function (err, address) {
    console.log(address)
})

address.ip(function (err, address) {
    console.log(address)
})