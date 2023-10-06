/**
 * @fileoverview Require interface names to begin with a specified prefix
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      category: "Naming",
      recommended: false,
      description: "Require interface names to begin with a specified prefix",
    },
    fixable: "code",
    schema: [
      {
        type: "string",
      },
    ],
    messages: {
      missingPrefix:
        "Interface name '{{ name }}' should start with '{{ prefix }}'",
    },
  },

  create(context) {
    const [prefix = "I"] = context.options;

    function checkPrefix(node) {
      const name = node.id.name;

      if (
        typeof name !== "string" ||
        name.startsWith(prefix) ||
        node.parent.type === "TSModuleDeclaration"
      ) {
        return;
      }

      context.report({
        node,
        messageId: "missingPrefix",
        data: {
          name,
          prefix,
        },
        fix: (fixer) => {
          const newName = `${prefix}${name}`;

          return fixer.replaceText(node.id, newName);
        },
      });
    }

    return {
      TSInterfaceDeclaration: checkPrefix,
    };
  },
};
