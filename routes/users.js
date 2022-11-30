const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
    res.send('Users Here');
});

router.get('/new', (req, res) => {
    res.render('users/new', {firstname: "Enter Name Here."})
});

router.post('/', (req, res) => {
    const isValid = true;
    if (isValid) {
        users.push({
            firstname: req.body.firstname
        });
        res.redirect(`/users/${users.length - 1}`);
    } else {
        console.log('Error');
        res.render('users/new', {firstname: req.body.firstname});
    }

    console.log(req.body.firstname);
    res.send('Hi.');
});

router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get User with ID ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Update User with ID ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`Delete User with ID ${req.params.id}`);
    });

const users =
    [
        {name: "Danny"},
        {name: "Kyle"},
        {name: "Shelby"},
        {name: "Markia"},
        {name: "Brandon"}
    ];

router.param('id', (req, res, next, id) => {
    req.user = users[id];
    next();
});

module.exports = router;
