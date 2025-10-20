let storeAccount = [];
            const data = localStorage.getItem('storeAccount');
            if (data) {
                storeAccount = JSON.parse(data);
            }
            let btn = document.querySelector('button');
            btn.addEventListener('click', () => {
                let email = document.getElementById('email').value.trim();
                let password = document.getElementById('password').value.trim();
                let noti = document.getElementById('notification');

                noti.style.display = 'none';

                if (!email || !password) {
                    noti.innerText = 'Email or password do not empty !';
                    noti.style.display = 'flex';
                    noti.style.color = '#fd2323';
                    return;
                }
                let found = storeAccount.find((acc) => acc.email === email);
                if (!found) {
                    noti.innerText =
                        'Email or password is not correct . Please try again';
                    noti.style.display = 'flex';
                    noti.style.color = '#fd2323';
                    return;
                }
                if (password === found.password) {
                    noti.innerText = 'Login sucessfully ! Welcome';
                    noti.style.display = 'flex';
                    noti.style.color = 'rgb(65, 244, 71)';
                    window.location.href = 'hello.html';
                    return;
                } else {
                    noti.innerText =
                        'Email or password is not correct . Please try again';
                    noti.style.display = 'flex';
                    noti.style.color = '#fd2323';
                    return;
                }
            });