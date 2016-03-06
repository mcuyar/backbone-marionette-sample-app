export default {

    username: [{
        required: true,
        msg: 'Please enter a username'
    },{
        minLength: 6,
        msg: 'Please enter a username with at least six characters'
    },{
        //pattern: '^[A-Za-z0-9]$',
        //msg:  'Letters and numbers only'
    }],

    'name.first': [{
        required: true,
        msg: 'Please enter a first name'
    },{
        minLength: 3,
        msg: 'Must be at least three characters'
    }],

    'name.last': [{
        required: true,
        msg: 'Please enter a last name'
    },{
        minLength: 3,
        msg: 'Must be at least three characters'
    }],

    phone: {
        //pattern: '/^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}/',
        //msg: 'Please enter a valid phone number'
    },

    cell: {
        //pattern: '/^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}/',
        //msg: 'Please enter a valid phone number'
    },

    email: [{
        required: true,
        msg: 'Please enter an email address'
    },{
        pattern: 'email',
        msg: 'Please enter a valid email'
    }],

    'location.street': {
        required: true,
        msg: 'Please enter a street address'
    },

    'location.city': {
        required: true,
        msg: 'Please enter a city'
    },

    'location.state': {
        required: true,
        msg: 'Please enter a state'
    },

    'location.zip': [{
        required: true,
        msg: 'Please enter a zip code'
    },{
        length: 5,
        msg: 'Please enter a valid zip code'
    }]

}