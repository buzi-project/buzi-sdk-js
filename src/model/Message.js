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
import Cost from './Cost';

/**
 * The Message model module.
 * @module model/Message
 * @version 0.202209251212.0
 */
class Message {
    /**
     * Constructs a new <code>Message</code>.
     * @alias module:model/Message
     */
    constructor() { 
        
        Message.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Message</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Message} obj Optional instance to populate.
     * @return {module:model/Message} The populated <code>Message</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Message();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('cost')) {
                obj['cost'] = Cost.constructFromObject(data['cost']);
            }
            if (data.hasOwnProperty('inbox')) {
                obj['inbox'] = ApiClient.convertToType(data['inbox'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Message.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
Message.prototype['created_at'] = undefined;

/**
 * @member {module:model/Message.StatusEnum} status
 */
Message.prototype['status'] = undefined;

/**
 * @member {String} reason
 */
Message.prototype['reason'] = undefined;

/**
 * @member {module:model/Cost} cost
 */
Message.prototype['cost'] = undefined;

/**
 * @member {module:model/Message.InboxEnum} inbox
 */
Message.prototype['inbox'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Message['StatusEnum'] = {

    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",

    /**
     * value: "REJECTED"
     * @const
     */
    "REJECTED": "REJECTED"
};


/**
 * Allowed values for the <code>inbox</code> property.
 * @enum {String}
 * @readonly
 */
Message['InboxEnum'] = {

    /**
     * value: "incoming"
     * @const
     */
    "incoming": "incoming",

    /**
     * value: "outgoing"
     * @const
     */
    "outgoing": "outgoing"
};



export default Message;

