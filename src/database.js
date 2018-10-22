import applePic from './media/tinyApple.jpg';

// dummy dicts only for testing
var addict = { 'id': 0,
               'name': 'Python',
               'description': 'scripting backend language',
               'image': applePic,
               'alt': 'an img of an apple'};

var dictember = { 'id': 1,
                  'name': 'Javascript',
                  'description': 'scripting frontend language',
                  'image': applePic,
                  'alt': 'an illustration of an apple'};

/* reallocate this to the Axios promise when it's ready*/
// not so sure about that now :/
var dictlist = [addict, dictember];

export default dictlist;
