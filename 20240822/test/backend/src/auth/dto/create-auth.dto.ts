import { z } from 'zod';
export const UserDTO = z.object({
    userID: z.string(),
    userPW: z.string(),
    name: z.string().min(2).max(5)
})