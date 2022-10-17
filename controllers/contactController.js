const db = require("../database/models");
const contactController = {
  // POST /contact
  async store(req, res) {
    const { name, nohp, address } = req.body;
    await db.Contact.create({ name: name, nohp: nohp, address: address });
    return res.status(201).send({ msg: "Contact berhasil ditambahkan" });
  },
  //   get all data
  async getAll(req, res) {
    const contacts = await db.Contact.findAll({
      attribut: ["id", "name", "nohp", "address"],
    });
    return res
      .status(200)
      .send({ data: contacts, message: "Data berhasil diambil" });
  },
  //   get data by id
  async getById(req, res) {
    const id = req.params.id;
    const contact = await db.Contact.findOne({
      where: { id: id },
      attribut: ["id", "name", "nohp", "address"],
    });
    // if data not found
    if (!contact) {
      return res.status(404).send({ message: "Data tidak ditemukan" });
    }
    return res.status(200).send({ data: contact });
  },
  //   update data
  async update(req, res) {
    const id = req.params.id;
    const { name, nohp, address } = req.body;
    const contact = await db.Contact.findOne({ where: { id: id } });
    if (contact) {
      contact.name = name;
      contact.nohp = nohp;
      contact.address = address;
      await contact.save();
      return res.status(200).send({ message: "Data berhasil diupdate" });
    } else {
      return res.status(404).send({ message: "Data tidak ditemukan" });
    }
  },
  //   delete data
  async destroyData(req, res) {
    const id = req.params.id;
    const contact = await db.Contact.findOne({ where: { id: id } });
    if (contact) {
      await contact.destroy();
      return res.status(200).send({ message: "Data berhasil dihapus" });
    } else {
      return res.status(404).send({ message: "Data tidak ditemukan" });
    }
  },
};

module.exports = contactController;
