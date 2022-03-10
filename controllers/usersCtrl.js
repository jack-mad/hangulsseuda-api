//imports
const bcryptjs = require("bcryptjs")
const jwt	= require("jsonwebtoken")
const User = require("./../models/User")

//controls
exports.signup = async (req, res) => {
	const { 
		name, 
		lastname, 
		username, 
		password,
    avatar,
		level,
		achievements
	} = req.body
		try {
			// check password and hash
			const salt = await bcryptjs.genSalt(10)
			const hashedPassword = await bcryptjs.hash(password, salt)
			console.log(hashedPassword)
			// create user
			const newUser = await User.create({
				name,
				lastname,
				username,
				password: hashedPassword,
        avatar,
				level,
        achievements
			})
			console.log(newUser)
      //jwt
			const payload = {
				user: {
					id: newUser._id
				}
			}
			// make jwt
			jwt.sign(
				payload, // companion data
				process.env.SECRET,
				{
					expiresIn: "2 days" //expiration time
				},
				(error, token) => {
					if (error) throw error
					res.json({
						msg: "사용자가 성공적으로 생성되었습니다 - Usuario creado con éxito.",
						data: token
					})
				}
			)
		} catch (error) {
			console.log(error)
			res.json({
				msg: "사용자 생성 중 오류가 발생했습니다 - Ocurrió un error durante la creación del usuario."
			})
		}
}

exports.signin = async (req, res) => {
	const { username, password } = req.body
	try {
		const foundUser = await User.findOne({ username })
		if(!foundUser) {
			return res.json({
				msg: "사용자를 찾을 수 없음 - Usuario no encontrado."
			})
		}
		const verifiedPass = await bcryptjs.compare(password, foundUser.password)
		if(!verifiedPass){
			return await res.json({
				msg: "사용자 이름 또는 비밀번호가 일치하지 않습니다 - El nombre de usuario o la contraseña no coinciden"
			})
		}
		// jwt manage
		// payload
		const payload = {
			user: {
				id: foundUser._id
			}
		}
		jwt.sign(
			payload,
			process.env.SECRET,
			{
				expiresIn: "2 days"
			},
			(error, token) => {
				if(error) throw error
				res.json({
					msg: "로그인 성공 - Inicio de sesión exitoso.",
					data: token
				})
			}
		)
		return
	} catch (error) {
		console.log(error)
		res.json({
			msg: "인증에 문제가 있었습니다 - Hubo un problema con la autenticación."
		})
	}
}

exports.verify = async (req, res) => {
	//console.log(req.user)
	try {
		const foundUser = await User.findById(req.user.id).select("-password")
		return res.json({
			msg: "사용자 데이터를 찾았습니다 - Datos de usuario encontrados.",
			data: foundUser
		})
	} catch (error) {
		console.log(error)
		res.json({
			msg: "사용자를 업데이트하는 동안 오류가 발생했습니다 - Ocurrió un error al actualizar el usuario."
		})
	}
}

exports.addLesson = async (req, res) => {
	const { userID, character, data } = req.body
	try {
		const addNewLesson = await User.findByIdAndUpdate(userID,  { $push: { achievements: { character, data } } } , { new: true })
		res.json({
			msg: "Leccion añadida exitosamente",
			data: addNewLesson
		})
	} catch (error) {
		console.log(error)
		res.json({
			msg: "인증에 문제가 있었습니다 - Hubo un problema al agregar la lección."
		})
	}
}