import * as z from 'zod';

export const userValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    id: z.string(),
    objectId: z.string(),
    username: z.string().min(3).max(30),
    name: z.string().min(3).max(30),
    bio: z.string().min(3).max(1000),
})