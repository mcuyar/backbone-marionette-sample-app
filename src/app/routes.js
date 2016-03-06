import showIndexPage from "./action/index/show";
import showContactsIndexPage from "./action/contacts/index";
import showContactPage from "./action/contacts/show";
import createContactPage from "./action/contacts/create";

export var routes = {
    "": "home",
    "contacts": "contacts",
    "contacts/create": "contact-create",
    "contacts/:id/view": "contact"
};

export var actions = {
    "home": showIndexPage,
    "contacts": showContactsIndexPage,
    "contact-create": createContactPage,
    "contact": showContactPage
};