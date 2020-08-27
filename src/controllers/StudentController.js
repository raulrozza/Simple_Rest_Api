import Student from '../models/Student';
import Picture from '../models/Picture';

class StudentController {
  async store(req, res) {
    const { firstname, lastname, email, age, height } = req.body;

    try {
      await Student.create({ firstname, lastname, email, age, height });
      return res.status(201).send();
    } catch (error) {
      return res.status(400).json({
        message: 'Your request has errors.',
        errors: error.errors.map(e => e.message),
      });
    }
  }

  async index(_, res) {
    try {
      const students = await Student.findAll({
        attributes: ['id', 'firstname', 'lastname', 'email', 'age', 'height'],
        order: [
          ['id', 'DESC'],
          [Picture, 'id', 'DESC'],
        ],
        include: {
          model: Picture,
          attributes: ['filename', 'url'],
        },
      });
      return res.json(students);
    } catch (error) {
      console.log(error);
      return res.status(500).send();
    }
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const student = await Student.findByPk(id, {
        attributes: ['id', 'firstname', 'lastname', 'email', 'age', 'height'],
        include: {
          model: Picture,
          attributes: ['filename', 'url'],
        },
      });
      return res.json(student);
    } catch (error) {
      return res.status(500).send();
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { firstname, lastname, email, age, height } = req.body;

    try {
      if (!id) throw new Error();

      const student = await Student.findByPk(id);

      if (!student) throw new Error();

      const updateDoc = {};
      if (firstname) updateDoc.firstname = firstname;
      if (lastname) updateDoc.lastname = lastname;
      if (email) updateDoc.email = email;
      if (age) updateDoc.age = age;
      if (height) updateDoc.height = height;

      await student.update(updateDoc);

      return res.status(204).send();
    } catch (error) {
      return res.status(500).send();
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      if (!id) throw new Error();

      const student = await Student.findByPk(id);

      if (!student) throw new Error();

      await student.destroy();

      return res.status(204).send();
    } catch (error) {
      return res.status(500).send();
    }
  }
}

const studentController = new StudentController();

export default studentController;
