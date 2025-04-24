import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useEditCabin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ newCabinData, id, oldURL }) =>
      editCabin(newCabinData, id, oldURL),
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });
}

export { useEditCabin };
