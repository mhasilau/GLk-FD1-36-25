export const page1 = () => {
    console.log('page1');

    const login = document.getElementById('login');
    const password = document.getElementById('password');
    const loginBtn = document.getElementById('login-btn');

    loginBtn.onclick = () => {
        console.log({
            username: login.value,
            password: login.value,
        })
    }

}