"use client";

import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {Button, SectionContainer} from "tp-kit/components";
import Link from "next/link";

type props = {
    userData : any
}

export const Profil = function ({userData} : props) {

    const router = useRouter()
    const supabase = createClientComponentClient()

    const handleSignOut = async() => {
        await supabase.auth.signOut()
        router.refresh()
    }

    console.log(userData);

    return (
            <div className="flex">
                <div className="bg-white rounded-lg p-6 flex-auto w-4 mr-7">
                    <h1>MON COMPTE</h1>
                    <br/>
                    <p>Bonjour, {userData.userData.session.user.user_metadata.name}</p>
                    <br/>
                    <p className="font-bold">
                        Nom : {userData.userData.session.user.user_metadata.name}
                        <br/>
                        Email : {userData.userData.session.user.email}
                    </p>
                    <Button onClick={handleSignOut} variant="outline" fullWidth className="mt-10">Se déconnecter</Button>
                </div>
            </div>
    );
};
