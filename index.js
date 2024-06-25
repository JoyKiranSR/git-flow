const express = require('express');
const bodyParser = require('body-parser');
const { signup } = require('./auth/signup');
const { login } = require('./auth/login');
const { purchaseSubscription } = require('./subscription/purchase');

const app = express();
app.use(bodyParser.json());
const router = express.Router();

router
    .route("/health_status")
    .get((req, res) => res.status(200).send('running'));

router
    .post("/auth/signup", (req, res) => res.status(200).json(signup(req.body)))
    .post("/auth/login", (req, res) => {
        try {
            const loggedUser = login(req.body.email, req.body.password);
            return res.status(200).json(loggedUser);
        } catch (err) {
            return res.status(404).json(err.message);
        }
    });

router
    .route("/users/:userId/subscriptions/:subsId")
    .patch((req, res) => {
        try {
            const subsId = req.params.subsId;
            purchaseSubscription(parseInt(subsId), req.body.amount);
            return res.status(200).json({purchased: true, subscriptionId: subsId})
        } catch (err) {
            return res.status(404).json(err.message);
        }
    });

app.use("/api/v1", router);

app.listen(4040, 'localhost', () => console.log('Server started running on PORT 4040'));