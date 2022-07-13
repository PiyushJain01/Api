let box= document.querySelector('.box')
let btn=document.querySelector('.circle')
btn.addEventListener('click',async()=>{
    const req= await fetch('https://api.adviceslip.com/advice');
     const res= await req.json()
     console.log(res.slip['advice']);
     console.log(res.slip['id']);
     advice =res.slip['advice']
     id =res.slip['id']
     document.querySelector('.advice').innerHTML=advice;
     document.querySelector('.id').innerHTML=`ADVICE #${id}`;
})