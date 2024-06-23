const { selectSubscription } = require("./subs")

module.exports.purchaseSubscription = (subsId, amount) => {
    try {
        const sub = selectSubscription(subsId);
        // call purchase api to purchase subscription
        console.log("Subscription amount %d", amount);
        console.log(`Subscription purchase successful\nSubscription: ${ sub.name }`);
    } catch (error) {
        console.log(error.message);
        throw new Error(`Failed to purchase subscription\nReason: ${ error.message }`);
    }
}