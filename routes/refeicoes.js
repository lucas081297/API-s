//EXTERNAL IMPORTS
const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

//LOCAL IMPORTS
const refeicoesController = require('../controllers/refeicoesControllers')

//GETS
router.get('/cm/:email',refeicoesController.getCafeDaManha);
router.get('/al/:email',refeicoesController.getAlmoco);
router.get('/lt/:email',refeicoesController.getLancheDaTarde);
router.get('/ja/:email',refeicoesController.getJanta);
router.get('/cal/cm/:email',refeicoesController.getCalCafeDaManha);
router.get('/cal/al/:email',refeicoesController.getCalAlmoco);
router.get('/cal/lt/:email',refeicoesController.getCalLancheTarde);
router.get('/cal/ja/:email',refeicoesController.getCalJanta);

//POSTS
router.post('/cm/:email/:id_carb/:carb_qtd/:id_prot/:prot_qtd/:id_legum/:legum_qtd/:id_liquid/:liquid_qtd/:id_fruit/:fruit_qtd',refeicoesController.setCafeDaManha);
router.post('/al/:email/:id_carb/:carb_qtd/:id_prot/:prot_qtd/:id_legum/:legum_qtd/:id_liquid/:liquid_qtd/:id_fruit/:fruit_qtd',refeicoesController.setAlmoco);
router.post('/lt/:email/:id_carb/:carb_qtd/:id_prot/:prot_qtd/:id_legum/:legum_qtd/:id_liquid/:liquid_qtd/:id_fruit/:fruit_qtd',refeicoesController.setLancheDaTarde);
router.post('/ja/:email/:id_carb/:carb_qtd/:id_prot/:prot_qtd/:id_legum/:legum_qtd/:id_liquid/:liquid_qtd/:id_fruit/:fruit_qtd',refeicoesController.setJanta);

//PATCHS
router.patch('/cm/:email/:id_carb/:carb_qtd/:id_prot/:prot_qtd/:id_legum/:legum_qtd/:id_liquid/:liquid_qtd/:id_fruit/:fruit_qtd',refeicoesController.patchCafeDaManha);
router.patch('/al/:email/:id_carb/:carb_qtd/:id_prot/:prot_qtd/:id_legum/:legum_qtd/:id_liquid/:liquid_qtd/:id_fruit/:fruit_qtd',refeicoesController.patchAlmoco);
router.patch('/lt/:email/:id_carb/:carb_qtd/:id_prot/:prot_qtd/:id_legum/:legum_qtd/:id_liquid/:liquid_qtd/:id_fruit/:fruit_qtd',refeicoesController.patchLancheDaTarde);
router.patch('/ja/:email/:id_carb/:carb_qtd/:id_prot/:prot_qtd/:id_legum/:legum_qtd/:id_liquid/:liquid_qtd/:id_fruit/:fruit_qtd',refeicoesController.patchJanta);

module.exports = router