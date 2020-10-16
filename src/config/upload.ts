import Multer from 'multer';
import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploader'),
        filename: (request, file, cd) => {
            const fileName = `${Date.now()}-${file.originalname}`;

            cd(null,fileName);
        },
    })
};