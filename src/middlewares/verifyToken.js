import jwt from "jsonwebtoken";
import { KEYSECRETTOKEN } from "../config.js";

export const authAdmin = (req, res) => {
  
  let token = req.headers["authorization"]

  if (!token) {
    return res.status(401).send({ message: "No token provided!" });
  }

  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length).trimLeft();
  }

  jwt.verify(token, KEYSECRETTOKEN , (err, decoded) => {
    if (err) {
      if(err.expiredAt){
        return res.status(401).send({error: true, msg: "Token expirado" })
      } else {
        return res.status(401).send({error: true, msg: "No estas autorizado" })
      }
    }

    const username = decoded.user
    return res.json({error: false, msg: {token, username} })
  });
}
