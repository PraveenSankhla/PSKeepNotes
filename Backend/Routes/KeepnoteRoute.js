const router = require("express").Router();
const keepnotecont = require('../Controller/KeepnoteController')

router.get("/", keepnotecont.GetnotesfromDB)
router.post("/", keepnotecont.Savenotes)
router.delete("/", keepnotecont.DeleteData)

module.exports = router