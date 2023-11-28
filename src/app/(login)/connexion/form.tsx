"use client";

import {z} from 'zod';
import {useForm, zodResolver} from '@mantine/form';
import {NumberInput, TextInput, Button, Box, Group, PasswordInput} from '@mantine/core';
import {SectionContainer, NoticeMessage} from "tp-kit/components";
import Link from "next/link";
import {useState, useEffect} from "react";
import {useZodI18n} from "tp-kit/components/providers";

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email().nonempty(),
    password: z.string().min(6),
});


type FormValues = z.infer<typeof schema>;

export const Form = function() {

    useZodI18n(z);

    const form = useForm<FormValues>({
        validate: zodResolver(schema),
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
    });

    return (
        <SectionContainer wrapperClassName="max-w-5xl" >
            <Box maw={340} mx="auto" className="shadow-lg p-7 my-2 bg-white rounded">

                <h1 className="mb-3">CONNEXION</h1>

                <form onSubmit={form.onSubmit((values) => console.log(values))}>

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

                    <Button type="submit" className="bg-green-600 flex justify-center my-5 hover:bg-green-700"
                            fullWidth="true">
                        S'inscrire
                    </Button>

                    <Link href="/inscription" className="text-green-700 flex justify-center">
                        Créer un compte
                    </Link>
                </form>
            </Box>
        </SectionContainer>
    );
}