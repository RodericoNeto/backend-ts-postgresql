import {Router} from 'express'
const router = Router()

import {getUsers, getUserById, createUser, updateUser, deleteUser} from '../controllers/index.controllers'

// router.get('/test', (req, res)=>{res.send('Hello World')})

router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

export default router;