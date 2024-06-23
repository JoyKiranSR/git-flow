const getSubscriptions = () => [{ id: 1, name: "BASIC", amount: 100 }, { id: 2, name: "PREMIUM", amount: 250 }];

const selectSubscription = (subsId) => {
    const sub = getSubscriptions().filter(sub => sub.id === subsId)[0];
    if(!sub) throw new Error(`Subscription not found for given id ${ subsId }`);
    return sub;
};

module.exports = {
    selectSubscription
}
