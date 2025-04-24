import supabase from "./supabase";

async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    "",
  );
  const { data: imageData, error: storageError } = await supabase.storage
    .from("cabins-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created",
    );
  }

  const { error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imageData.fullPath }]);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }
}

async function editCabin(cabin, id) {
  let newCabin = cabin;
  if (cabin.replaceImage) {
    let { replaceImage, ...newCabin } = newCabin;
    const imageName = newCabin.image.replace(
      "https://dxbnayqyrrtdgtdiprjm.supabase.co/storage/v1/object/public/cabin-images//",
      "",
    );
    const { data: imageData, error: storageError } = await supabase.storage
      .from("cabins-images")
      .upload(imageName, replaceImage);

    if (storageError) {
      console.error(storageError);
      throw new Error(
        "Cabin image could not be uploaded and the cabin was not edited",
      );
    }
    newCabin = { ...newCabin, image: imageData.fullPath };
  }

  const { error } = await supabase.from("cabins").update(newCabin).eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be edited");
  }
}

async function deleteCabin(cabin) {
  const imageName = cabin.image.replace(
    "https://dxbnayqyrrtdgtdiprjm.supabase.co/storage/v1/object/public/cabin-images//",
    "",
  );
  const { error: storageError } = await supabase.storage
    .from("cabins-images")
    .remove([imageName]);

  if (storageError) {
    console.error(storageError);
    throw new Error(
      "Cabin image could not be deleted and the cabin was not deleted",
    );
  }

  const { error } = await supabase.from("cabins").delete().eq("id", cabin.id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return;
}

export { getCabins, deleteCabin, createCabin, editCabin };
