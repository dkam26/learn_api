import validateInput from '../utils/searchValidate.util';
import {searchLocation,
  getLocation,
  getWeather,
} from '../utils/queryApi.util';
import {responseCoordinates,
  responseWeather,
  responseTokenError} from '../utils/responseCoordinate.util';
import validateToken from '../utils/token.utli';
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
    const token = req.headers['x-access-token'];
    return validateToken(token)
        .then(()=> {
          validateInput(location)
              .then(() => searchLocation(location['location'])
                  .then((data) => getLocation(data))
                  .then((data) => responseCoordinates(res, data))
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
  static getForecast(req, res) {
    const coordinates = req.body.location;
    const time = req.body.time;
    const token = req.headers['x-access-token'];
    return validateToken(token)
        .then(getWeather(time, coordinates)
            .then((data)=> responseWeather(res, data)))
        .catch((err)=>{
          responseTokenError(res, err);
        });
  }
}

export default SearchController;

