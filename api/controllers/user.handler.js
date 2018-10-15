import vadilateUser from '../utils/validate.util';
import {createUser, authLogin} from '../utils/db.util';
import {responseCreate,
  responseError,
  responseLogin,
  responseLoginError} from '../utils/response.util';
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
              responseCreate(res, username);
            })
        ).catch((err) =>{
          responseError(res, err);
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
          responseLogin(res, creditials);
        })
        .catch((err) =>{
          responseLoginError(res, err);
          // responseError(res, err);
        }))
  }
}

export default UserController;
