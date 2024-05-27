import { useQuery, UseQueryResult } from "react-query";
import { useRouter } from "next/router";
import { productApi } from "@/api";

export function checkProperties(obj) {
  const transformObjectNames = [
    "categories",
    "materials",
    "sizes",
    "attributes",
    "colors",
  ];

  for (const key in obj) {
    if (
      obj.hasOwnProperty(key) &&
      typeof obj[key] === "string" &&
      transformObjectNames.includes(key.toLowerCase())
    ) {
      obj[key] = [obj[key]];
    }
  }

  return obj;
}

export function useProducts() {
  const router = useRouter();
  const { query } = router;

  return useQuery(
    ["items", router.asPath],
    () => productApi.getProductsQuery(checkProperties(query)),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
    },
  );
}

export function useGuestCartProducts({ productVendorCodeIds }) {
  return useQuery(
    ["guestCart"],
    () => productApi.getProductsFromGuest({ productVendorCodeIds }),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  );
}
