// const { nanoid } = require("nanoid");

const fs = require("fs").promises;
const path = require("path");


const contactsPath = path.join(process.cwd(), "./db/contacts.json");

async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath);
        return JSON.parse(data.toString());
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

async function getContactById(contactId) {
    const contacts = await listContacts();

    return contacts.find(contact => contact.id === contactId) || null;
}

async function removeContact(contactId) {
    const contacts = await listContacts();
    const indexToRemove = contacts.findIndex(contact => contact.id === contactId);
    if (indexToRemove === -1) {
        return null;
    }
    
    const removedContact = contacts.splice(indexToRemove, 1)[0];
    return removedContact;
}

function generateUniqueId() {
    return Math.floor(Math.random() * 100);
}

async function addContact(name, email, phone) {
    const newCont = {
        "id": generateUniqueId(),
        "name": `${name}`,
        "email": `${email}`,
        "phone": `${phone}`,
    }
    await fs.appendFile(contactsPath, newCont);
    return newCont;
}

module.exports = { listContacts, getContactById, removeContact, addContact };