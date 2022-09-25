/**
 * Swagger Petstore - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach! You can now help us improve the API whether it's by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3.  _If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the `Edit > Load Petstore OAS 2.0` menu option!_  Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore) - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: edson@michaque.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Pricing model module.
 * @module model/Pricing
 * @version 0.202209251212.0
 */
class Pricing {
    /**
     * Constructs a new <code>Pricing</code>.
     * @alias module:model/Pricing
     */
    constructor() { 
        
        Pricing.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Pricing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pricing} obj Optional instance to populate.
     * @return {module:model/Pricing} The populated <code>Pricing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Pricing();

            if (data.hasOwnProperty('cost_per_unit')) {
                obj['cost_per_unit'] = ApiClient.convertToType(data['cost_per_unit'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} cost_per_unit
 */
Pricing.prototype['cost_per_unit'] = undefined;






export default Pricing;

