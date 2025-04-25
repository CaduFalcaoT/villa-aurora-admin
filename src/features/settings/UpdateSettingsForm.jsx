import { DotSpinner } from "ldrs/react";
import { useSettings } from "./useSettings";
import { useUpdateSettings } from "./useUpdateSettings";
import { useState } from "react";

const divClass =
  "grid grid-cols-[16rem_1fr_1fr] items-center gap-[2.4rem] border-gray-300 py-[1.2rem] not-last:border-b";
const inputClass =
  "w-full rounded-sm border border-gray-300 bg-white p-[0.4rem_0.6rem] shadow-sm disabled:bg-gray-200";
const labelClass = "font-medium";

function UpdateSettingsForm() {
  const { data: settings = {}, isLoading, isError } = useSettings();
  const {
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    breakfastPrice,
  } = settings;

  const { mutate: update, isPending: isUpdating } = useUpdateSettings();

  const [errors, setErrors] = useState(null);

  function handleUpdate(e, field) {
    const { value } = e.target;

    let errorsLength = Object.keys(errors).length;

    if (!value)
      return setErrors((errors) => ({
        ...errors,
        [field]: "This field is required",
      }));

    if (errors[field]) {
      const { [field]: _, ...newErrors } = errors;
      setErrors(newErrors);
      errorsLength = Object.keys(newErrors).length;
    }

    if (errors && errorsLength !== 0) return;
    update({ [field]: value });
  }

  if (isLoading)
    return (
      <div className="flex w-full grow items-center justify-center">
        <DotSpinner size="56" speed="0.9" color="#4f39f6" />
      </div>
    );

  if (isError)
    return (
      <p className="flex w-full grow items-center justify-center text-center text-lg text-red-400">
        Failed to fetch settings.
      </p>
    );

  return (
    <form className="rounded-sm border-2 border-gray-100 bg-white px-16 py-10">
      <div className={divClass}>
        <label className={labelClass} htmlFor="min-nights">
          Minimum nights/booking
        </label>
        <input
          min={0}
          disabled={isUpdating}
          defaultValue={minBookingLength}
          className={inputClass}
          type="number"
          id="min-nights"
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
        {errors?.minBookingLength && (
          <span className="text-red-500">{errors.minBookingLength}</span>
        )}
      </div>
      <div className={divClass}>
        <label className={labelClass} htmlFor="max-nights">
          Maximum nights/booking
        </label>
        <input
          min={0}
          disabled={isUpdating}
          defaultValue={maxBookingLength}
          className={inputClass}
          type="number"
          id="max-nights"
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
        />
        {errors?.maxBookingLength && (
          <span className="text-red-500">{errors.maxBookingLength}</span>
        )}
      </div>
      <div className={divClass}>
        <label className={labelClass} htmlFor="max-guests">
          Maximum guests/booking
        </label>
        <input
          min={0}
          disabled={isUpdating}
          defaultValue={maxGuestsPerBooking}
          className={inputClass}
          type="number"
          id="max-guests"
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
        />
        {errors?.maxGuestsPerBooking && (
          <span className="text-red-500">{errors.maxGuestsPerBooking}</span>
        )}
      </div>
      <div className={divClass}>
        <label className={labelClass} htmlFor="breakfast-price">
          Breakfast price
        </label>
        <input
          min={0}
          disabled={isUpdating}
          defaultValue={breakfastPrice}
          className={inputClass}
          type="number"
          id="breakfast-price"
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
        {errors?.breakfastPrice && (
          <span className="text-red-500">{errors.breakfastPrice}</span>
        )}
      </div>
    </form>
  );
}

export default UpdateSettingsForm;
