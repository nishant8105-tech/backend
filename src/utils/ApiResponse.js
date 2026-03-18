class ApiResponse{
  constructor(statuscode, message="success", data){
    this.statuscode = statuscode;
    this.success = statuscode<400;
    this.message = message;
    this.data = data;
  }
}

export {ApiResponse}