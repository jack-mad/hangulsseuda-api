//imports
const Lesson = require('./../models/Lesson')

//controls
exports.add = async (req, res) => {
	const {
		level,
		username,
		character,
		drawings = req.body
	}
	try {
		const newLesson = await Lesson.create({
			level,
			username,
			character,
			drawings
		})
		console.log(newLesson);
		res.json({
			msg: "Leccion creada con exito",
			data: newLesson
		})
	} catch (error) {
		log.error(error)
		res.json({
			msg: "Ocurrió un error creando la lección."
		})
	}
}

exports.fetch = async (req, res) => {
	try {
		
	} catch (error) {
		
	}
}