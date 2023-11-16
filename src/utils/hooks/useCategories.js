import { useQuery } from "react-query";
import { categoryApi } from "@/api/category";

export function useCategories(params) {
  return useQuery(["category"], () => categoryApi.getAll(), {
    keepPreviousData: false,
    refetchOnWindowFocus: true,
  });
}