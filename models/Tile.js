module.exports = (sequelize, DataTypes) => {
    const Tile = sequelize.define('Tile', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            coordinate: {
                type: DataTypes.INTEGER,
                unique: true,
                allowNull: false
            },
            color: {
                type: DataTypes.STRING,
                allowNull: false
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            }

        }, {
            tableName: 'tiles',
            timestamps: false
        }
    );

    Tile.association = (models) => {
        Tile.belongsTo(models.User, {
            foreignKey: 'user_id'
        })
    };


    return Tile
};