node-batch-geocoder
===================

Reads a list of places and returns a geolocated CSV file.

### Instructions

1. Clone the repo:
   
        git clone https://github.com/javierarce/node-batch-geocoder.git

2. Install the required modules:

        cd node-batch-geocoder
        npm install

3. Create the location input file:

       echo "Madrid, Spain" > locations.txt
       
4. Run the geocoder:

      node app.js
      
After the script is finished, you'll get a geocoded CSV file called ```locations.csv```.
