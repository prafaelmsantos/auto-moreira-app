import { z } from "zod"

export const ClientMessageSchema = z.object({
    name: z.string().min(1, 'O nome completo é obrigatório!'),
    email: z.string().min(1, 'O email é obrigatório!'),
    phoneNumber: z.coerce
        .number()
        .int('O numero de telemóvel/telefone é invalido!')
        .min(200000000, 'O numero de telemóvel/telefone é invalido!')
        .max(999999999, 'O numero de telemóvel/telefone é invalido!'),
    message: z.string().min(1, 'A mensagem é obrigatória!'),
    dateTime: z.date().nullable().default(new Date()),
    id: z.number().nullable().default(0),
    
});

export type IClientMessageSchema = z.infer<typeof ClientMessageSchema>;