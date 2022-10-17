const dasarController = {
  hello(req, res) {
    res.send({ msg: "Ini dari Dasar Controller hello" });
  },
  about(req, res) {
    res.send({ msg: "Ini dari Dasar Controller About" });
  },
};

module.exports = dasarController;
