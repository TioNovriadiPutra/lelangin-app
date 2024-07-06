export const generateBlob = async (uri) => {
  const response = await fetch(uri);

  const blob = response.blob();

  return blob;
};
