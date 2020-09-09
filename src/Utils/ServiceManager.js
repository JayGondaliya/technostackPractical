

export async function callApi(url, body, onSuccessResponse, onFailureResponse) {


    var param = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
    console.log("params ::::::: ", param)
    fetch(url,param).then(errorHandler).then(response=> response.json()).then(json=>onSuccessResponse(json))
    .catch(errors=>onFailureResponse(errors))
}

const errorHandler = (response) => {

    console.log("response :::::::: ", response)
    if(response.status >= 200 && response.status < 300){
        return Promise.resolve(response)
    }else{
        var error = new Error(response.statusText || response.status);
        error.response = response
        return Promise.reject(error)
    }
}