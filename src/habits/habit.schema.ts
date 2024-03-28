import { z } from 'zod';

export const habitSchema = z.object({
    body: z.object({
        name: z.string(),
        points: z.number(),
        target: z.number(),
        mandatory: z.boolean(),
    }),
});
