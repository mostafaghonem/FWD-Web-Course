import { Book, BookStore } from '../book';

const store = new BookStore();

describe('Book Model', () => {
    it('should have index method', () => {
        expect(store.index).toBeDefined();
    });
    it('should have a show method', () => {
        expect(store.show).toBeDefined();
    });
    it('should have a create method', () => {
        expect(store.create).toBeDefined();
    });
    // it('should have an update method' , ()=>{
    //     expect(store.)
    // })
    it('should have a delete method', () => {
        expect(store.delete).toBeDefined();
    });

    it('create method should add a book', async () => {
        const result = await store.create({
            id: 1,
            title: 'When i meet Omar ibn Khatab',
            author: 'Mesh Faker',
            totalPages: 250,
            summary: 'Religious',
        });
        expect(result).toEqual({
            id: 1,
            title: 'When i meet Omar ibn Khatab',
            author: 'Mesh Faker',
            totalPages: 250,
            summary: 'Religious',
        });
    });

    it('show method should return the correct book', async () => {
        const result = await store.show('1');
        expect(result).toEqual({
            id: 1,
            title: 'Bridge to Terabithia',
            author: 'Katherine Paterson',
            totalPages: 250,
            summary: 'Childrens',
        });
    });

    it('delete method should remove the book', async () => {
        store.delete('1');
        const result = await store.index();

        expect(result).toEqual([]);
    });
});
