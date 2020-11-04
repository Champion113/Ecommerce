const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
   // find all categories
  // associated Products
  Category.findAll({
    // attributes: ['id', 'category_name'],
    include: [
      {
        model: Product,
        // attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }]
  }).then(products => res.json(products)).catch(err => res.status(500).json(err))
 
 
});

  // find one category by its `id` value
  // include its associated Products
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'category_name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }]
  }).then(products => res.json(products)).catch(err => res.status(500).json(err))
});
//Create new category
router.post('/', (req, res) => {
  Category.create(
    {
      category_name:req.body.category_name,}).then(category => res.json(category)).catch(err => res.status(500).json(err))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(category => res.json(category)).catch(err => res.status(500).json(err))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy( {
    where: {
      id: req.params.id
    }
  }).then(category => res.json(category)).catch(err => res.status(500).json(err)) 
});

module.exports = router;
