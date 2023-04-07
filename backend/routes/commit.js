const express =require('express')
const router = express.Router()
const comments = require('../models/commit')

router.get('/', async (req,res) => {
    const comment = await comments.find()
    res.json(comment)
   // res.json({ 'success' : true})
})

module.exports = router