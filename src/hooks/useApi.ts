import useSWR from "swr";
import { Market } from "../types/markets";

type ApiEntities = {
  markets: Market[];
};

const API_ENTITIES: Array<keyof ApiEntities> = ["markets"];

export function useApi(entityName: keyof ApiEntities) {
  const { data, error } = useSWR<ApiEntities[typeof entityName], Error>(
    `/api/${entityName}`
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
