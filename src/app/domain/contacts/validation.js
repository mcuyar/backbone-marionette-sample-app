export default {

    username: [{
        required: true,
        msg: 'Please enter a username'
    },{
        minLength: 6,
        msg: 'Please enter a username with at least six characters'
    },{
        pattern: /^[A-Za-z0-9]/,
        msg:  'Letters and numbers only'
    }],

    'first_name': [{
        required: true,
        msg: 'Please enter a first name'
    },{
        minLength: 3,
        msg: 'Must be at least three characters'
    }],

    'last_name': [{
        required: true,
        msg: 'Please enter a last name'
    },{
        minLength: 3,
        msg: 'Must be at least three characters'
    }],

    phone: {
        required: false,
        pattern: /^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}/,
        msg: 'Please enter a valid phone number'
    },

    cell: {
        required: false,
        pattern: /^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}/,
        msg: 'Please enter a valid phone number'
    },

    email: [{
        required: true,
        msg: 'Please enter an email address'
    },{
        pattern: 'email',
        msg: 'Please enter a valid email'
    }],

    'street': {
        required: true,
        msg: 'Please enter a street address'
    },

    'city': {
        required: true,
        msg: 'Please enter a city'
    },

    'state': {
        required: true,
        msg: 'Please enter a state'
    },

    'zip': [{
        required: true,
        msg: 'Please enter a zip code'
    },{
        length: 5,
        msg: 'Please enter a valid zip code'
    }]

}