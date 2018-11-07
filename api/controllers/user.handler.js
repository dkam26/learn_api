import vadilateUser from '../utils/validate.util';
import {createUser, authLogin} from '../utils/db.util';
import {responseData} from '../utils/response.util';
/**
 * Handles user functionality.
 */
class UserController {
/**
 * @param {string} req The request.
 * @param {string} res The response.
 * @return {dict} Response.
 */
  static create(req, res) {
    const user = req.body;
    return vadilateUser('createUser', user)
        .then(() => createUser(user)
            .then((username) => {
              let data = {Message: `User successfully added!,${username}`};
              responseData(res, data, 'Success');
            })
        ).catch((err) =>{
          responseData(res, err, 'Error');
        });
  }
  /**
 * @param {string} req The request.
 * @param {string} res The response.
 * @return {dict} Response.
 */
  static login(req, res) {
    const user = req.body;
    return vadilateUser('login', user)
        .then(()=> authLogin(user)
            .then((creditials) => {
              responseData(res, creditials, 'Success');
            })
            .catch((err) =>{
              responseData(res, err, 'Error');
            }));
  }
}

export default UserController;
