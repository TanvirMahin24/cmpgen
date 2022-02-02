# Cmpgen | CLI to genarate React.js Compontns easily

Official Documentation: [https://devnops.tech/cmpgen/](https://devnops.tech/cmpgen/)

## Installation
`
    npm install cmpgen -g
`

## Usage
`
    cmpgen ComponentName [options]
`

## Available Options
 - -h, --help:
  Show this help message and exit.
 - -v, --version:
    Show version and exit.
 - -c, --css:
    Type of stylesheet valid values: css, scss, sass.
 - -i, --index:
    If index.js file is genarated.

## Config file
Make sure you have a config file in your project root directory. Config file name should be config.cmpgen.json.

`
    {
        "dir":"./project/",
        "index":false,
        "css":"sass"
    }
` 

The dir option sets the directory where the component will be created.   

## Help me make more packages like this by becoming Patreon
# [Patreon Link](https://www.patreon.com/tanvirmahin24)