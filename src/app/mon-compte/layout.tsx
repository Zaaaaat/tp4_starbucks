import {ReactNode} from "react";
import {Button, SectionContainer} from "tp-kit/components";
import prisma from "../../utils/prisma";
import {OrderTable} from "../../components/order-table";
import {getUser} from "../../utils/supabase";
import Link from "next/link";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {Profil} from "../../components/profil";
import NotFoundPage from "../not-found";

export default async function Layout({children}: { children: ReactNode }) {
    const supabase = createServerComponentClient({cookies});
    const userData = await getUser(supabase);
    if (userData.session === null) return NotFoundPage()
    const orders = await prisma.order.findMany({
        where: {
            userId: userData.session.user.id
        }
    });

    console.log(userData);

    if (!userData.session) {
       redirect('/connexion')
    }



    return (
        <>
            {/* Orders list */}
            <SectionContainer wrapperClassName="py-24 min-h-[80vh]">
                <div className="flex">
                    <div className="bg-white rounded-lg p-6 shadow-lg flex-auto w-4 mr-7">
                        <Profil userData={{userData}}/>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-lg flex-auto w-96">
                        <OrderTable orders={orders}/>
                    </div>
                </div>
            </SectionContainer>

            {/* Children */}
            {children}
        </>
    );
}