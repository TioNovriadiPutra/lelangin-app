import { useFieldArray } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";

const useGalleryPicker = (inputData, control) => {
  const { fields, append, remove } = useFieldArray({
    name: inputData.name,
    control,
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: true,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      for (const asset of result.assets) {
        append({
          uri: asset.uri,
          name: asset.fileName,
          type: asset.mimeType,
        });
      }
    }
  };

  const removeImage = async (index) => {
    remove(index);
  };

  return {
    fields,
    pickImage,
    removeImage,
  };
};

export default useGalleryPicker;
