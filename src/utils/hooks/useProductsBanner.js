import { useQuery } from "react-query";

import { productApi } from "@/api";
import { checkProperties } from "@/utils/hooks/useProducts";

export function useProductsBanner(params) {
  const additionalParams = {
    limit: 8,
    offset: 0,
  };

  return useQuery(
    ["productBanner"],
    () =>
      productApi.getProductsQuery(
        checkProperties({ ...additionalParams, ...params }),
      ),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  );
}
