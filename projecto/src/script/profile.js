let closeProfileButton=select('.close-profile');
let profileContainer=select('.profile-container');

let showProfile=select('.show-profile');

showProfile.addEventListener('click',(event)=>{
    profileContainer.style.display='flex';
});

closeProfileButton.addEventListener('click',(event)=>{
    profileContainer.style.display='none';
});