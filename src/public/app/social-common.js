$(document).ready( () => {

    $('#navbar').load('./components/navbar.html',loginIfNeeded);
    $('#footer').load('./components/footer.html');
    $('#content').load('./components/all-posts.html');
})

function loginIfNeeded(){
    let currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null;
    
    if(currentUser==null){
        $.post('/api/user',{},(user) => {
            window.localStorage.user = JSON.stringify(user);
            currentUser = user;
        })
    }
    $('#nav-username').text(currentUser.username);
}
