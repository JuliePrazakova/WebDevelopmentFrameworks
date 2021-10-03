const express = require('express');
const router = express.Router();


let products = [{
  id: 1,
  name: "Lenovo",
  manufacturer: "Company",
  category: "mobile",
  description: "Best solution for calling",
  price: 1000
},{
  id: 2,
  name: "MacbookApple",
  manufacturer: "Mac",
  category: "laptop",
  description: "Perfect notebook",
  price: 38902
},{
  id: 3,
  name: "BetX",
  manufacturer: "Beats",
  category: "headphones",
  description: "awesome",
  price: 829
}];
let idCounter = products.length +1;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    products: products
      });

});

router.post('/', function(req, res, next) {
  let word = req.body.search;
  let name;
  let manu;
  let cate;
  let index = [];


    name = products.find(i => i.name === word);
    manu = products.find(i => i.manufacturer === word);
    cate = products.find(i => i.category === word);

    if(name !== undefined){
      index.push({
        id: name.id,
        name: name.name,
        manufacturer: name.manufacturer,
        category: name.category,
        description: name.description,
        price: name.price
      });
    }
    if(manu !== undefined) {
      index.push({
        id: manu.id,
        name: manu.name,
        manufacturer: manu.manufacturer,
        category: manu.category,
        description: manu.description,
        price: manu.price
      });
    }
    if(cate !== undefined) {
      index.unshift({
        id: cate.id,
        name: cate.name,
        manufacturer: cate.manufacturer,
        category: cate.category,
        description: cate.description,
        price: cate.price
      });
    }


  console.log(index);
  res.render('index', {
    title: 'Express',
    products: index
  });

});

router.get('/add', (req,res)=> {
  res.render('addProduct');
});

router.post('/add', (req,res) => {
  products.push({
    id: idCounter,
    name: String(req.body.name),
    manufacturer: String(req.body.manufacturer),
    category: String(req.body.category),
    description: String(req.body.description),
    price: String(req.body.price)
  })
  idCounter++;
  res.redirect('/');
});

router.get('/delete/:id', (req,res) => {
  let id = parseInt(req.params);

  let index = products.findIndex(i => i.id === id);
  products.splice(index);
  res.redirect('/');
});

router.get('/delete', (req,res) => {
  products = [];
  res.redirect('/');
})

router.get('/view/:id', (req,res) => {
  let id = parseInt(req.params.id);
  let lookup = products.find(p => p.id === id);

  res.render('viewProduct', {
    products: lookup
  });
});

router.get('/edit/:id', (req,res) => {
  let id = parseInt(req.params.id);
  let lookup = products.find(p => p.id === id);

  res.render('editProduct', {
    products: lookup
  });
});

router.post('/edit/:id', (req,res) => {
  let id = parseInt(req.params.id);
  let index = products.findIndex(i => i.id === id);

  products[index].name = String(req.body.name),
  products[index].manufacturer = String(req.body.manufacturer),
  products[index].category = String(req.body.category),
  products[index].description = String(req.body.description),
  products[index].price = String(req.body.price)

  res.redirect('/');
})

module.exports = router;
