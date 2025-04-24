import supabase, { supabaseUrl } from "./supabase";

async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

async function createCabin(newCabin) {
  if (typeof newCabin.image !== "string") {
    const imageName = `${Math.random()}-${newCabin.image[0].name}`.replaceAll(
      "/",
      "",
    );

    const { data: imageData, error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image[0]);

    if (storageError) {
      console.error(storageError);
      throw new Error(
        "Cabin image could not be uploaded and the cabin was not created",
      );
    }
    newCabin.image = `${supabaseUrl}/storage/v1/object/public/${imageData.fullPath}`;
  }

  const { error } = await supabase.from("cabins").insert([newCabin]);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }
}

async function editCabin(cabinEdited, id, oldURL) {
  if (typeof cabinEdited.image !== "string") {
    const oldImageName = oldURL.replace(
      `${supabaseUrl}/storage/v1/object/public/cabin-images/`,
      "",
    );
    const newImageName =
      `${Math.random()}-${cabinEdited.image[0].name}`.replaceAll("/", "");

    const { error: removeError } = await supabase.storage
      .from("cabin-images")
      .remove(oldImageName);
    const { error: uploadError, data: imageData } = await supabase.storage
      .from("cabin-images")
      .upload(newImageName, cabinEdited.image[0]);

    const storageError = removeError || uploadError;

    if (storageError) {
      console.error(storageError);
      throw new Error(
        "Cabin image could not be uploaded and the cabin was not edited",
      );
    }
    cabinEdited.image = `${supabaseUrl}/storage/v1/object/public/${imageData.fullPath}`;
  }

  const { error } = await supabase
    .from("cabins")
    .update(cabinEdited)
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be edited");
  }
}

async function deleteCabin(cabin) {
  const imageName = cabin.image.replace(
    `${supabaseUrl}/storage/v1/object/public/cabin-images/`,
    "",
  );

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
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
