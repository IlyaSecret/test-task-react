const modal = $.modal()
window.onload = () => {
    const status = document.querySelector(".send-status");
    const close = (e) => {
        if (e.key === "Escape") {
            modal.close()
        }
    }

    const sendData = async (username, useremail) => {
        try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users",
                {
                    method: "POST",
                    header: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: username,
                        email: useremail
                    })
                }
            );
            const data = await response.json();
            status.classList.add("success")
        }
       catch(e) {
            status.classList.add("error")
       } 
    }



    document.querySelector('.open-modal').addEventListener('click', modal.open);
    window.addEventListener("keydown", close)

    document.getElementById('send-button').addEventListener("click", function(e) {
        status.classList.remove("validation-error")
        status.classList.remove("error")
        status.classList.remove("success")
        const username = document.getElementById("user-name").value
        const useremail = document.getElementById("user-email").value
        e.preventDefault()
        if (!useremail || !username) {
            status.classList.add("validation-error")
        }else {
            sendData(username, useremail);
        }
        
    })
}