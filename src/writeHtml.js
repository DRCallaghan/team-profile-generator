// Including packages needed for this application
const fs = require('fs');

// starter function for a basic html header
const startHtml = () => {
    fs.appendFile('../dist/index.html',
        `<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>My Team Cards</title>
    <link rel="stylesheet" href="style.css">
    <!-- ensuring it looks good on mobile -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- adding favicon -->
    <link rel="icon" type="image/x-icon" href="https://i.imgur.com/qpV5XuE.png">
    <!-- adding google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet">
    <!-- adding bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
    <!-- adding fontawesome icons -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
    integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
</head>

<body class="bg-dark">
    <header>
        <div class="jumbotron jumbotron-fluid bg-info text-center">
            <h1>My Team</h1>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center">`,
        (err) => {
            if (err)
                throw err;
            console.log(`Successfully started index.html!\n`);
        });
}

const endHtml = () => {
    fs.appendFile('../dist/index.html',
        `
                </div>
            </div>
        </main>
    </body>

    </html>`,
        (err) => {
            if (err)
                throw err;
            console.log(`Successfully finished index.html!\n`);
        });
}

// exporting the functions
exports.startHtml = startHtml;
exports.endHtml = endHtml;