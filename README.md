# ChowSauce
Do you eat food? Are you you too lazy to cook for yourself? Are you not really into typing?

If you answered yes to these questions, then ChowSauce if for you!

ChowSauce is the simplest food finding app out there! All you need to do is tap on the emoji of your choosing, and WABAM!! An incredible list of delectable restaurants appears on a beautiful map!

ChowSauce is a AngularJS app running on a Node.js/Express server. The application uses a combination of the HTML5 GeoLocation API and reverse IP lookup to determine the client's location and provide an appropriate list of restaurants given their food choices. The map is presented with a custom styled MapBox style. The restaurants are queried from the Node.js server via the server side Yelp Fusion API and passed back to the client through AJAX responses.

The site is hosted on Heroku at https://chowsauce.herokuapp.com

Enjoy!

## Build & development

Setup - ubuntu
```
npm init
npm update
npm install

# install grunt
# sudo apt install node-grunt-cli < Don't do this
sudo npm install --force -g grunt-cli
sudo npm install -g bower
bower install
```

```
npm install --force -g grunt-cli
npm install -g bower
bower install
```

Set api keys
```
heroku login
source set_local_api_keys.sh
chmod +x set_heroku_api_keys.sh
./set_heroku_api_keys.sh
```

Run `grunt` for building and `grunt serve` for preview.

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Testing

Running `grunt test` will run the unit tests with karma.
