import {ReactNode, useEffect, useState} from "react";
import {Button, SectionContainer} from "tp-kit/components";
import prisma from "../../utils/prisma";
import {OrderTable} from "../../components/order-table";
import {getUser} from "../../utils/supabase";
import metadata from "next/dist/server/typescript/rules/metadata";
import {Profil} from "../../components/profil";

export default async function Layout({children}: { children: ReactNode }) {
    const orders = await prisma.order.findMany();

    return (
        <>
            {/* Orders list */}
            <SectionContainer wrapperClassName="py-24 min-h-[80vh]">

                <div className="flex">
                    <div className="bg-white rounded-lg p-6 shadow-lg flex-auto w-10 mr-10">
                        <Profil/>

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
