class HomeController {
  index(req, res) {
    res.json({ message: 'Hello' });
  }
}

export default new HomeController();
