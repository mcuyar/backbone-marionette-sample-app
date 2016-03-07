import showIndexPage from "./action/index/show";
import showContactsIndexPage from "./action/contacts/index";
import showContactPage from "./action/contacts/show";
import createContactPage from "./action/contacts/create";
import editContactPage from "./action/contacts/edit";
import deleteContactPage from "./action/contacts/delete";

export var routes = {
    "": "home",
    "contacts": "contacts",
    "contacts/create": "contact-create",
    "contacts/:id/edit": "contact-edit",
    "contacts/:id/delete": "contact-delete",
    "contacts/:id/view": "contact"
};

export var actions = {
    "home": showIndexPage,
    "contacts": showContactsIndexPage,
    "contact-create": createContactPage,
    "contact-edit": editContactPage,
    "contact-delete": deleteContactPage,
    "contact": showContactPage
};