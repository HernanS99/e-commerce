const User = require('../models/User')
const crypto = require('crypto')
const createUser = async(req,res) => {
    try{

        const user = await User.findOne({correo: req.body.correo})
        if(user)
        {
             throw new Error('Email en eso')
        }
        const salt = crypto.randomBytes(16).toString('hex')
        const hash = crypto.pbkdf2Sync(req.body.password,salt,10000,512,'sha512').toString('hex')
        
        const newUser = new User({...req.body,password: hash})
        await newUser.save()
        res.json({sucess:true, message: 'User created', id : newUser._id})
    }catch(err){
        res.json({sucess: false,message: err.message})
    }
}

const readUser = async (req,res) => {
    try{
        const users = await User.find()
        res.json({success : true,users})
    }catch (err) {
        res.json({success: false,message: err.message})
    }
}

const editUser = async(req,res) => {
    try{
        const {id} = req.params
        const result = await User.findByIdAndUpdate(id, req.body, {new : true})
        res.json({success: true})
    } catch (err){
        res.json({success:false, message: err.message})
    }
}

const deleteUser = async (req,res) => {
    try {
        const { id } = req.params
        const result = await User.findByIdAndDelete(id)
        res.json({success: true, response: id})
    } catch (err){
        res.json({success: false, response: err.message})
    }
}

const login = (req,res) => {

}

module.exports = { createUser , readUser , editUser , deleteUser, login}