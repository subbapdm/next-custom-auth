// import jwt from "jsonwebtoken";

// **** The Edge runtime does not support the jsonwebtoken package. When your middleware ( in middleware.js we verify token to check validity ) tries to call jwt.verify() from jsonwebtoken, it fails before it even gets to validate your token. This caused error or returns null and token is not verified so i have switched to a middleware-compatible JWT library (jose) and commented this section
// ****

// export function generateToken(user){
//     return jwt.sign(
//         { id: user._id, email: user.email, role: user.role },
//         process.env.JWT_SECRET,
//         { expiresIn: '1h' }
//     )
// }

// export function verifyToken(token){
//     try {
//          return jwt.verify(token, process.env.JWT_SECRET);
//     } catch (error) {
//         console.log("Failed to verify token");
//     }
// }

import { SignJWT, jwtVerify } from "jose";

const secretKey = process.env.JWT_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function generateToken(user){
    return await new SignJWT({
        id: user._id,
        email: user.email,
        role: user.role
    })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(encodedKey)
}

export async function verifyToken(token){
    try {
        const { payload } = await jwtVerify(token, encodedKey, {
            algorithms: ["HS256"]
        });
        return payload;
    } catch (error) {
        console.log("Failed to verify token");
        return null;
    }
}