/* =========================================
   SIPWISE - MOCK CUSTOMER DATA
========================================= */

/*
    This is temporary dummy data.

    Later, when the Spring Boot backend is ready,
    this array can be replaced with data received
    from the backend API.

    Each customer has:
    - id
    - age
    - salary
    - balance
    - consistency
    - propensity
*/

const customers = [

    {
        id: "C1024",
        age: 28,
        salary: 60000,
        balance: 25000,
        consistency: 86,
        propensity: 87
    },

    {
        id: "C1056",
        age: 31,
        salary: 70000,
        balance: 31000,
        consistency: 91,
        propensity: 84
    },

    {
        id: "C1082",
        age: 27,
        salary: 42000,
        balance: 12000,
        consistency: 72,
        propensity: 52
    },

    {
        id: "C1098",
        age: 24,
        salary: 28000,
        balance: 5000,
        consistency: 41,
        propensity: 21
    },

    {
        id: "C1112",
        age: 35,
        salary: 85000,
        balance: 42000,
        consistency: 94,
        propensity: 91
    },

    {
        id: "C1145",
        age: 29,
        salary: 55000,
        balance: 22000,
        consistency: 83,
        propensity: 79
    },

    {
        id: "C1178",
        age: 41,
        salary: 92000,
        balance: 58000,
        consistency: 96,
        propensity: 88
    },

    {
        id: "C1203",
        age: 26,
        salary: 38000,
        balance: 11000,
        consistency: 69,
        propensity: 47
    },

    {
        id: "C1231",
        age: 33,
        salary: 68000,
        balance: 27000,
        consistency: 88,
        propensity: 81
    },

    {
        id: "C1267",
        age: 23,
        salary: 30000,
        balance: 4500,
        consistency: 38,
        propensity: 18
    },

    {
        id: "C1290",
        age: 37,
        salary: 78000,
        balance: 36000,
        consistency: 90,
        propensity: 85
    },

    {
        id: "C1315",
        age: 30,
        salary: 50000,
        balance: 19000,
        consistency: 75,
        propensity: 63
    },

    {
        id: "C1342",
        age: 25,
        salary: 35000,
        balance: 7000,
        consistency: 48,
        propensity: 29
    },

    {
        id: "C1379",
        age: 44,
        salary: 105000,
        balance: 65000,
        consistency: 97,
        propensity: 93
    },

    {
        id: "C1408",
        age: 32,
        salary: 62000,
        balance: 24000,
        consistency: 84,
        propensity: 76
    },

    {
        id: "C1436",
        age: 39,
        salary: 90000,
        balance: 45000,
        consistency: 92,
        propensity: 89
    },

    {
        id: "C1472",
        age: 28,
        salary: 45000,
        balance: 14000,
        consistency: 70,
        propensity: 55
    },

    {
        id: "C1501",
        age: 22,
        salary: 26000,
        balance: 3500,
        consistency: 35,
        propensity: 15
    }

];


/* =========================================
   GET HTML ELEMENTS
========================================= */

const totalCustomersElement =
    document.getElementById("totalCustomers");

const highCustomersElement =
    document.getElementById("highCustomers");

const mediumCustomersElement =
    document.getElementById("mediumCustomers");

const lowCustomersElement =
    document.getElementById("lowCustomers");

const highPercentageElement =
    document.getElementById("highPercentage");

const mediumPercentageElement =
    document.getElementById("mediumPercentage");

const lowPercentageElement =
    document.getElementById("lowPercentage");

const highProgress =
    document.getElementById("highProgress");

const mediumProgress =
    document.getElementById("mediumProgress");

const lowProgress =
    document.getElementById("lowProgress");

const tableBody =
    document.getElementById("customerTableBody");

const searchInput =
    document.getElementById("searchInput");

const segmentFilter =
    document.getElementById("segmentFilter");

const noResults =
    document.getElementById("noResults");

const customerModal =
    document.getElementById("customerModal");

const closeModal =
    document.getElementById("closeModal");


/* =========================================
   DETERMINE CUSTOMER SEGMENT
========================================= */

/*
    Propensity rules:

    70 - 100 = High
    40 - 69  = Medium
    0 - 39   = Low
*/

