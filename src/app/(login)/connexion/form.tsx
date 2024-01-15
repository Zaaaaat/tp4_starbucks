"use client";

import {z} from 'zod';
import {useForm, zodResolver} from '@mantine/form';
import {NumberInput, TextInput, Box, Group, PasswordInput} from '@mantine/core';
import {Button} from "tp-kit/components";
import {SectionContainer, NoticeMessage} from "tp-kit/components";
import Link from "next/link";
import {useState, useEffect} from "react";
import {useZodI18n} from "tp-kit/components/providers";
import {redirect, useRouter} from "next/navigation";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";

const schema = z.object({
    email: z.string().email().nonempty(),
    password: z.string().min(6),
});


type FormValues = z.infer<typeof schema>;

export const Form = function() {

    const router = useRouter()
    const supabase = createClientComponentClient()

    useZodI18n(z);

    const form = useForm<FormValues>({
        validate: zodResolver(schema),
        initialValues: {
            email: '',
            password: '',
        },
    });

    const handleSignIn = async (values :  {email: string, password:string}) => {

        const signin = await supabase.auth.signInWithPassword({
            email: values.email,
            password: values.password,
        });

        if (signin.error) {
            console.log(signin.error);
        } else{
            router.push("/mon-compte")
            router.refresh();
        }
    }

    return (
        <SectionContainer wrapperClassName="max-w-5xl" >
            <Box maw={340} mx="auto" className="shadow-lg p-7 my-2 bg-white rounded">

                <h1 className="mb-3">CONNEXION</h1>

                <form onSubmit={form.onSubmit(values => handleSignIn(values))}>

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

                    <Button type="submit" className="bg-green-600 flex justify-center my-5 hover:bg-green-700" fullWidth>
                        Se connecter
                    </Button>

                    <Link href="/inscription" className="text-green-700 flex justify-center">
                        Créer un compte
                    </Link>
                </form>
            </Box>
        </SectionContainer>
    );
}