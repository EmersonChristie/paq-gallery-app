// For the default version
const algoliasearch = require("algoliasearch");

const client = algoliasearch("YourApplicationID", "YourAdminAPIKey");
const index = client.initIndex("your_index_name");
