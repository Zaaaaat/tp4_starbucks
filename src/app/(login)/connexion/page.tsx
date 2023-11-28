"use client";

import {z} from 'zod';
import {useForm, zodResolver} from '@mantine/form';
import {NumberInput, TextInput, Button, Box, Group, PasswordInput} from '@mantine/core';
import {User} from "@phosphor-icons/react";
import {SectionContainer, NoticeMessage} from "tp-kit/components";
import Link from "next/link";

const schema = z.object({
    email: z.string().email({message: 'Invalid email'}),
    password: z.string().min(6, {message: 'Password should have at least 6 letters'}),
});

export default function Connexion() {

    const form = useForm({
        validate: zodResolver(schema),
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
    });

    return (

        <SectionContainer wrapperClassName="max-w-5xl">
        <Box maw={340} mx="auto"  className="shadow-lg p-7 my-2">

            <NoticeMessage
                message="Votre inscription a bien été prise en compte. Validez votre adresse mail pour vous connecter"
                onDismiss={function noRefCheck(){}}
                type="success"
            />

            <NoticeMessage
                message="Cette adresse n'est pas disponible !"
                onDismiss={function noRefCheck(){}}
                type="error"
            />

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

                <Button type="submit" className="bg-green-600 flex justify-center my-5 hover:bg-green-700" fullWidth="true">
                    S'inscrire
                </Button>

                <Link href="/inscription" className="text-green-700 flex justify-center" fullWidth="true">
                    Créer un compte
                </Link>

            </form>
        </Box>
        </SectionContainer>
    );
}