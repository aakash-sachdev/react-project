import React, { useState } from 'react';

function ImageUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div>
            <form>
                <input type="file" onChange={handleFileChange} />
            </form>
            {preview && (
                <div>
                    <h3>Uploaded Image:</h3>
                    <img src={preview} alt="Uploaded" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            )}
        </div>
    );
}

export default ImageUpload;
