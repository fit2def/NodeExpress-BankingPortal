const fs = require('fs');
const path = require('path');

function updateAccounts(accounts) {
    const accountsJSON = JSON.stringify(accounts, null, 4);
    fs.writeFileSync(
        path.join(__dirname, 'json', 'accounts.json'),
        accountsJSON,
        'utf8'
    );
}

module.exports = {
    updateAccounts
} 
