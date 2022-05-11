export function getNameAndCategory(arr) {
const arr_name=[]
const array =[]
const arr_image=[]

    for(let i=0; i<arr.length; i++) {

    for(let key in arr[i]) {

   if( key == 'name'){

   arr_name.push(arr[i][key])


   }
   
   if (key == "image" ) {

    arr_image.push(arr[i][key])

}

}

    }

    for (let i=0; i<22; i++){

        array.push({name: arr_name[i], image: arr_image[i]})
    }

  
return array

}