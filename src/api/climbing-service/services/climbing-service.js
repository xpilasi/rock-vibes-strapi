'use strict';

/**
 * climbing-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::climbing-service.climbing-service');
