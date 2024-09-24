import express from 'express';
//import { callbackGoogle} from '../controllers/authentication.controller.js';
import authorization from '../middleware/authorization.js';
//import passport from 'passport';
import uploadCloudinary from '../middleware/uploads.js'
import {callbackGoogle, login, me, register} from '../controllers/authentication.controller.js'
import passport from 'passport';



const authenticationRouter = express.Router()

authenticationRouter.post('/register', uploadCloudinary.single('avatar'), register)// da aggiungere uploadCloudinary.single('avatar')
authenticationRouter.post('/login', login)
authenticationRouter.get('/me',authorization, me)





//authRoutes.get("/login-google", passport.authenticate("google", {scope:["profile", "email"]} )//ci direziona alla pag. di google
//)
//authRoutes.get(
   // "/callback-google",
    // passport.authenticate("google", {session:false}),
    // authController.callbackGoogle
    //)


authenticationRouter.get('/login-google', passport.authenticate('google', {scope:['profile','email']}))// qui chiamo un middlware di passport che ci ridireziona alla pagina di google
authenticationRouter.get('/api/callback-google',passport.authenticate('google', {session: false}), callbackGoogle)//per disattivare i cookies


export default authenticationRouter;