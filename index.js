console.log('This is CV Screener');

// Data is an array of objects which contains information about candidates
const data = [
    {
       name: 'Vipul Goyal',
       age: 19,
       city: 'Jaipur',
       language: 'Js',
       framework: 'node.js',
       image: 'https://randomuser.me/api/portraits/med/men/82.jpg'
    },   
   
    {
       name: 'Vinay saraf',
       age: 20,
       city: 'Sikar',
       language: 'C/C++',
       framework: 'dev C',
       image: 'https://randomuser.me/api/portraits/med/men/67.jpg'
    },

    {
       name: 'Vishal Kumar',
       age: 21,
       city: 'Jaipur',
       language: 'python',
       framework: 'Django',
       image: 'https://randomuser.me/api/portraits/med/men/80.jpg'
    },

    {
        name: 'Shubham Bhargava',
        age: 20,
        city: 'Delhi',
        language: 'python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/med/men/79.jpg'
    }
]

// CV Iterator
function cvIterator(profiles){
    let nextIndex = 0;
    return{
        next: function(){
            // turnery operator:- statement ? true condition:false condition
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} : {done: true}
        }
    };
}
const candidates = cvIterator(data);

nextCV();
// Button Listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV); 


function nextCV(){
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;

    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">with ${currentCandidate.framework}</li>
  </ul>`
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }
}



