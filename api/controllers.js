const data = require("../data");

module.exports.create = async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ message: "url is required" });
    }

    return res.status(200).json(data.insert(url));

  } catch (error) {
    console.log(error);
  }
}

module.exports.get = async (req, res) => {
  try {
    const { code } = req.params;
    if (!code) {
      return res.status(400).json({ message: "Code is required" });
    }
    const response = data.get(code);
    if (!response) {
      return res.status(404).json({ message: "Url not found" });
    }

    return res.redirect(response.url);

  } catch (error) {
    console.log(error);
  }
}