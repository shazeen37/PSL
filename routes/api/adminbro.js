const AdminBro = require('admin-bro');
const AdminBroExpressjs = require('admin-bro-expressjs');
const AdminBroMongoose = require('admin-bro-mongoose');
const user = require('../../models/Users');

// We have to tell AdminBro that we will manage mongoose resources with it
AdminBro.registerAdapter(require('admin-bro-mongoose'));
const mongoose = require('mongoose');

// Pass all configuration settings to AdminBro
const adminBro = new AdminBro({
  databases: [mongoose],
  resources: [
    {
      resource: user,
      options: {
        parent: {
          name: 'Admin Content',
          icon: 'fas fa-cogs',
        },
      },
    },
  ],
  rootPath: '/admin',
  branding: {
    companyName: 'PSL',
  },
});
const ADMIN = {
  email: process.env.ADMIN_EMAIL || 'admin@example.com',
  password: process.env.ADMIN_PASSWORD || 'test123',
};

// Build and use a router which will handle all AdminBro routes
const router = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
  cookiePassword:
    process.env.ADMIN_COOKIE_PASS ||
    'supersecret-and-long-password-for-a-cookie-in-the-browser',
  authenticate: async (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      return ADMIN;
    }
    return null;
  },
});

module.exports = router;
