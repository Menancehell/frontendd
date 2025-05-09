// const hamburger =document.getElementById(" hamburger")
// const navlinks =document.getElementById("navbar")
// hamburger.addEventListener('click',()=>{navlinks.classList.toggle('active')});

const text = " Hi i am Mr. S ";
const typedText = document.getElementById('typed-text');
let index = 0;

function type(){
    if(index < text.length){
        typedText.textContent +=text.charAt(index);
        index++;
        setTimeout(type, 200);
    }
}
type();




const projects =[
    {
        image: "image/pexels-cornellana-31291350.jpg",
        title:"Animated Navbar",
        description:" A responsive navigation bar with smooth animations and high graphics",
    },
    {
        image: "image/pexels-cornellana-31291350.jpg",
        title:"HTML",
        description:" A responsive navigation bar with smooth animations and high graphics",
    },
    {
        image: "image/pexels-cornellana-31291350.jpg",
        title:"Css",
        description:" A responsive navigation bar with smooth animations and high graphics",
    },
                        
    
];
const container= document.getElementById("projectcard");
projects.forEach(project =>
{const card= document.createElement("div");
    card.className="projectcontent";
    card.innerHTML=`<img src= "${project.image}" alt="${project.title}"/>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    `;
    container.appendChild(card);
});

const services =[
    {
        image: "image/pexels-cornellana-31291350.jpg",
        title:"Best offer Service",
        description:" A responsive navigation bar with smooth animations and high graphics",
    },
    {
        image: "image/pexels-cornellana-31291350.jpg",
        title:"Fast and reliable Service",
        description:"A responsive navigation bar with smooth animations and high graphics",
    },  
];

const scontainer= document.getElementById("servicecard");
services.forEach(service =>
{const card= document.createElement("div");
    card.className="servicecontent";
    card.innerHTML=`<img src= "${service.image}" alt="${service.title}"/>
    <h3>${service.title}</h3>
    <p>${service.description}</p>
    `;
    scontainer.appendChild(card);
});

const reviews=[
    {
        image: "image/pexels-cornellana-31291350.jpg",
        title:"Hibino Kafka",
        description:"dfghddgdfg",
    },
    {
        image:"image/pexels-cornellana-31291350.jpg",
        title:"Elon Musk",
        description:"dfgdfgdfgdfg",
    },
    {
        image:"image/pexels-cornellana-31291350.jpg",
        title:"Mark Zukurburg",
        description:"dfgdgdfg",
    },
];

const rcontainer=document.getElementById("reviewcard");
reviews.forEach(review =>
{
    const card1=document.createElement("div");
    card1.className="reviewcontent";
    card1.innerHTML=`<img src="${review.image}" alt="${review.title}"/>
    <h3>${review.title}</h3>
    <p>${review.description}</p>
    `;
     rcontainer.appendChild(card1);
}
);