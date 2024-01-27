
let observer=new IntersectionObserver((entries)=>
{
    entries.forEach((entry)=>
    {
        console.log(entry)
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
        else
        {
            entry.target.classList.remove('show');
        }
    });
});

let hidElements=document.querySelectorAll('.hidden');
hidElements.forEach((el)=> observer.observe(el));