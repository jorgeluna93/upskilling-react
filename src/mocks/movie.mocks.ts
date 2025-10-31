import type { Movie } from "../types/movie";
import { genRandomDate } from "../utils/date.utils";

export const mockMovie: Movie = {
        id:1,
        title:"Citizen Kane", 
        description:"La historia examina la vida y el legado de Charles Foster Kane",
        releaseDate:new Date('1941-09-05'), 
        pictureURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg/800px-Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg" 
};

export const movieList: Movie[] = [ 
{
  "id": 1,
  "title": "Austin Powers",
  "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  "releaseDate": genRandomDate(new Date('1967-01-01'),new Date('2025-12-31')),
  "pictureURL": "http://dummyimage.com/170x100.png/5fa2dd/ffffff"
}, {
  "id": 2,
  "title": "Citizen Kane",
  "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  "releaseDate": genRandomDate(new Date('1967-01-01'),new Date('2025-12-31')),
  "pictureURL": "http://dummyimage.com/157x100.png/cc0000/ffffff"
}, {
  "id": 3,
  "title": "Star Wars: A New Hope",
  "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "releaseDate": genRandomDate(new Date('1967-01-01'),new Date('2025-12-31')),
  "pictureURL": "http://dummyimage.com/213x100.png/ff4444/ffffff"
}, {
  "id": 4,
  "title": "The Cat in the Hat",
  "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "releaseDate": genRandomDate(new Date('1967-01-01'),new Date('2025-12-31')),
  "pictureURL": "http://dummyimage.com/186x100.png/dddddd/000000"
}, {
  "id": 5,
  "title": "The Irishman",
  "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  "releaseDate": genRandomDate(new Date('1967-01-01'),new Date('2025-12-31')),
  "pictureURL": "http://dummyimage.com/148x100.png/cc0000/ffffff"
}, {
  "id": 6,
  "title": "Eurotrip",
  "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  "releaseDate": genRandomDate(new Date('1967-01-01'),new Date('2025-12-31')),
  "pictureURL": "http://dummyimage.com/153x100.png/cc0000/ffffff"
}
];