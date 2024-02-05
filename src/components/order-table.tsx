"use client";

import    { Order } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FC, memo, useCallback } from "react";
import { OrderTableLayout } from "tp-kit/components";

type Props = {
  orders: Order[];
};

const OrderTable: FC<Props> = memo(function ({ orders }) {
  const router = useRouter();

  return <OrderTableLayout orders={orders} onRowClick={(order) => {router.push(`/mon-compte/commandes/${order.id}`)}} />;
});

OrderTable.displayName = "OrderTable";
export { OrderTable };
