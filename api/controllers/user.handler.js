import vadilateUser from '../utils/validate.util';
import createUser from '../utils/db.util';
import {responseCreate, responseError} from '../utils/response.util';
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
    return vadilateUser(user)
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
    return user;
  }
}

export default UserController;
