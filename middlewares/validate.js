const validate = (req, res, next) => {
    if(req.body.name === '' || req.body.password === ''){
        res.status(401).send('Please enter a value')
    }else {
        next()
    }
}

module.exports = validate