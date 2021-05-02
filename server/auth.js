// authentication service
import jwt from 'jsonwebtoken';

export function authenticateJWT(token)
{
    return jwt.verify(token, process.env.TOKEN_SECRET, (err, _) => {
        if(err)
        {
            return false;
        }
        else
        {
            return true;
        }
    });
}
