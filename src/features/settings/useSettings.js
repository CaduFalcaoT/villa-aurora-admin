import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

function useSettings() {
  return useQuery({ queryKey: ["settings"], queryFn: getSettings });
}

export { useSettings };
