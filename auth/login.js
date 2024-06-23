module.exports.login = (email, pass) => {
    // Call login api to validate user
    if(email === "user@gmail.com"){
        if(pass == "1234") {
            console.log("Login Success!");
            return { id: 1, email };
        } else throw new Error(`Invalid user credentials!`);
    } else throw new Error(`User not found for given email ${ email }`);
}
