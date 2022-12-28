const fileToUrl = async (file: File): Promise<string> => {
  const buffer = await file.arrayBuffer();
  const blob = new Blob([buffer], {
    type: file.type
  })
  const url = URL.createObjectURL(blob);
  return url;
}

export default fileToUrl;
