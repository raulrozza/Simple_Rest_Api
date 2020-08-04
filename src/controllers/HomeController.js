import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      firstname: 'Raul',
      lastname: 'Rosá',
      email: 'raul.hmetal@gmail.com',
      age: 25,
      height: 1.6,
    });
    res.json(newStudent);
  }
}

const homeController = new HomeController();

export default homeController;
