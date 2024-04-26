/*
 *
 *   "https://randomuser.me/api" //this is an api provider who provides different result on every refresh
 * 
 */


// Directly exporting this function
export const getpost =async ()=>{
    var dataArr = [];

    // for loop to get multiple result at once
    for (let i = 0; i < 5; i++) {
        let response = await fetch("https://randomuser.me/api",{
            method: "GET"
        })
    
        var data = await response.json(); // making object from json data
        dataArr.push(data.results[0])   // pushing data to the Array
    }

    return dataArr; // function will return DataArray and this can be get by .then(data =>{})
}