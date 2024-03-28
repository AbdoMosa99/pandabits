import { ZodError, z } from "zod";
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from "http-status-codes";


export function validate(schema: z.ZodObject<any, any>) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req);
            next();
        }
        catch (err) {
            if (err instanceof ZodError) {
                res
                    .status(StatusCodes.BAD_REQUEST)
                    .json({ errors: err.errors });
            } else {
                res
                    .status(StatusCodes.INTERNAL_SERVER_ERROR)
                    .json({ errors: 'Internal Server Error' });
            }
        }
    };
};
