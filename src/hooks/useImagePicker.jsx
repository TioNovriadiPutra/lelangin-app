import { useController } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";

const useImagePicker = (inputData, control) => {
  const { field } = useController({
    name: inputData.name,
    control,
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      field.onChange({
        uri: result.assets[0].uri,
        name: result.assets[0].fileName,
        type: result.assets[0].mimeType,
      });
    }
  };

  return {
    field,
    pickImage,
  };
};

export default useImagePicker;
