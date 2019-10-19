const fetcher = (url) => {
    return fetch(url)
}

const resolveJosn = (p) => {
    return p.json()
}
const timeout = (p, time) => {
    setTimeout((_, reject) => {
       reject('Timout!') 
    }, (time));

    return Promise.race([p])
}



fetcher("").then(resolveJosn).then((result)=>{
    console.log(result)
}).catch((error) => {
    console.log(error)
}).finally(()=>{

})
