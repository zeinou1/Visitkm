const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
const cloud_name = import.meta.env.VITE_CLOUD_NAME;

console.log('Cloud name:', cloud_name);
console.log('Upload preset:', upload_preset);
const uploadImageCloudinary = async (file) => {
    const uploadData = new FormData();

    uploadData.append("file", file);
    uploadData.append("upload_preset", upload_preset);
    uploadData.append("cloud_name", cloud_name);

    if (!cloud_name) {
        console.error('Cloud name non défini');
    }
    // fetch Cloudinary
    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        {
            method: "POST",
            body: uploadData,
        }
    );

    if (!response.ok) {
        throw new Error("Erreur lors de l'upload de l'image");
    }

    const data = await response.json();
    console.log(data)
    return data; // `data` contiendra des informations comme `secure_url` de l'image
};

export default uploadImageCloudinary;
