const {listContacts, getContactById, removeContact, addContact} = require("./contacts");

const name = "Kirill";
const email = "gmailmail@gmail.com";
const phone = "1234567890";

(async () => {
    // console.log(await listContacts());

    // console.log(await getContactById("AeHIrLTr6JkxGE6SN-0Rw"));

    // console.log(await removeContact("AeHIrLTr6JkxGE6SN-0Rw"));

    console.log(await addContact(name, email, phone));
})();
