/**
 * @fileoverview ESLint presets for react native
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");
const eslintrc = require("../configs/.eslintrc");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------
module.exports = {
  // 引入所有的自定义的规则
  rules: requireIndex(__dirname + "/rules"),
  configs: {
    recommended: eslintrc,
  },
};
