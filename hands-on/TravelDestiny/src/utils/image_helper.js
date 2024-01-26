function extractImageExtension(image_url) {
    const urlWithoutParams = image_url.split("?")[0];
    const urlImageParts = urlWithoutParams.split(".");
    const extension = urlImageParts[urlImageParts.length - 1];
    return extension;
}

export { extractImageExtension };
