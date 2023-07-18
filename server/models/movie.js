module.exports = (sequalize, DataTypes) => {
  const movies = sequalize.define(
    "movies",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      subTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      categories: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      visit: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
    }
  );
  return movies;
};
