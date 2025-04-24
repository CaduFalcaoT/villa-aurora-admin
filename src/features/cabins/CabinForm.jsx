import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CabinForm({ onClose, cabinValue = {} }) {
  const { id: editId } = cabinValue;
  const isEditSession = Boolean(editId);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors, isDirty },
  } = useForm({ defaultValues: isEditSession ? cabinValue : {} });

  const { mutate: createCabin, isPending: isPendingCreate } = useCreateCabin();
  const { mutate: editCabin, isPending: isPendingEditing } = useEditCabin();

  const isPending = isPendingCreate || isPendingEditing;

  function onSubmit(data) {
    if (!isDirty) return onClose();
    isEditSession
      ? editCabin({ newCabinData: data, id: data.id, oldURL: cabinValue.image })
      : createCabin(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-6xl max-w-[80vw]">
      <div className="grid grid-cols-[16rem_1fr_1fr] items-center gap-[2.4rem] border-gray-300 py-[1.2rem] not-last:border-b">
        <label htmlFor="name" className="font-medium">
          Cabin name
        </label>
        <input
          id="name"
          className="w-full rounded-sm border border-gray-300 bg-white p-[0.4rem_0.6rem] shadow-sm disabled:bg-gray-200"
          {...register("name", { required: "This field is required" })}
          disabled={isPending}
        />
        {errors?.name?.message && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </div>

      <div className="grid grid-cols-[16rem_1fr_1fr] items-center gap-[2.4rem] border-gray-300 py-[1.2rem] not-last:border-b">
        <label htmlFor="maxCapacity" className="font-medium">
          Maximum capacity
        </label>
        <input
          className="w-full rounded-sm border border-gray-300 bg-white p-[0.4rem_0.6rem] shadow-sm disabled:bg-gray-200"
          id="maxCapacity"
          type="number"
          min={0}
          {...register("maxCapacity", { required: "This field is required" })}
          disabled={isPending}
        />
        {errors?.maxCapacity?.message && (
          <span className="text-red-500">{errors.maxCapacity.message}</span>
        )}
      </div>

      <div className="grid grid-cols-[16rem_1fr_1fr] items-center gap-[2.4rem] border-gray-300 py-[1.2rem] not-last:border-b">
        <label htmlFor="regularPrice" className="font-medium">
          Regular price
        </label>
        <input
          className="w-full rounded-sm border border-gray-300 bg-white p-[0.4rem_0.6rem] shadow-sm disabled:bg-gray-200"
          id="regularPrice"
          type="number"
          min={0}
          {...register("regularPrice", { required: "This field is required" })}
          disabled={isPending}
        />
        {errors?.regularPrice?.message && (
          <span className="text-red-500">{errors.regularPrice.message}</span>
        )}
      </div>

      <div className="grid grid-cols-[16rem_1fr_1fr] items-center gap-[2.4rem] border-gray-300 py-[1.2rem] not-last:border-b">
        <label htmlFor="discount" className="font-medium">
          Discount
        </label>
        <input
          className="w-full rounded-sm border border-gray-300 bg-white p-[0.4rem_0.6rem] shadow-sm disabled:bg-gray-200"
          id="discount"
          type="number"
          min={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
          defaultValue={0}
          disabled={isPending}
        />
        {errors?.discount?.message && (
          <span className="text-red-500">{errors.discount.message}</span>
        )}
      </div>

      <div className="grid grid-cols-[16rem_1fr_1fr] items-center gap-[2.4rem] border-gray-300 py-[1.2rem] not-last:border-b">
        <label htmlFor="description" className="font-medium">
          Description for website
        </label>
        <textarea
          className="h-[8rem] w-full rounded-sm border border-gray-300 bg-white p-[0.8rem_1.2rem] shadow-sm disabled:bg-gray-200"
          id="description"
          defaultValue=""
          {...register("description")}
          disabled={isPending}
        />
        {errors?.description?.message && (
          <span className="text-red-500">{errors.description.message}</span>
        )}
      </div>

      <div className="grid grid-cols-[16rem_1fr_1fr] items-center gap-[2.4rem] border-gray-300 py-[1.2rem] not-last:border-b">
        <label htmlFor="image" className="font-medium">
          Cabin photo
        </label>
        <span className="overflow-hidden">
          <input
            className="rounded-sm text-base transition-all duration-300 file:mr-[1.2rem] file:cursor-pointer file:rounded-sm file:border-none file:bg-indigo-600 file:p-[0.8rem_1.2rem] file:font-medium file:text-indigo-50 file:hover:bg-indigo-700 disabled:file:opacity-70"
            id="image"
            type="file"
            accept="image/*"
            {...register("image", {
              required: isEditSession ? false : "This field is required",
            })}
            disabled={isPending}
          />
        </span>
        {errors?.image?.message && (
          <span className="text-red-500">{errors.image.message}</span>
        )}
      </div>

      <div className="flex w-full justify-end gap-5 pt-[1.2rem]">
        {/* type is an HTML attribute! */}
        <Button
          type="alert"
          size="medium"
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          Cancel
        </Button>
        <Button type="primary" size="medium">
          {isEditSession ? "Edit cabin" : "Create new cabin"}
        </Button>
      </div>
    </form>
  );
}

export default CabinForm;
