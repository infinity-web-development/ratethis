import faker from 'faker';
import uuidv1 from 'uuid/v1';

const fakeUploads = [
    {
        description: faker.lorem.sentences(),
        id: uuidv1(),
        image: faker.image.avatar(),
        reactions: {
            dislike: {
                count: 0,
                users: {},
            },
            like: {
                count: 0,
                users: {},
            },
            maybe: {
                count: 0,
                users: {},
            },
        },
    },
    {
        description: faker.lorem.sentences(),
        id: uuidv1(),
        image: faker.image.avatar(),
        reactions: {
            dislike: {
                count: 0,
                users: {},
            },
            like: {
                count: 0,
                users: {},
            },
            maybe: {
                count: 0,
                users: {},
            },
        },
    },
    {
        comparisons: { // Object.keys(comparison) => [0, 1]
            0: { votes: 0 },
            1: { votes: 0 },
        },
        description: faker.lorem.sentences(),
        id: uuidv1(),
        image: faker.image.avatar(),
        reactions: {
            dislike: {
                count: 0,
                users: {},
            },
            like: {
                count: 0,
                users: {},
            },
            maybe: {
                count: 0,
                users: {},
            },
        },
    },
];

export default fakeUploads;
