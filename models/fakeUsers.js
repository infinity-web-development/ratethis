import faker from 'faker';
import uuidv1 from 'uuid/v1';

const fakeUsers = [
    {
        avatar: faker.image.avatar(),
        id: uuidv1(),
        name: faker.name.findName(),
    },
    {
        avatar: faker.image.avatar(),
        id: uuidv1(),
        name: faker.name.findName(),
    },
    {
        avatar: faker.image.avatar(),
        id: uuidv1(),
        name: faker.name.findName(),
    },
];

export default fakeUsers;
