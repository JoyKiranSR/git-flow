module.exports.signup = (userDetails) => {
    // Call API to save user details to DB
    console.log("Signup success!");
    return {
        name: userDetails?.name,
        email: userDetails?.email,
    }
}
