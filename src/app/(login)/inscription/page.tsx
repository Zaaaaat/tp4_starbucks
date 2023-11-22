"use client";

import {z} from 'zod';
import {useForm, zodResolver} from '@mantine/form';
import {NumberInput, TextInput, Button, Box, Group, PasswordInput} from '@mantine/core';
import {User} from "@phosphor-icons/react";
import Link from "next/link";

const schema = z.object({
    name: z.string().min(2, {message: 'Name should have at least 2 letters'}),
    email: z.string().email({message: 'Invalid email'}),
    password: z.string().min(6, {message: 'Password should have at least 6 letters'}),
});

export default function Inscription() {

    const form = useForm({
        validate: zodResolver(schema),
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
    });

    return (

        <Box maw={340} mx="auto" className="shadow-lg p-7 my-2">
            INSCRIPTION

            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput
                    withAsterisk
                    label="Name"
                    placeholder="John Doe"
                    description="Le nom qui sera utilisé pour vos commandes"
                    mt="sm"
                    {...form.getInputProps('name')}
                />
                <TextInput
                    withAsterisk
                    label="Email"
                    placeholder="example@mail.com"
                    {...form.getInputProps('email')}
                />
                <PasswordInput
                    withAsterisk
                    label="Mot de passe"
                    placeholder=""
                    {...form.getInputProps('password')}
                />

                <Button type="submit" className="bg-green-600 flex justify-center my-5 hover:bg-green-700" fullWith="true">
                    S'inscrire
                </Button>

                <Link href="/connexion" className="text-green-700 flex justify-center">
                        Déjà un compte? Se connecter
                </Link>
            </form>
        </Box>
    );
}