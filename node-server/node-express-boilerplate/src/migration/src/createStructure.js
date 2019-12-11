const humps = require('humps')
module.exports = function (tableData, tableName, db) {
  let model = {
    attributes: {},
    tableDetail: {
      tableName: tableName,
      freezeTableName: true,
      underscored: true,
      timestamps: false,
      classMethods: {}
    }
  }
  tableData.forEach(element => {
    let primaryKey = _definedPrimaryKey(element.Key)
    let type = _definedType(element.Type)
    let allowNull = _definedAllowNull(element.Null)
    let autoIncrement = _definedAutoIncrement(element.Extra)
    let field = element.Field
    let fieldCamel = humps.camelize(element.Field)
    let defaultValue = _definedDefault(element.Default)
    // let defaultsTo = element.Default ? element.Default : undefined
    model.attributes[fieldCamel] = {
      type: type,
      allowNull: allowNull,
      defaultValue: defaultValue,
      field: field,
      primaryKey: primaryKey,
      autoIncrement: autoIncrement
    }
    if (fieldCamel === 'createTime' || fieldCamel === 'updateTime') {
      if (model.tableDetail.timestamps) {
        model.tableDetail[fieldCamel === 'createTime' ? 'createdAt' : 'updatedAt'] = fieldCamel
      } else {
        if (fieldCamel === 'createTime') {
          model.tableDetail['createdAt'] = fieldCamel
          model.tableDetail['updatedAt'] = false
        } else if (fieldCamel === 'createTime') { 
          model.tableDetail['createdAt'] = false
          model.tableDetail['updatedAt'] = fieldCamel
        }
        model.tableDetail.timestamps = true
      }
    }
  })
  return model
}

function _definedType (type) {
  const regEx = /\d+/g
  var volumn = type.match(regEx)
  const regEx2 = /(unsigned)/g
  var volumn2 = type.match(regEx2)
  if (type.toUpperCase().search('INT') !== -1 && type.toUpperCase().search('BIGINT') === -1 ) {
    if (volumn && volumn[0]) {
      if (volumn2 && volumn2[0]) {
        return `$Sequelize.INTEGER(${volumn[0]}).UNSIGNED$`
      }
      return `$Sequelize.INTEGER(${volumn[0]})$`
    }
    return '$Sequelize.INTEGER$'
  } else if (type.toUpperCase().search('BIGINT') !== -1) {
    if (volumn && volumn[0]) {
      if (volumn2 && volumn2[0]) {
        return `$Sequelize.INTEGER(${volumn[0]}).UNSIGNED$`
      }
      return `$Sequelize.INTEGER(${volumn[0]})$`
    }
    return '$Sequelize.INTEGER$'
  } else if (type.toUpperCase().search('FLOAT') !== -1) {
    if (volumn && volumn[0]) {
      if (volumn2 && volumn2[0]) {
        return `$Sequelize.INTEGER(${volumn[0]},${volumn[1]}).UNSIGNED$`
      }
      return `$Sequelize.INTEGER(${volumn[0]},${volumn[1]})$`
    }
    return '$Sequelize.INTEGER$'
  } else if (type.toUpperCase().search('DECIMAL') !== -1) {
    if (volumn && volumn[0]) {
      if (volumn2 && volumn2[0]) {
        return `$Sequelize.INTEGER(${volumn[0]},${volumn[1]}).UNSIGNED$`
      }
      return `$Sequelize.INTEGER(${volumn[0]},${volumn[1]})$`
    }
    return '$Sequelize.INTEGER$'
  } else if (type.toUpperCase().search('DOUBLE') !== -1) {
    if (volumn && volumn[0]) {
      if (volumn2 && volumn2[0]) {
        return `$Sequelize.INTEGER(${volumn[0]},${volumn[1]}).UNSIGNED$`
      }
      return `$Sequelize.INTEGER(${volumn[0]},${volumn[1]})$`
    }
    return '$Sequelize.INTEGER$'
  } else if (type.toUpperCase().search('VARCHAR') !== -1) {
    if (volumn && volumn[0]) {
      return `$Sequelize.STRING(${volumn})$`
    }
    return '$Sequelize.STRING$'
  } else if (type.toUpperCase().search('CHAR') !== -1) {
    if (volumn && volumn[0]) {
      return `$Sequelize.STRING(${volumn})$`
    }
    return '$Sequelize.STRING$'
  } else if (type.toUpperCase().search('TEXT') !== -1) {
    return '$Sequelize.TEXT$'
  }  else if (type.toUpperCase().search('TIME') !== -1) {
    return '$Sequelize.DATE$'
  }
}

function _definedDefault (type) {
  if (!type) {
    return undefined
  } else if (type === 'CURRENT_TIMESTAMP' || type === '0000-00-00 00:00:00') {
    return '$Sequelize.NOW$'
  } else if (isNaN(parseInt(type))) {
    return type
  } else {
    return `$${type}$`
  }
}

function _definedAllowNull (Null) {
  if (Null === 'YES') {
    return true
  } else {
    return false
  }
}

function _definedAutoIncrement (extra) {
  if (extra === 'auto_increment') {
    return true
  } else {
    return false
  }
}

function _definedPrimaryKey (key) {
  if (key === 'PRI') {
    return true
  } else {
    return false
  }
}
