// import formidable from "formidable";
import fs from "fs";
import path from "path";

export default defineEventHandler(async (event) => {
    let imageUrl = "";
    let oldPath = "";
    let newPath = "";

    // const form = formidable({ multiples: true });
    const form = {};
    const data = await new Promise((resolve, reject) => {
        form.parse(event.node.req, (err, fields, files) => {
            if (err) {
                reject(err);
            }
            console.log('files: ', files)
            if (!files.image) {
                resolve({
                    status: "error",
                    message: "Please upload a photo with name image in the form",
                });
            }
            if (files.image[0].mimetype.startsWith("image/")) {
                let imageName =
                    Date.now() +
                    Math.round(Math.random() * 100000) +
                    files.image[0].originalFilename;
                oldPath = files.image[0].filepath;
                newPath = `${path.join("public", "uploads", imageName)}`;
                imageUrl = "/uploads/" + imageName;
                fs.copyFileSync(oldPath, newPath);
                resolve({
                    success: 1,
                    file: {
                        url: imageUrl,
                    }
                });
            } else {
                resolve({
                    success: "false",
                    message: "Please upload nothing but images.",
                });
            }
        });
    });
    return data;
});

