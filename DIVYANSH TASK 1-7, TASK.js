
body {
    
/* Style the background with a gradient */
body {
    background: linear-gradient(135deg, #3498db, #e74c3c);
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Style the login form container */
.login-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
}

/* Style the form fields */
.form-input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

/* Style the "Remember Me" checkbox */
.remember-me {
    margin: 10px 0;
}

/* Style the buttons */
.login-btn, .cancel-btn {
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.cancel-btn {
    background-color: #e74c3c;
}

.login-btn:hover, .cancel-btn:hover {
    background-color: #2980b9;
}

/* Style the "Forgot Password" link */
.forgot-password {
    text-decoration: none;
    color: #3498db;
    display: block;
    margin-top: 10px;
}

.forgot-password:hover {
    text-decoration: underline;
}

/* Style the model image */
.model-image {
    display: block;
    margin: 20px auto;
    max-width: 100px;
    border-radius: 50%;
}

}