module.exports = {
  getAll: (req, res) => {
    const db = req.app.get('db');

    db.get_all()
    .then(products => res.status(200).send(products))
    .catch(() => res.status(500).send())
  },

  addProduct: (req, res) => {
    const db = req.app.get('db');
    const {itemName, itemPrice, itemImg} = req.body;

    db.add_product(itemName, itemPrice, itemImg)
    .then(products => res.status(200).send(products))
    .catch(() => res.status(500).send())
  },

  deleteProduct: (req, res) => {
    const db = req.app.get('db');
    db.delete_product([req.params.id])
    .then(products => res.status(200).send(products))
    .catch(() => res.status(500).send())
  }
}