function getSegment(propensity) {

    if (propensity >= 70) {
        return "High";
    }

    if (propensity >= 40) {
        return "Medium";
    }

    return "Low";
}


/* =========================================
   GET RECOMMENDED NEXT ACTION
========================================= */

function getNextAction(segment) {

    if (segment === "High") {
        return "Prioritize SIP invitation";
    }

    if (segment === "Medium") {
        return "Consider targeted communication";
    }

    return "No immediate action";
}


/* =========================================
   GET CUSTOMER EXPLANATION
========================================= */

function getExplanation(customer) {

    const segment = getSegment(customer.propensity);

    if (segment === "High") {

        return "Customer shows stable salary credits, healthy average balance and high balance consistency.";

    }

    if (segment === "Medium") {

        return "Customer shows moderate financial stability and may respond well to targeted SIP communication.";

    }

    return "Customer currently shows lower balance consistency and lower financial capacity for an immediate SIP invitation.";
}


/* =========================================
   FORMAT MONEY
========================================= */

/*
    Converts:

    60000

    into:

    ₹60,000
*/

function formatMoney(amount) {

    return "₹" + amount.toLocaleString("en-IN");

}


/* =========================================
   CALCULATE DASHBOARD STATISTICS
========================================= */

function updateDashboardStats() {

    const total = customers.length;

    let high = 0;
    let medium = 0;
    let low = 0;


    // Check every customer
    customers.forEach(function(customer) {

        const segment = getSegment(customer.propensity);

        if (segment === "High") {
            high++;
        }

        else if (segment === "Medium") {
            medium++;
        }

        else {
            low++;
        }

    });


    // Update overview cards
    totalCustomersElement.textContent = total;
    highCustomersElement.textContent = high;
    mediumCustomersElement.textContent = medium;
    lowCustomersElement.textContent = low;


    // Calculate percentages
    const highPercentage = Math.round((high / total) * 100);
    const mediumPercentage = Math.round((medium / total) * 100);
    const lowPercentage = Math.round((low / total) * 100);


    // Update percentage text
    highPercentageElement.textContent =
        highPercentage + "%";

    mediumPercentageElement.textContent =
        mediumPercentage + "%";

    lowPercentageElement.textContent =
        lowPercentage + "%";


    // Update progress bars
    highProgress.style.width =
        highPercentage + "%";

    mediumProgress.style.width =
        mediumPercentage + "%";

    lowProgress.style.width =
        lowPercentage + "%";
}


/* =========================================
   RENDER CUSTOMER TABLE
========================================= */

/*
    This function receives a list of customers
    and creates the table rows dynamically.
*/

function renderCustomers(customerList) {

    // Clear the old table
    tableBody.innerHTML = "";


    // If there are no results
    if (customerList.length === 0) {

        noResults.style.display = "block";

        return;

    }

    noResults.style.display = "none";


    // Create a row for every customer
    customerList.forEach(function(customer) {

        const segment = getSegment(customer.propensity);


        // Create table row
        const row = document.createElement("tr");


        /*
            Instead of writing HTML directly inside
            JavaScript, we create the row using
            template literals.

            This keeps the code easy to understand.
        */

        row.innerHTML = `

            <td>
                <span class="customer-id">
                    ${customer.id}
                </span>
            </td>

            <td>
                ${customer.age}
            </td>

            <td>
                <span class="money">
                    ${formatMoney(customer.salary)}
                </span>
            </td>

            <td>
                <span class="money">
                    ${formatMoney(customer.balance)}
                </span>
            </td>

            <td>
                ${customer.consistency}%
            </td>

            <td>
                <strong>
                    ${customer.propensity}%
                </strong>
            </td>

            <td>
                <span class="badge ${segment.toLowerCase()}">
                    ${segment}
                </span>
            </td>

            <td>
                <button
                    class="view-button"
                    data-customer-id="${customer.id}">
                    View
                </button>
            </td>

        `;


        // Add row to table
        tableBody.appendChild(row);

    });


    /*
        Find all View buttons that were just created.
    */

    const viewButtons =
        document.querySelectorAll(".view-button");


    viewButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const customerId =
                button.getAttribute("data-customer-id");

            openCustomerModal(customerId);

        });

    });

}


