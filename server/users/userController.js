import {Router} from "express";
import * as userBL from "./userUtils";
import jwt from "jsonwebtoken";
import { authenticateJWT } from "../auth";
const router = Router();

router.route('/').get(async (req, res) => {
    const users = await userBL.getAll();
    return res.json(users);
});
router.route('/login').post(async (req, res) => {
    const { username, password} = req.body;
    try {
        // find user by username and password
        const user = await userBL.isAdmin(username, password);
        if (user) {
            // Generate an access token
            const  accessToken = jwt.sign({id: user[0]._id}, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
            return res.json({accessToken, name: user[0].name});
        }
    } catch {
        res.status(404);
        res.send({ error: "Username or password incorrect!" })
    }
});
router.route('/auth').post((req, res) => {
    const token = req.body.accessToken;
    const isAuth = authenticateJWT(token);
    if(isAuth)
    {
        return res.status(200).send({'auth': true})
    } else {
        return res.status(401).send({'auth': false})
    }

})



export default router;