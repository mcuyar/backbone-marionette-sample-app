import showIndexPage from "./action/index/show";
import showContactsIndexPage from "./action/contacts/index";
import showContactPage from "./action/contacts/show";

export var routes = {
    "": "home",
    "contacts": "contacts",
    "contacts/:id/view": "contact"
};

export var actions = {
    "home": showIndexPage,
    "contacts": showContactsIndexPage,
    "contact": showContactPage
} ;