/* =========================================
   MOBİL MENÜ
========================================= */

function toggleMenu() {

    const menu = document.querySelector(".menu");

    menu.classList.toggle("open");

}



/* =========================================
   ÜRÜN FİLTRELEME
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const buttons =
        document.querySelectorAll(".filter-button");

    const products =
        document.querySelectorAll(".catalog-card");


    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const filter =
                this.getAttribute("data-filter");


            buttons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            this.classList.add("active");


            products.forEach(function (product) {

                const category =
                    product.getAttribute("data-category");


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    product.classList.remove("hidden");

                } else {

                    product.classList.add("hidden");

                }

            });

        });

    });

});



/* =========================================
   TEKLİF FORMU
========================================= */

function sendMail(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const email =
        document.getElementById("email").value;

    const product =
        document.getElementById("product").value;

    const message =
        document.getElementById("message").value;


    const subject =
        "Yaşar Kauçuk - Teklif Talebi";


    const body =

        "Ad / Firma: " +
        name +

        "\nTelefon: " +
        phone +

        "\nE-posta: " +
        email +

        "\nÜrün: " +
        product +

        "\n\nMesaj:\n" +
        message;


    const mailto =

        "mailto:yasarkaucuk@outlook.com" +

        "?subject=" +
        encodeURIComponent(subject) +

        "&body=" +
        encodeURIComponent(body);


    window.location.href = mailto;

}