module.exports = {
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [ 
        // "airbnb-base" 
        "airbnb"
    ],
    "rules":{
        "comma-dangle": ["error", "never"],
        "indent": ["error", 2],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    }
};
