const sha1 = async (file: File): Promise<string> => {
  const crypto = window.crypto;

  const buffer = await file.arrayBuffer();
  const itemhash = crypto.subtle.digest('SHA-1', buffer).then(hash => {
    // the hash is returned as an ArrayBuffer, so we need to convert it to a hex string
    return Array.prototype.map.call(new Uint8Array(hash), x => ('00' + x.toString(16)).slice(-2)).join('');
  });
  console.log(itemhash);

  return itemhash;
}

export default sha1;