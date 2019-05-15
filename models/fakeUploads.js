import faker from 'faker';
import uuid from 'uuid/v1';

const fakeUploads = [
    {
        avatar: faker.image.avatar(),
        description: faker.lorem.sentences(),
        id: uuid(),
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
        user: {
            fakeUserId: uuid(),
            image: faker.image.avatar(),
            name: faker.name.findName(),
        },
    },
    {
        avatar: faker.image.avatar(),
        description: faker.lorem.sentences(),
        id: uuid(),
        image: faker.image.avatar(),
        name: faker.name.findName(),
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
        user: {
            fakeUserId: uuid(),
            image: faker.image.avatar(),
            name: faker.name.findName(),
        },
    },
    {
        avatar: faker.image.avatar(),
        comparisons: { // Object.keys(comparison) => [0, 1]
            0: { votes: 0 },
            1: { votes: 0 },
        },
        description: faker.lorem.sentences(),
        id: uuid(),
        image: faker.image.avatar(),
        name: faker.name.findName(),
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
        user: {
            fakeUserId: uuid(),
            image: faker.image.avatar(),
            name: faker.name.findName(),
        },

    },
];

export default fakeUploads;
