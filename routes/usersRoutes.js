const router = require('express').Router();
const { getAllUsers, getUserById, /*searchInUsers,*/ createNewUser, deleteUser, updateUser } = require('../controllers/usersControllers');
const { mustLogin, allowedRoles } = require('../controllers/authControllers');

//  base path = "/api/users"

router.get('/', mustLogin, allowedRoles(['admin']), getAllUsers)
router.get('/:id', mustLogin, getUserById)
//router.post('/search', searchInUsers)
// router.post('/', createNewUser)
router.delete('/:id', mustLogin, allowedRoles(['admin']), deleteUser)
router.patch('/:id', mustLogin, updateUser)

module.exports = router;