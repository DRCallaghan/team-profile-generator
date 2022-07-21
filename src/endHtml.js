// Including packages needed for this application
const fs = require('fs');

// starter function for a closing the html
const endHtml = () => {
    fs.appendFile('./dist/index.html',
        `
                </div>
            </div>
        </main>
    </body>

    </html>`,
        (err) => {
            if (err)
                throw err;
            console.log(`\n----------------------------\nSuccessfully finished index.html!`);
        });
}

module.exports = endHtml;