
import validateToken from '../utils/token.utli';
import {storeData, query, deletedata} from '../utils/db.util';
import {responseData} from '../utils/response.util';
/**
 * Handles data functionality.
 */
class DataController {
/**
 * @param {string} req The request.
 * @param {string} res The response.
 * @return {dict} Response.
 */
  static saveData(req, res) {
    const data = req.body;
    const theDate = new Date(data['date'] * 1000);
    const dateString = theDate.toGMTString();
    data['date'] = dateString;
    const token = req.headers['x-access-token'];
    return validateToken(token)
        .then(()=> {
          storeData(data, token)
              .then((data) => responseData(res, data)
              ).catch((err) =>{
                console.log(err);
              });
        })
        .catch((err)=>{
          responseTokenError(res, err);
        });
  }
  /**
 * @param {string} req The request.
 * @param {string} res The response.
 * @return {dict} Response.
 */
  static queryData(req, res) {
    const token = req.headers['x-access-token'];
    return validateToken(token)
        .then(() => query(token)
            .then((data) => responseData(res, data)));
  }
  /**
 * @param {string} req The request.
 * @param {string} res The response.
 * @return {dict} Response.
 */
  static deleteData(req, res) {
    const dataToDelete = req.params.id;
    const token = req.headers['x-access-token'];
    return validateToken(token)
        .then(() => deletedata(token, dataToDelete)
            .then((data) => responseData(res, data)));
  }
}

export default DataController;

