import {ReactNode} from "react";
import {Button, SectionContainer} from "tp-kit/components";
import prisma from "../../utils/prisma";
import {OrderTable} from "../../components/order-table";
import {getUser} from "../../utils/supabase";

export default async function Layout({children}: { children: ReactNode }) {
    const orders = await prisma.order.findMany();

    return (
        <>
            {/* Orders list */}
            <SectionContainer wrapperClassName="py-24 min-h-[80vh]">

                <div className="flex">
                    <div className="bg-white rounded-lg p-6 shadow-lg flex-auto w-10 mr-10">
                        <h1>MON COMPTE</h1>
                        <br/>
                        <h2>Bonjour, {getUser.name}</h2>
                        <br/>
                        <h2>Nom : {getUser.name}</h2>
                        <h2>E-mail : {}</h2>
                        <br/>

                        <Button type="submit" className="my-5 items-center h-12" fullWidth="true" variant="outline">
                            Se déconnecter
                        </Button>

                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-lg flex-auto w-90">
                        <OrderTable orders={orders}/>
                    </div>
                </div>

            </SectionContainer>

            {/* Children */}
            {children}
        </>
    );
}
