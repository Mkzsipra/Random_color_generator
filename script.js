let h3 = document.querySelector('h3')
const getColor = ()=>{
    const randomNum = Math.floor(Math.random() * 16777215);
    const randomCode = "#"+ randomNum.toString(16);
    document.querySelector('main').style.backgroundColor = randomCode;
    document.querySelector("#color-code").innerHTML = randomCode;
    document.querySelector('.copy-btn').addEventListener('click', ()=>{
        navigator.clipboard.writeText(randomCode);
        h3.innerHTML = `< ${randomCode} > COLOR CODE COPY`;
        h3.style.display = "block"
        
    })
    
}
document.querySelector('.btn').addEventListener('click', ()=>{
    h3.innerHTML=""
    h3.style.display = "none"

    getColor()
})
getColor()