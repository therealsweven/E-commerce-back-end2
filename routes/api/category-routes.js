const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  try {
    const cats = await Category.findAll({
      include: [{ model: Product }], //includes its associated Products
    });
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  try {
    const cats = await Category.findByPk(req.params.id, {
      include: [{ model: Product }], //includes its associated Products
    });
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  /* req.body should look like this...
    {
      "category_name": "Pants"
    }
  */
  try {
    const cat = await Category.create(req.body);
    res.status(200).json(cat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  /* req.body should look like this...
    {
      "category_name": "Coats"
    }
  */
  try {
    await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res
      .status(200)
      .json(
        `message:  The tag with the ID of ${req.params.id} has been updated to ${req.body.category_name}. `
      );
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res
      .status(200)
      .json(
        `message:  The category with the ID of ${req.params.id} has been deleted. `
      );
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
