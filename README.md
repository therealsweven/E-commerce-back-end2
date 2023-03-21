# E-commerce Back End

![GitHub License](https://img.shields.io/badge/License-MIT-blue)

## Description

This is a back-end design for an e-commerce web application. The back-end structure allows for manipulation of an SQL database using GET, PUT, POST, and DELETE routes implemented into the code.

Link to walkthrough video: https://drive.google.com/drive/folders/1XWi2WlUYBbgVkAJux1bZNoY0bt_ZXVF9?usp=sharing

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Contributing](#contributing)

- [Questions](#Questions)

## Installation

N/A

## Usage

The application may be intiated by running "node server.js" or "npm start" in the CLI after navigating to the root directory for the application. Route requests may be made to localhost:3001/api/ ---> products, categories, or tags. All products, categories, or tags may be retrieved using a get request. For updates and deletions, please tag on the ID number of the item you wish to update or delete, ex: /api/products/4. For POST and PUT requests, the request bodies should keep in mind the following object structures when making the request to the back-end.

Products:

```
    {
      "product_name": "Basketball",
      "price": 200.00,
      "stock": 3,
      "tagIds": [1, 2, 3, 4]
    }
```

Categories:

```
    {
      "category_name": "Basketball"
    }
```

Tags:

```
    {
      "tag_name": "purple"
    }
```

There is a bug in the PUT route for products that existed within the starter code.

## License

MIT

## Contributing

N/A

## Questions

My Github profile is https://github.com/therealsweven/.
Please reach out to borntobebobby@gmail.com with any additional questions.
