const {db} = require('./server/db')
const {green, red} = require('chalk')

const Candy = require('./server/db/models/Candy');

// here's some sample candies to get you started
// feel free to edit these or add your own!
const candies = [{
  name: 'Skittles',
  description: 'Taste the rainbow',
  quantity: 2,
  imageUrl: 'https://target.scene7.com/is/image/Target/GUEST_3d2a8073-36e6-4cec-8c8c-872639105820?wid=488&hei=488&fmt=pjpeg'
}, {
  name: 'KitKat',
  description: 'Make the most of your break',
  quantity: 5,
  imageUrl: 'https://target.scene7.com/is/image/Target/GUEST_9766bfa7-3fcb-4f4c-9576-15e17ccc1044?wid=488&hei=488&fmt=pjpeg'
}, {
  name: 'M&M',
  description: 'Melts in your mouth, not in your hand',
  quantity: 4,
  imageUrl: 'http://www.ocsaccess.com/admin/clientfiles/ucsne/images/xlarge/mm%20choc.jpg'
},/* {
  // Empty name, will fail validation'
  name: '',
  description: 'Yuck',
  quantity: 1,
  imageUrl: 'foo1.bar'
},
{
  // Empty description, will fail validation'
  name: 'Blah',
  description: '',
  quantity: 1,
  imageUrl: 'foo2.bar'
},
{
  // Empty name & description, will fail validation'
  name: '',
  description: '',
  quantity: 1,
  imageUrl: 'foo3.bar'
},
{
  // Too many, will fail validation
  name: 'Too Much',
  description: 'Yuck',
  quantity: 11,
  imageUrl: 'foo4.bar'
},
{
  // default image
  name: 'Generic Candy',
  description: 'Yum',
  quantity: 7,
}*/
];

const seed = async () => {
  try {
    await db.sync({force: true})

    await Promise.all(candies.map(candy => {
      return Candy.create(candy);
    }));

    console.log(green('Seeding success!'))
    db.close()
  }
  catch (err) {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  }
}

seed();
