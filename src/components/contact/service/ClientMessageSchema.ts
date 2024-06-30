import { z } from "zod"

export const ClientMessageSchema = z.object({
    name: z.string().trim().min(1, 'O nome é obrigatório!'),
    email: z.string().trim().min(1, 'O email é obrigatório!').email('O email é inválido!'),
    phoneNumber: z.coerce
        .number()
        .int('O contacto é invalido!')
        .min(200000000, 'O contacto é invalido!')
        .max(999999999, 'O nucontacto é invalido!'),
    message: z.string().trim().min(1, 'A mensagem é obrigatória!'),
    dateTime: z.date().nullable().default(new Date()),
    id: z.number().nullable().default(0),
    
});

export type IClientMessageSchema = z.infer<typeof ClientMessageSchema>;