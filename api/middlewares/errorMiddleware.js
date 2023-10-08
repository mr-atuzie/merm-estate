const errorHandler = (err, req, res, next) => {
  const status = res.statusCode ? res.statusCode : 500;

  res.status(status).json({
    status,
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

export default errorHandler;
