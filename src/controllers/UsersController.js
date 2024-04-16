// controllers/UserController.js
const UserModel = require('../models/User');

const  UsersController = {

      async getAllUsers(req, res) {
        const allUser = await UserModel.findAll();
        res.send(allUser);
         
        },

        async getUserById (req, res) {
          const allUser = await UserModel.find(
            {

            }
          );

      },
      
       async createUser  (req, res) {
       let message='';

        try{
          const newUser= await UserModel.create(
            {username: req.query.username,
              user_email:req.query.user_email,
              user_password:req.query.user_password,
              user_status:req.query.user_status,
              user_company_id:req.query.user_company_id,
            }
          )
          message=`new user created : ${newUser}`;
          

        }catch (error){
          message=`error encrounted: ${error}`;

        }
       
        res.send(message);
        //TO DO:
        //1- Do not activate user here and get email confirmation and activate status there
        //2- Make password ecrypted

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