/* =========================================
   SEARCH AND FILTER CUSTOMERS
========================================= */

function filterCustomers() {

    /*
        Convert search text to lowercase.

        This makes the search case-insensitive.
    */

    const searchText =
        searchInput.value.toLowerCase().trim();


    const selectedSegment =
        segmentFilter.value;


    /*
        Filter the original customer array.
    */

    const filteredCustomers =
        customers.filter(function(customer) {

            const segment =
                getSegment(customer.propensity);


            // Check customer ID
            const matchesSearch =
                customer.id
                    .toLowerCase()
                    .includes(searchText);


            // Check segment
            const matchesSegment =
                selectedSegment === "All" ||
                segment === selectedSegment;


            return matchesSearch && matchesSegment;

        });


    // Display filtered customers
    renderCustomers(filteredCustomers);
}


/* =========================================
   OPEN CUSTOMER DETAILS MODAL
========================================= */

function openCustomerModal(customerId) {

    /*
        Find the selected customer from
        the main customer array.
    */

    const customer =
        customers.find(function(item) {

            return item.id === customerId;

        });


    // Stop if customer doesn't exist
    if (!customer) {
        return;
    }


    const segment =
        getSegment(customer.propensity);


    const action =
        getNextAction(segment);


    const explanation =
        getExplanation(customer);


    /* -------------------------
       Fill modal information
    -------------------------- */

    document.getElementById("modalCustomerId")
        .textContent = "Customer " + customer.id;

    document.getElementById("modalAge")
        .textContent = customer.age;

    document.getElementById("modalSalary")
        .textContent = formatMoney(customer.salary);

    document.getElementById("modalBalance")
        .textContent = formatMoney(customer.balance);

    document.getElementById("modalConsistency")
        .textContent = customer.consistency + "%";

    document.getElementById("modalPropensity")
        .textContent = customer.propensity + "%";

    document.getElementById("modalExplanation")
        .textContent = explanation;

    document.getElementById("modalAction")
        .textContent = action;


    /* -------------------------
       Update segment badge
    -------------------------- */

    const modalSegment =
        document.getElementById("modalSegment");

    modalSegment.textContent =
        segment.toUpperCase();

    modalSegment.className =
        "badge " + segment.toLowerCase();


    /* -------------------------
       Update propensity bar
    -------------------------- */

    const modalScoreBar =
        document.getElementById("modalScoreBar");

    modalScoreBar.style.width =
        customer.propensity + "%";


    /*
        Finally display the modal.
    */

    customerModal.classList.add("show");

}


/* =========================================
   CLOSE MODAL
========================================= */

function closeCustomerModal() {

    customerModal.classList.remove("show");

}


/* =========================================
   EVENT LISTENERS
========================================= */

/*
    Whenever the user types something
    in the search box, filter the table.
*/

searchInput.addEventListener(
    "input",
    filterCustomers
);


/*
    Whenever the user changes the
    dropdown, filter the table.
*/

segmentFilter.addEventListener(
    "change",
    filterCustomers
);


/*
    Close modal when X button is clicked.
*/

closeModal.addEventListener(
    "click",
    closeCustomerModal
);


/*
    Close modal when the user clicks
    outside the modal.
*/

customerModal.addEventListener(
    "click",
    function(event) {

        if (event.target === customerModal) {

            closeCustomerModal();

        }

    }
);


/* =========================================
   INITIALIZE DASHBOARD
========================================= */

/*
    These functions run when the website
    first loads.
*/

updateDashboardStats();

renderCustomers(customers);

// Sidebar navigation
document.querySelectorAll(".nav-item").forEach(function (item) {
    item.addEventListener("click", function (event) {
        event.preventDefault();

        const target = this.getAttribute("href");

        if (target && target !== "#") {
            document.querySelector(target).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
/* ================================
   DARK MODE
================================ */

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.querySelector(".nav-icon").textContent = "☀️";
        darkModeBtn.querySelector("span:last-child").textContent = "Light Mode";
    } else {
        darkModeBtn.querySelector(".nav-icon").textContent = "🌙";
        darkModeBtn.querySelector("span:last-child").textContent = "Dark Mode";
    }

});