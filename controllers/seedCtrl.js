//imports
const Seed = require('./../models/Seed')

const titles = {
  level1: [1, 'Basic Vowels'],
  level2: [2, 'Basic Consonants I'],
  level3: [3, 'Diphthongs (i)'],
  level4: [4, 'Basic Consonants II'],
  level5: [5, 'Intermediate Vowels I'],
  level6: [6, 'Intermediate Consonants I'],
  level7: [7, 'Intermediate Vowels II'],
  level8: [8, 'Intermediate Consonants II'],
}
//controls
exports.listSeed = async (req, res) => {
	try {
		const getAll = await Seed.find({})
		console.log(getAll);
		res.json({
			msg: "Lista de seed obtenida con exito",
			data: getAll
		})
	} catch (error) {
		log.error(error)
		res.json({
			msg: "Ocurrió un error obteniendo el seed."
		})
	}
}

exports.getOne = async (req, res) => {
  const oneChar = req.params.name
	try {
		const getOneChar = await Seed.find({ name: oneChar })
		console.log(getOneChar);
    res.json({
      msg: `Ha seleccionado ${oneChar} con exito`,
      data: getOneChar
      
    })
	} catch (error) {
		log.error(error)
		res.json({
			msg: "Ocurrió un error obteniendo el caracter."
		})
	}
}

exports.level1 = async (req, res) => {
  try {
    const getLevel = await Seed.find({ level: 1 })
    console.log(getLevel);
    res.json({
			msg: "Nivel 1 obtenido con exito",
      title: titles.level1,
			data: getLevel
		})
  } catch (error) {
    log.error(error)
		res.json({
			msg: "Ocurrió un error obteniendo el nivel."
		})
  }
}

exports.level2 = async (req, res) => {
  try {
    const getLevel = await Seed.find({ level: 2 })
    console.log(getLevel);
    res.json({
			msg: "Nivel 2 obtenido con exito",
      title: titles.level2,
			data: getLevel
		})
  } catch (error) {
    log.error(error)
		res.json({
			msg: "Ocurrió un error obteniendo el nivel."
		})
  }
}

exports.level3 = async (req, res) => {
  try {
    const getLevel = await Seed.find({ level: 3 })
    console.log(getLevel);
    res.json({
			msg: "Nivel 3 obtenido con exito",
      title: titles.level3,
			data: getLevel
		})
  } catch (error) {
    log.error(error)
		res.json({
			msg: "Ocurrió un error obteniendo el nivel."
		})
  }
}

exports.level4 = async (req, res) => {
  try {
    const getLevel = await Seed.find({ level: 4 })
    console.log(getLevel);
    res.json({
			msg: "Nivel 4 obtenido con exito",
      title: titles.level4,
			data: getLevel
		})
  } catch (error) {
    log.error(error)
		res.json({
			msg: "Ocurrió un error obteniendo el nivel."
		})
  }
}

exports.level5 = async (req, res) => {
  try {
    const getLevel = await Seed.find({ level: 5 })
    console.log(getLevel);
    res.json({
			msg: "Nivel 5 obtenido con exito",
      title: titles.level5,
			data: getLevel
		})
  } catch (error) {
    log.error(error)
		res.json({
			msg: "Ocurrió un error obteniendo el nivel."
		})
  }
}

exports.level6 = async (req, res) => {
  try {
    const getLevel = await Seed.find({ level: 6 })
    console.log(getLevel);
    res.json({
			msg: "Nivel 6 obtenido con exito",
      title: titles.level6,
			data: getLevel
		})
  } catch (error) {
    log.error(error)
		res.json({
			msg: "Ocurrió un error obteniendo el nivel."
		})
  }
}

exports.level7 = async (req, res) => {
  try {
    const getLevel = await Seed.find({ level: 7 })
    console.log(getLevel);
    res.json({
			msg: "Nivel 7 obtenido con exito",
      title: titles.level7,
			data: getLevel
		})
  } catch (error) {
    log.error(error)
		res.json({
			msg: "Ocurrió un error obteniendo el nivel."
		})
  }
}

exports.level8 = async (req, res) => {
  try {
    const getLevel = await Seed.find({ level: 8 })
    console.log(getLevel);
    res.json({
			msg: "Nivel 8 obtenido con exito",
      title: titles.level8,
			data: getLevel
		})
  } catch (error) {
    log.error(error)
		res.json({
			msg: "Ocurrió un error obteniendo el nivel."
		})
  }
}