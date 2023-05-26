// For configuring of flash messages.
// Here we have provide, the what should be printed when there is success, and error
module.exports.setFlash = function(req, res, next){
    res.locals.flash = {
        'success': req.flash('success'),
        'error': req.flash('error')
    }

    next();
}