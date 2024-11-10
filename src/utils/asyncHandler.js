const asyncHandler = (requestHandler) => {
   return (req, res, next) => {
      Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
   }
}
export { asyncHandler }




// const asyncHandler = (func) => async (error, req, res, next) => {
//    try {
//       await func(req, res, next)
//    } catch (error) {
//       res.status(error.code || 404).json({
//          success: false,
//          message: error.message,
//       })
//    }
// }