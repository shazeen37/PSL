const AdminBro = require('admin-bro');
const bcrypt = require('bcryptjs');
const AdminBroExpressjs = require('admin-bro-expressjs');
const AdminBroMongoose = require('admin-bro-mongoose');
const user = require('../../models/Users');
const sentences= require('../../models/Sentences')
const uploads = require('../../models/Uploads');
const Dictionary = require('../../models/Dictionary');
const Profile = require('../../models/Profile');
const Review = require('../../models/Reviews');

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
          icon: 'fas fa-users-cog',
        },
        actions: {
          new: {
            before: async (request) => {
              if(request.payload.password) {
                request.payload = {
                  ...request.payload,
                  password: await bcrypt.hash(request.payload.password, 10)
                }
              }
              return request
            },
          },
          edit: { 
            before: async (request) => {
              if(request.payload.password) {
                request.payload = {
                  ...request.payload,
                  password: await bcrypt.hash(request.payload.password, 10)
                }
              }
              return request
            },
          }
        }
      }
      
      
    },
    { resource: sentences, options: { parent: {
      name: 'Admin Content',
      icon: 'fas fa-users-cog',
    } } },
    { resource: Review, options: { parent: {
      name: 'Admin Content',
      icon: 'fas fa-users-cog',
    } } },
    { resource: uploads, options: { parent: {
      name: 'Admin Content',
      icon: 'fas fa-users-cog',
    } } },
    { resource: Dictionary, options: { parent: {
      name: 'Admin Content',
      icon: 'fas fa-users-cog',
    } } },
    { resource: Profile, options: { parent: {
      name: 'Admin Content',
      icon: 'fas fa-users-cog',
    } } },
  ],

  rootPath: '/admin',
  branding: {
    companyName: 'PSL',
    logo: false,
    softwareBrothers: false,
    theme: 'darkTheme',
  },

  locale: {
    translations: {
        messages: {
            loginWelcome: 'Administration Panel - Login' // the smaller text
        },
        labels: {
            loginWelcome: 'Pakistan sign language corpus', // this could be your project name
        },
    }
},
assets: {
    styles: ['/css/your-custom-styles.css'], // here you can hide the default images and re-position the boxes or text.
},
  
dashboard: {
  handler: async () => {
    return { some: 'output' }
  },
  component: AdminBro.bundle('../../client/admindashboard')
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
}, null, {
  resave: false,
  saveUninitialized: true,
});

module.exports = router;
