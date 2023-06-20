'use strict';

const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.DB_URL);

const Book = require('./models/books.js');

async function seed() {

    await Book.create({
        title: 'Harry Potter and the Sorcerer\'s Stone',
        description: 'The first novel in the Harry Potter series and Rowling\'s debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.',
        status: false
    });
    console.log('Harry Potter and the Sorcerer\'s Stone was created');

    await Book.create({
        title: 'The Perks of Being a Wallflower',
        description: 'The Perks of Being a Wallflower is a 1999 book by Stephen Chbosky. It follows Charlie during his freshman year of high school as he makes and loses friends, experiments with drugs and his sexuality, and comes to grips with his past.',
        status: false
    });
    console.log('The Perks of Being a Wallflower was created');

    await Book.create({
        title: 'Captain Underpants',
        description: 'When George and Harold hypnotize their principal into thinking that he is the superhero Captain Underpants, he leads them to the lair of the nefarious Dr. Diaper, where they must defeat his evil robot henchmen.',
        status: true
    });
    console.log('Captain Underpants was created');

    mongoose.disconnect();
}

seed(); 