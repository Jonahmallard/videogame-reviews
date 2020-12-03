module.exports = function isLoggedIn(req, res, next) {
    // if logged in call next
    if (req.isAuthenticated() ) return next();
    // redirect to login if the user is not already logged in
    res.redirect('/auth/google');
}