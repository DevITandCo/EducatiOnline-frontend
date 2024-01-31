<template>
    <footer class="footer">
        <div class="footer-content">
            <p class="brand-name">EducatiONLINE</p>
            <span class="copyright">&copy;2023 - 2024</span>
        </div>
        <div class="footer-content">
            <li class="footer-item">
                <router-link class="nav-link" to="/contact">Nous contacter <span class="visually-hidden"></span></router-link>
            </li>
            <li class="footer-item">
                <router-link class="nav-link" to="/faq">FAQ<span class="visually-hidden"></span></router-link>
            </li>
        </div>
        <div class="footer-content">
            <span class="powered-by">Powered by</span>
            <p class="company-name">DevIT&Co</p>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
.footer {
    background-color: #0375e3; /* Dark background for the footer */
    color: #ffffff; /* White text color */
    padding: 20px; /* Some padding around the content */
    display: flex; /* Using flexbox for layout */
    justify-content: space-between; /* Space between the two divs */
    align-items: center; /* Center items vertically */
    font-size: 0.9em; /* Slightly smaller font size for the footer */
}

.footer-content {
    list-style: none;
    display: flex; /* Using flexbox for layout within the content divs */
    flex-direction: column; /* Stack children vertically */
    align-items: center; /* Center align the items */
    text-align: center; /* Center the text */
}

.footer-item {
    padding: 0;
    margin: 0;
}
.brand-name {
    font-weight: bold; /* Make the brand name bold */
    margin-bottom: 5px; /* Space between the brand name and the copyright text */
}

.company-name {
    font-weight: bold; /* Make the company name bold */
}

/* Add more styles as needed */
</style>
