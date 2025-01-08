import { Request, Response } from "express";

export const getHotelInfo = (req: Request, res: Response) => {
    res.json({
        hotelName: `Danipoav's Hotel`,
        endpoints: [
            { method: "GET", path: '/api/protected', header: 'Authorization' },
            { method: 'POST', path: '/api/auth/login', body: 'username,password' }
        ]
    })
}