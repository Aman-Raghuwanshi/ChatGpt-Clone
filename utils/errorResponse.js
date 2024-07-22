class errorResponse extends Error{
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

modules.exports = errorResponse;