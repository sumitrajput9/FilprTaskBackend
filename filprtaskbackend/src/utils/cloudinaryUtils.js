exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
    const options = { folder };
    if (height) {
      options.height = height;
    }
    if (quality) {
      options.quality = quality;
    }
    options.resource_type = 'auto'; // Automatically choose resource type (image, video, etc.)
  
    console.log(options, "OPTIONS");
  
    return await cloudinary.uploader.upload(file.tempFilePath, options);
  };
  