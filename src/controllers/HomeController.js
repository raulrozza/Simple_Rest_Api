class HomeController {
  index(req, res) {
    res.json({ message: 'Hello' });
  }
}

const homeController = new HomeController();

export default homeController;
