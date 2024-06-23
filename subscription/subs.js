const getSubscriptions = () => [{id: 1, name: "BASIC"}, {id: 2, name: "PREMIUM"}];

const selectSubscription = (subsId) => {
    const sub = getSubscriptions().filter(sub => sub.id === subsId)[0];
    if(!sub) throw new Error(`Subscription not found for given id ${ subsId }`);
    return sub;
};

module.exports = {
    getSubscriptions,
    selectSubscription
}