import Button from "./Button";

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <div className="flex w-120 flex-col gap-5">
      <h3 className="mt-2 text-2xl font-semibold">Delete {resourceName}</h3>
      <p className="mb-2 text-gray-500">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div className="flex justify-end gap-5">
        <Button
          type="secondary"
          size="medium"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button
          type="danger"
          size="medium"
          disabled={disabled}
          onClick={onConfirm}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
