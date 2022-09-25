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


import ApiClient from "../ApiClient";
import CreateMessageInput from '../model/CreateMessageInput';
import Error from '../model/Error';
import Message from '../model/Message';
import Network from '../model/Network';
import Pricing from '../model/Pricing';

/**
* Sms service.
* @module api/SmsApi
* @version 0.202209251204.0
*/
export default class SmsApi {

    /**
    * Constructs a new SmsApi. 
    * @alias module:api/SmsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Cancel a message
     * Returns a single pet
     * @param {Number} messageId ID of pet to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Message} and HTTP response
     */
    cancelMessageWithHttpInfo(messageId) {
      let postBody = null;
      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling cancelMessage");
      }

      let pathParams = {
        'messageId': messageId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Message;
      return this.apiClient.callApi(
        '/v1/sms/messages/{messageId}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Cancel a message
     * Returns a single pet
     * @param {Number} messageId ID of pet to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Message}
     */
    cancelMessage(messageId) {
      return this.cancelMessageWithHttpInfo(messageId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create Message
     * Update an existing pet by Id
     * @param {module:model/CreateMessageInput} createMessageInput Update an existent pet in the store
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Message} and HTTP response
     */
    createMessageWithHttpInfo(createMessageInput) {
      let postBody = createMessageInput;
      // verify the required parameter 'createMessageInput' is set
      if (createMessageInput === undefined || createMessageInput === null) {
        throw new Error("Missing the required parameter 'createMessageInput' when calling createMessage");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth', 'BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Message;
      return this.apiClient.callApi(
        '/v1/sms/messages', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Message
     * Update an existing pet by Id
     * @param {module:model/CreateMessageInput} createMessageInput Update an existent pet in the store
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Message}
     */
    createMessage(createMessageInput) {
      return this.createMessageWithHttpInfo(createMessageInput)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create network price
     * Returns a single pet
     * @param {Number} networkId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Message} and HTTP response
     */
    createPricingWithHttpInfo(networkId) {
      let postBody = null;
      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling createPricing");
      }

      let pathParams = {
        'networkId': networkId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Message;
      return this.apiClient.callApi(
        '/v1/sms/networks/{networkId}/pricing', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create network price
     * Returns a single pet
     * @param {Number} networkId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Message}
     */
    createPricing(networkId) {
      return this.createPricingWithHttpInfo(networkId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a message
     * delete a message
     * @param {Number} messageId Pet id to delete
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Error} and HTTP response
     */
    deleteMessageWithHttpInfo(messageId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling deleteMessage");
      }

      let pathParams = {
        'messageId': messageId
      };
      let queryParams = {
      };
      let headerParams = {
        'api_key': opts['apiKey']
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Error;
      return this.apiClient.callApi(
        '/v1/sms/messages/{messageId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a message
     * delete a message
     * @param {Number} messageId Pet id to delete
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Error}
     */
    deleteMessage(messageId, opts) {
      return this.deleteMessageWithHttpInfo(messageId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get message
     * Returns a single pet
     * @param {Number} messageId ID of pet to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Message} and HTTP response
     */
    getMessageWithHttpInfo(messageId) {
      let postBody = null;
      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling getMessage");
      }

      let pathParams = {
        'messageId': messageId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Message;
      return this.apiClient.callApi(
        '/v1/sms/messages/{messageId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get message
     * Returns a single pet
     * @param {Number} messageId ID of pet to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Message}
     */
    getMessage(messageId) {
      return this.getMessageWithHttpInfo(messageId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get network
     * Returns a single pet
     * @param {Number} networkId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.countryCode ID of pet to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Network} and HTTP response
     */
    getNetworkWithHttpInfo(networkId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetwork");
      }

      let pathParams = {
        'networkId': networkId
      };
      let queryParams = {
        'country_code': opts['countryCode']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Network;
      return this.apiClient.callApi(
        '/v1/sms/networks/{networkId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get network
     * Returns a single pet
     * @param {Number} networkId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.countryCode ID of pet to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Network}
     */
    getNetwork(networkId, opts) {
      return this.getNetworkWithHttpInfo(networkId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List network rates
     * Returns a single pet
     * @param {Number} networkId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Pricing>} and HTTP response
     */
    getPricingWithHttpInfo(networkId) {
      let postBody = null;
      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getPricing");
      }

      let pathParams = {
        'networkId': networkId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Pricing];
      return this.apiClient.callApi(
        '/v1/sms/networks/{networkId}/pricing', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List network rates
     * Returns a single pet
     * @param {Number} networkId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Pricing>}
     */
    getPricing(networkId) {
      return this.getPricingWithHttpInfo(networkId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List messages
     * Update an existing pet by Id
     * @param {Object} opts Optional parameters
     * @param {String} opts.inbox 
     * @param {String} opts.status 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Message>} and HTTP response
     */
    listMessagesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'inbox': opts['inbox'],
        'status': opts['status']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Message];
      return this.apiClient.callApi(
        '/v1/sms/messages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List messages
     * Update an existing pet by Id
     * @param {Object} opts Optional parameters
     * @param {String} opts.inbox 
     * @param {String} opts.status 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Message>}
     */
    listMessages(opts) {
      return this.listMessagesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List networks
     * Returns a single pet
     * @param {Object} opts Optional parameters
     * @param {String} opts.countryCode ID of pet to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Network>} and HTTP response
     */
    listNetworksWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'country_code': opts['countryCode']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Network];
      return this.apiClient.callApi(
        '/v1/sms/networks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List networks
     * Returns a single pet
     * @param {Object} opts Optional parameters
     * @param {String} opts.countryCode ID of pet to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Network>}
     */
    listNetworks(opts) {
      return this.listNetworksWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Sends a message
     * Returns a single pet
     * @param {Number} messageId ID of pet to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Message} and HTTP response
     */
    sendMessageWithHttpInfo(messageId) {
      let postBody = null;
      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling sendMessage");
      }

      let pathParams = {
        'messageId': messageId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Message;
      return this.apiClient.callApi(
        '/v1/sms/messages/{messageId}/send', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Sends a message
     * Returns a single pet
     * @param {Number} messageId ID of pet to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Message}
     */
    sendMessage(messageId) {
      return this.sendMessageWithHttpInfo(messageId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
