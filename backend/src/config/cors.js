module.exports = function(req, res, next){
    res.header('Access-Control-Allow_Origin', '*')
    res.header('Access-Control-Allow_Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow_Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()    
}