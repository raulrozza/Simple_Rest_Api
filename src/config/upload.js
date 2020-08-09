import multer from 'multer';
import { resolve, extname } from 'path';

const randomString = () => String(Math.floor(Math.random() * 10000 + 10000));

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg')
      return cb(new multer.MulterError('File must be either png or jpg.'));

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      return cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      return cb(
        null,
        `${Date.now()}_${randomString()}${extname(file.originalname)}`,
      );
    },
  }),
};
