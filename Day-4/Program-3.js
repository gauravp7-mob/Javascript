fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then(response => {
    if(!response.ok){
        throw new Error("Something is wrong")
    }
    else{
        return response.json();
    }
}).then(data => {
    console.log(data)
}).catch(e=>{
    console.log(`Error ${e.message}`)
})

