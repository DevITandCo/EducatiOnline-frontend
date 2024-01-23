<template>
    <header class="header">
        <a class="header-brand" href="#">
            <img alt="Logo Edu" src="@/assets/logo-edu.png">
        </a>
        <ul class="header-nav">
            <li class="nav-item">
                <router-link class="nav-link" to="/">Acceuil <span class="visually-hidden"></span></router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/connection">Connection <span class="visually-hidden"></span></router-link>
            </li>
        </ul>
        <form class="search-form">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search">
            <button class="search-button" type="submit">Search</button>
        </form>
    </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style>
.header {
    background-color: #0375e3; /* Match the footer's background color */
    color: #ffffff; /* Match the footer's text color */
    padding: 10px 20px; /* Adjust padding to give more space */
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.9em; /* Match the footer's font size */
}

.header-brand img {
    max-height: 50px; /* Adjusted for a balanced look */
    width: auto;
    height: auto;
}

.header-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
}

.nav-item {
    margin: 0 15px; /* Adjusted for a balanced look */
}

.nav-link {
    color: #ffffff; /* Match the footer's text color */
    transition: color 0.2s, text-decoration 0.2s;
    text-decoration: none; 
}

.nav-link:hover,
.nav-item.active .nav-link {
    color: #adb5bd; /* A lighter shade for hover and active states */
    text-decoration: underline;
}

.search-form {
    display: flex;
    align-items: center;
}

.form-control {
    padding: 5px 10px;
    margin-right: 10px;
    border: 1px solid #adb5bd; /* A border color that stands out less */
    background-color: #495057; /* Darker background for the input */
    color: #ffffff; /* White text color for the input */
}

.search-button {
    padding: 5px 15px;
    background-color: #6c757d; /* Darker background for the button */
    border: none; /* Remove default border */
    color: #ffffff; /* White text color for the button */
    cursor: pointer; /* Pointer cursor on hover */
}

.search-button:hover {
    background-color: #5a6268; /* A slightly lighter shade for hover */
}

/* Additional styles for dropdown, disabled links, etc., if needed */
</style>
