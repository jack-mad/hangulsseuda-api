//imports
const jwt = require('jsonwebtoken')

//function
const authorization = async (req, res, next) => {
	const token = req.header("x-auth-token")
	if(!token){
		return res.json({
			msg: "토큰 없음, 권한 거부됨 - Sin token, permiso denegado."
		})
	}
	try {
		const openToken = await jwt.verify(token, process.env.SECRET)
		req.user = openToken.user
		next()
	} catch (error) {
		console.log(error)
		res.json(
			{
				msg: "토큰에 오류가 있습니다 - Hay un error con el token."
			}
		)
	}
}

//export
module.exports = authorization;