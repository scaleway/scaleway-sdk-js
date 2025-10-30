'use strict';

const config = new Map([
  [
    'dev',
    {
      backend: 'https://core.serverless-dev.com',
      integrationsBackend: 'https://integrations.core.serverless-dev.com',
      frontend: 'https://console.serverless-dev.com',
      dashboardFrontend: 'https://app.serverless-dev.com',
      devModeFeed: 'wss://dev.socket.core.serverless-dev.com',
    },
  ],
  [
    'prod',
    {
      backend: 'https://core.serverless.com',
      integrationsBackend: 'https://integrations.core.serverless.com',
      frontend: 'https://console.serverless.com',
      dashboardFrontend: 'https://app.serverless.com',
      devModeFeed: 'wss://socket.core.serverless.com',
    },
  ],
]);

const stage = config.has(process.env.SERVERLESS_PLATFORM_STAGE)
  ? process.env.SERVERLESS_PLATFORM_STAGE
  : 'prod';

module.exports = config.get(stage);
