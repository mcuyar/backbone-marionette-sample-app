import showIndexPage from "./action/index/show";
import showContactsIndexPage from "./action/contacts/show";

export var routes = {
    "": "home",
    "contacts": "contacts"
};

export var actions = {
    "home": showIndexPage,
    "contacts": showContactsIndexPage
} ;