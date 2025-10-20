Huffman Marketplace App

This is a prototype project to demonstrate a full-stack web appliation.

The key files recommended for review include the database migration and seed files, the .env file, and knexfile.js,
which handle database configuration and initalization. In the server folder, the .env and server.js files define the backend 
environment settigs and API logic. In the src folder, the main FReact components that control the functionality and layout are 
AllItems.jsx, WelcomePage.jsx, AddItem.jsx, MerchantSideBar.jsx, MetricPage.jsx, and App.jsx. The docker-compos.yml file is 
also included to manage PostgreSQL database container

Currently to run the application you'll need 2 terminals
In WEBAPP run "docker compose up -d"
Then Navigate to /assignment6/database and run "npx knex migrate latest"
Then run "npx knex seed:run"
Then navigate to server and run "npm start"
In a new terminal navigate to /assignment6 and run "npm start -- --host" (for a network run) or "npm start" (for only local)