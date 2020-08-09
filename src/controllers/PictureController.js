import multer from 'multer';
import upload from '../config/upload';
import Picture from '../models/Picture';

const fileUpload = multer(upload).single('file');

class PictureController {
  store(req, res) {
    return fileUpload(req, res, async error => {
      try {
        if (error) throw new multer.MulterError();

        const { originalname, filename } = req.file;
        const { student_id } = req.body;

        if (!student_id) throw new Error();

        await Picture.create({
          originalname,
          filename,
          student_id,
        });

        return res.status(201).send();
      } catch (error) {
        console.log(error);
        return res.status(400).json({
          message: 'Your request has errors.',
        });
      }
    });
  }
}

const pictureController = new PictureController();

export default pictureController;
