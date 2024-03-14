import NoDataBlock from "@/components/features/cart/NoDataCart/NoDataBlock";
import { IconQuote } from "@tabler/icons-react";
import React from "react";

export const EmptyReviewList = () => {
  return (
    <>
      <NoDataBlock
        title={"Отзывов на этот товар нет"}
        description={
          "Будьте первыми кто оставит  отзыв на этот товар, и он появится здесь"
        }
        hideButton
        icon={<IconQuote size="85px" />}
      />
    </>
  );
};
