# yorimichi-backend

# curl
/setDest
新宿駅->都庁
curl -X POST -H "Content-Type: application/json" -d '{"currentLoc": {"ido": 35.689611, "keido": 139.6983826}, "destinationLoc": {"ido": 35.6893138, "keido": 139.6900077}}' http://localhost:8080/api/setDest

// これあかん
curl -X POST -H "Content-Type: application/json" -d '{"yrmcList": "["{"name": "Capricciosa", "coordinate": {"ido": 35.6871971, "keido": 139.6929855}, "imagePath": "./sample.jpeg", "info": "something to discribe a yorimichi", "category", ""}", "{"name": "Capricciosa", "coordinate": {"ido": 35.6871971, "keido": 139.6929855}, "imagePath": "./sample.jpeg", "info": "something to discribe a yorimichi", "category", ""}"]"}' http://localhost:8080/api/setYrmc

/setYrmc
curl -X POST -H "Content-Type: application/json" -d '{"yrmcList": ""}' http://localhost:8080/api/setYrmc

