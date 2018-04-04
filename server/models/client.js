module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define("Client", {
    username: {
      type: DataTypes.STRING,
      notEmpty: true
    },
     
    // Client's email
    email: {
      type: DataTypes.STRING, 
      validate: {
        // isEmail valiation checks for email format
        isEmail: true
      }
    },

    address: {
      type: DataTypes.STRING,
      required: true
    },

    lat: {
      type: DataTypes.FLOAT,
      
    },

    password: {
        type: DataTypes.STRING,
        required: true
      }
    }
  );
  
  return Client;
};
