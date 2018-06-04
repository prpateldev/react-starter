module.exports = {
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "prettier"
    ],
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [ 
        // "airbnb-base" 
        "airbnb",
        "prettier",
        "plugin:prettier/recommended"
    ],
    "rules":{
        "comma-dangle": ["error", "never"],
        "indent": ["error", 2],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "prettier/prettier": "error"
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    }
};
