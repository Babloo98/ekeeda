import { data } from './text';
console.log("datadatadata", data)

const a = [12,3,4,65,56,52,56];

const test = a.every((item) => {
    return item < 60
});

console.log(test);

const filterValues = data.filter((item) => {
    return item > 100;
});

console.log("RRRRRRRR", filterValues);

const obj = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
};

  
  console.log(obj.hasOwnProperty('aas'))
  


