const account = (sequelize, DataTypes) => {
  const Account = sequelize.define('account', {
    username: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
    },
  });

  Account.associate = models => {
    Account.belongsTo(models.User);
  };

  return Account;
};

export default account;
