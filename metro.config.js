const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
//Change the file path to our css file
module.exports = withNativeWind(config, { input: './app/global.css' })