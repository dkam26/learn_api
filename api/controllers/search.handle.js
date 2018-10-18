import validateInput from '../utils/searchValidate.util';
import {searchLocation, getLocation} from '../utils/queryApi.util';

/**
 * Handles user functionality.
 */
class SearchController {
/**
 * @param {string} req The request.
 * @param {string} res The response.
 * @return {dict} Response.
 */
  static getCoordinates(req, res) {
    const location = req.body;
    return validateInput(location)
        .then(() => searchLocation(location['location'])
            .then((data) => getLocation(data))
            .then((data) =>{console.log(data)})
        ).catch((err) =>{
          console.log(err);
        });
  }
}

export default SearchController;
