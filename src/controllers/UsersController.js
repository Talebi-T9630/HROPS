// controllers/UserController.js
const UserModel = require('../models/User');

const  UsersController = {

      async getAllUsers(req, res) {
        const allUser = await UserModel.findAll();
        res.send('All users fetched.')
         
        },

        async getUserById (req, res) {
          // try {
          //   const userId = req.params.id;
          //   const user = await this.fetchUserData(userId);
          //   res.json(user);
          // } catch (error) {
          //   console.error('Error fetching user:', error);
          //   res.status(500).send('Internal Server Error');
          // }
      },
      
       createUser  (req, res) {
        // Logic to create a new user in the database
        res.send('Create a user');
      },
      
        updateUser  (req, res)  {
        // Logic to update a user in the database
        res.send('Update a user');
      },
      
        deleteUser  (req, res) {
        // Logic to delete a user from the database
        res.send('Delete a user');
      }
}

module.exports = UsersController;
