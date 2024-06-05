class database{
    them(userApi,object){
        axios.post(userApi,object)
            .then(function(response){

            })
            .catch(function(error){
                console.log('POST error:',error);
                });
    }
    async doc(courseApi){
        return await axios.get(courseApi)
        .then(function(response){
            return response.data;
        })
        .catch(function(error){
            console.log("GET Error:", error);
        })
    }
}